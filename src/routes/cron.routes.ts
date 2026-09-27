import { Router } from 'express';
import { runInstagramAutomation } from '../jobs/instagramAutomation.job';

export const cronRouter = Router();

// Endpoint to manually or externally trigger the instagram automation
// Ensure this is protected in production! (e.g. via a secret token)
cronRouter.get('/instagram', async (req, res) => {
  const authHeader = req.headers.authorization;
  const CRON_SECRET = process.env.CRON_SECRET;

  if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // We don't await this so the request completes quickly 
  // (Vercel has strict timeouts, but the background job might fail if the function dies. 
  // For Vercel Serverless, it's better to await it, but we have a timeout limit. We'll await it).
  
  try {
    await runInstagramAutomation();
    res.json({ success: true, message: 'Instagram automation triggered successfully.' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});
