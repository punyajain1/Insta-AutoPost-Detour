import ImageKit from 'imagekit';

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || '',
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || '',
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || '',
});

export async function uploadToImageKit(imageBuffer: Buffer, fileName: string): Promise<string> {
  if (!process.env.IMAGEKIT_PUBLIC_KEY) {
    console.warn('ImageKit credentials missing. Skipping upload.');
    return 'https://example.com/dummy-image.png';
  }

  return new Promise((resolve, reject) => {
    imagekit.upload(
      {
        file: imageBuffer, // required
        fileName: fileName, // required
        folder: '/instagram_auto', // optional
      },
      (error, result) => {
        if (error) {
          console.error('ImageKit Upload Error:', error);
          return reject(error);
        }
        if (result && result.url) {
          resolve(result.url);
        } else {
          reject(new Error('No URL returned from ImageKit'));
        }
      }
    );
  });
}

export async function cleanupOldImages(hours: number = 12): Promise<void> {
  if (!process.env.IMAGEKIT_PUBLIC_KEY) {
    return;
  }

  const cutoff = new Date(Date.now() - hours * 60 * 60 * 1000);

  try {
    const files = await new Promise<any[]>((resolve, reject) => {
      imagekit.listFiles({
        path: '/instagram_auto',
      }, (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result as any[]);
      });
    });

    for (const file of files) {
      if (new Date(file.createdAt) < cutoff) {
        await new Promise<void>((resolve, reject) => {
          imagekit.deleteFile(file.fileId, (error, result) => {
            if (error) {
              console.error(`Failed to delete ImageKit file ${file.fileId}:`, error);
              return resolve(); // Resolve instead of reject so we continue with other files
            }
            console.log(`Deleted ImageKit file ${file.fileId} (${file.name})`);
            resolve();
          });
        });
      }
    }
  } catch (err) {
    console.error('Error cleaning up ImageKit images:', err);
  }
}
