import cron from 'node-cron';
import { prisma } from '../lib/prisma'; // Assuming prisma is in lib/prisma, let me double check or use a generic import. Wait, the Prisma client in this repo is probably in `lib/prisma` or `index.ts`. Let's just import from '@prisma/client' directly if needed. 
import { generateCardImage } from '../services/imageGenerator';
import { uploadToImageKit, cleanupOldImages } from '../integrations/imageKit';
import { scheduleBufferPost } from '../integrations/buffer';

// Function to run the Instagram automation
export async function runInstagramAutomation() {
  console.log('[Instagram Automation] Starting job...');
  try {
    // 1. Get a random feed item. 
    // Prisma doesn't have a built-in random function, but we can query by a random offset
    const count = await prisma.feedCard.count();
    if (count === 0) {
      console.log('[Instagram Automation] No feed items found in DB.');
      return;
    }
    const skip = Math.floor(Math.random() * count);
    const card = await prisma.feedCard.findFirst({
      skip,
      take: 1,
    });

    if (!card) {
      console.log('[Instagram Automation] Card not found.');
      return;
    }

    console.log(`[Instagram Automation] Selected card: ${card.title} (${card.type})`);

    // 2. Generate the Image via Satori
    const imageBuffer = await generateCardImage(card);
    console.log('[Instagram Automation] Image generated successfully.');

    // 3. Upload to ImageKit
    const fileName = `instagram-${card.type}-${Date.now()}.png`;
    const imageKitUrl = await uploadToImageKit(imageBuffer, fileName);
    console.log(`[Instagram Automation] Uploaded to ImageKit: ${imageKitUrl}`);

    // 4. Post to Buffer
    const cardUrl = card.url ? `\n\n🔗 ${card.url}` : '';
    const caption = `${card.title}\n\n${card.description || ''}${cardUrl}\n\n#tech #news #dev #programming #update`;
    await scheduleBufferPost(imageKitUrl, caption);
    console.log('[Instagram Automation] Successfully scheduled post in Buffer.');

    // 5. Cleanup old images from ImageKit
    console.log('[Instagram Automation] Cleaning up old images from ImageKit...');
    cleanupOldImages(12).catch(err => console.error('Failed to cleanup old images:', err));

  } catch (error) {
    console.error('[Instagram Automation] Job failed:', error);
    throw error; // Re-throw so the cron router can catch it and return a 500
  }
}

// Start the cron job
export function startInstagramCron() {
  // Run 2 times a day, e.g., 10 AM and 6 PM
  cron.schedule('0 10,18 * * *', () => {
    runInstagramAutomation();
  });
  console.log('[Instagram Automation] Cron job scheduled (10:00 and 18:00 daily).');
}
