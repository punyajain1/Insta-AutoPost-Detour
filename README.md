# Detour - Instagram Automation Backend

This project is a dedicated backend service designed to automate Instagram posts. It fetches pre-populated content (feed cards) from a PostgreSQL database, dynamically generates custom images, uploads them to ImageKit, and schedules the final post on Instagram using Buffer.

## Features
- **Cron Jobs**: Automated background tasks scheduled using `node-cron`.
- **Dynamic Image Generation**: Creates images on the fly based on feed data.
- **Image Storage**: Automatically uploads generated images to ImageKit and cleans up images older than 12 hours.
- **Buffer Integration**: Schedules Instagram posts directly via Buffer's API.
- **Manual Trigger**: Provides a secure `/api/cron/instagram` endpoint to trigger automation on demand.

## Prerequisites
- Node.js (v18+ recommended)
- PostgreSQL database
- [ImageKit](https://imagekit.io/) account for image hosting
- [Buffer](https://buffer.com/) account connected to an Instagram profile

## Setup

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Environment Configuration**:
   Copy the example environment file and fill in your credentials.
   ```bash
   cp .env.example .env
   ```
4. **Database Setup**:
   Generate Prisma client and push the schema to your database.
   ```bash
   npx prisma generate
   npx prisma db push
   ```
5. **Start the server**:
   ```bash
   npm run dev
   ```

## Triggering the Automation

The automation runs automatically based on the cron schedule (by default, 10:00 and 18:00 daily). You can also manually trigger it by sending a GET request to the cron endpoint with your `CRON_SECRET`.

```bash
curl -X GET http://localhost:4000/api/cron/instagram \
  -H "Authorization: Bearer my-super-secret-cron-password"
```

## How It Works
1. Selects a random feed card from the database.
2. Generates an image using Satori.
3. Uploads the image to ImageKit.
4. Schedules the post to Buffer.
5. Asynchronously cleans up any old images in ImageKit (> 12 hours old) to save space.
