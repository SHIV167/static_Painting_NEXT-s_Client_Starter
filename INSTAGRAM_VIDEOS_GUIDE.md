# How to Add Instagram Videos to the Video Slider

## Overview
The video slider component (`VideoCardSlider`) displays Instagram-style video cards with inline playback. Here's how to add your actual Instagram videos.

## Option 1: Download Instagram Videos (Recommended)

### Step 1: Download Your Instagram Videos
Use a tool to download your Instagram Reels/videos as MP4 files:
- **Online tools**: SaveFrom.net, SnapInsta, or similar
- **Desktop apps**: 4K Video Downloader
- **Browser extensions**: Video DownloadHelper

### Step 2: Upload Videos to Cloudinary
1. Go to your Cloudinary dashboard
2. Upload the downloaded MP4 files
3. Copy the video URLs from Cloudinary

### Step 3: Update the Video Cards Array
In `src/app/page.tsx`, update the `videoCards` array:

```typescript
const videoCards = [
  {
    id: '1',
    thumbnail: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1234567890/thumbnail.jpg',
    videoUrl: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1234567890/your-video.mp4',
    title: 'Your Video Title',
    artist: 'heena_chowdhary',
    location: 'Delhi, India',
    likes: 234,
    comments: 45
  },
  // Add more videos...
];
```

## Option 2: Use Instagram Embed (Alternative)

Instagram doesn't provide direct video URLs, but you can use embed codes. However, this requires modifying the component to support iframes.

## Option 3: Use Third-Party Video Hosting

### YouTube
1. Upload videos to YouTube (unlisted or public)
2. Use the video URL in the format: `https://www.youtube.com/watch?v=VIDEO_ID`
3. Note: Current component uses direct MP4, so you'd need to modify it to support YouTube embeds

### Vimeo
1. Upload to Vimeo
2. Get the direct MP4 link from Vimeo settings
3. Use that URL in the `videoUrl` field

## Thumbnail Images

For best results:
- Use a frame from your video as the thumbnail
- Upload thumbnails to Cloudinary
- Size: 400x600px (portrait aspect ratio)
- Format: JPG or WebP

## Example: Adding Your First Instagram Video

```typescript
const videoCards = [
  {
    id: '1',
    thumbnail: 'https://res.cloudinary.com/dj15ypnx8/image/upload/v1782740752/art-gallery/your-thumbnail.jpg',
    videoUrl: 'https://res.cloudinary.com/dj15ypnx8/video/upload/v1782740752/art-gallery/your-video.mp4',
    title: 'Creating Ekaant - Acrylic on Canvas',
    artist: 'heena_chowdhary',
    location: 'Delhi, India',
    likes: 234,
    comments: 45
  },
];
```

## Tips

1. **Video Format**: Use MP4 format for best browser compatibility
2. **Video Size**: Keep videos under 50MB for faster loading
3. **Thumbnail**: Always provide a thumbnail for better UX
4. **Titles**: Use descriptive titles that match your Instagram captions
5. **Engagement**: Update likes/comments to match your Instagram engagement

## Cloudinary Setup

If you haven't set up Cloudinary:
1. Sign up at cloudinary.com
2. Get your Cloud Name, API Key, and API Secret
3. Add these to your `.env` file:
```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Troubleshooting

**Video not playing?**
- Check if the video URL is accessible
- Ensure the video format is MP4
- Check browser console for errors

**Thumbnail not loading?**
- Verify the thumbnail URL is correct
- Check if the image is publicly accessible
- Ensure the image format is supported (JPG, PNG, WebP)

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify your Cloudinary credentials
3. Test the video URL in a new browser tab
