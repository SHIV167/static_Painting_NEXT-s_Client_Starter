const v2 = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const https = require('https');

// Load environment variables from .env file
const envPath = path.join(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
      process.env[key.trim()] = valueParts.join('=').trim();
    }
  });
}

// Configure Cloudinary
v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// All images to upload
const imagesToUpload = [
  // Instagram CDN images
  'https://instagram.fdel1-8.fna.fbcdn.net/v/t51.82787-15/673122680_17962021311073055_1029815282776648670_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=100&_nc_map=urlgen_bucketless&ig_cache_key=Mzg4MjA5ODU5ODc4MzAzNzg3OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=V5IRkV0z_zMQ7kNvwEjR7Sv&_nc_oc=Adqdp5-6dSxGFDG9ZvU0ejj7kSGS4DUtQUMFaA0M0zZCSz_Qg2LLsLE6so35C6KX1P0aOJuPZ-T5ttxstMhv3P19&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-8.fna&_nc_gid=HvZqabhXxyReYwRW9fd9Kw&_nc_ss=7a22e&oh=00_AQCwdrVNzkfhSG-0gVfAdbMfJKe20W148EIA3HJgqgeG0A&oe=6A4F1A81',
  'https://instagram.fdel1-5.fna.fbcdn.net/v/t51.82787-15/656737631_17958340059073055_4019896659995797975_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_cat=104&_nc_map=urlgen_bucketless&ig_cache_key=Mzg2MTM3MTgwMDMzMzAwMTkyNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Os4RrLP4s-EQ7kNvwFLV5-r&_nc_oc=AdqbbMo966eoYOL8RF9uwWg8qhkBR_WuA0J9Y5AvuJQau4mU8-eD5LlmHmPyT2uFjtdvTtXva3CAUjaEAO8HAT3s&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-5.fna&_nc_gid=nmvwAHvdweUsSz1wDRooQQ&_nc_ss=7a22e&oh=00_AQAJ7Nt_9NghTDT3b82Nkdyo5dx9gJxLSq24un5clSaqqg&oe=6A4F1317',
  'https://instagram.fdel1-4.fna.fbcdn.net/v/t51.82787-15/655724484_17957590452073055_9117653858669761948_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&_nc_map=urlgen_bucketless&ig_cache_key=Mzg1Nzc1NjY4MDY5MjM5NzE2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=DopLmKGGxc4Q7kNvwF25Nod&_nc_oc=AdprfEa_D9goEw2P06J4cd64yAe83jpVtOvJUhRcUiItZqb3TWPE7QAuoS7CtI69odbLB_IyVHMHwjt9MmePVgu-&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-4.fna&_nc_gid=nmvwAHvdweUsSz1wDRooQQ&_nc_ss=7a22e&oh=00_AQCyy8rnM8YqkikFncHugX3pJbh9oqVXnyoe9C7XdTqRiQ&oe=6A4F344B',
  'https://instagram.fdel1-6.fna.fbcdn.net/v/t51.82787-15/525670560_17931745401073055_8114132161065609663_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_cat=104&_nc_map=urlgen_bucketless&ig_cache_key=MzY5MDI4MTM5NjU2OTkyOTUzMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=kRZov5byENwQ7kNvwHnjlhi&_nc_oc=AdrnwzYsSSXFB1K7GxIHmyfVno6Ffh5moviBD3eHMw7zQqg2elo1QffuH8d34jZKUrb44f9h7yLdYjhZ8yXCzLiY&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-6.fna&_nc_gid=grXw9gkF9RZosQFGSxlJlQ&_nc_ss=7a22e&oh=00_AQBQnQPDk_QNJn_wZUU2USJdYfP0DgKKRRlGYDEoXK0EiQ&oe=6A4F1600',
  'https://instagram.fdel1-8.fna.fbcdn.net/v/t51.82787-15/526596415_17931743298073055_6455642989614753907_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_cat=101&_nc_map=urlgen_bucketless&ig_cache_key=MzY5MDI3NDY1NDExNzM5NTI3NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=sODMf3XNdwgQ7kNvwFtbkJb&_nc_oc=Adq0yAj4FFQWyL8Qpq-lou6HsjAZcJJJXeSbvDviSV82z3dQpt4VE82Ls1jkA473gdvgG8EvcD2N0sVj85ItUWza&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-8.fna&_nc_gid=grXw9gkF9RZosQFGSxlJlQ&_nc_ss=7a22e&oh=00_AQAr3x3KmfHYYp1uI-ojiU5uy9OzISXjBa1XPW2yXzS3yw&oe=6A4F2ED6',
  'https://instagram.fdel1-4.fna.fbcdn.net/v/t51.75761-15/496482346_17922039069073055_1015974517690005411_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&_nc_map=urlgen_bucketless&ig_cache_key=MzYyODY1NTUyNjUyNTI1ODc2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Gjg5x1LgC1IQ7kNvwGXEaG5&_nc_oc=Adokl3DiRuXo349xZgdozhOk9UrOk54SNjwceQrjPxLrGVfWUWEJ0buPvASa8hki-Y1WhjG1Ab1quBrO12tvKTlB&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel1-4.fna&_nc_gid=TmznI00ciemuDviuaDZXBw&_nc_ss=7a22e&oh=00_AQCEmsPCAaRWAWxhRmABK-LiivAcZAVAGpZfWRwnRJsajg&oe=6A4F18C9',
  'https://instagram.fdel1-3.fna.fbcdn.net/v/t51.82787-19/536386137_17933733462073055_4450987526872622735_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fdel1-3.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2gFm95gSPQW6CYExMSSRJXyI1rERo18zKICuGvY5xEVEu0FA4eg9WFIHqQLUxXmfdUr-_gfqZcuehfaMU58cdya4&_nc_ohc=Cyqs6SKCD2cQ7kNvwHqWbvM&_nc_gid=CWRWS3i5ahTSQjtrIINxVQ&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AQAJTsUoOymwedbtg02XyFlJw3OtQCr3evUJuu03uR9oYA&oe=6A4F344D&_nc_sid=22de04',
];

// Function to download image from URL
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => resolve(Buffer.concat(chunks)));
      } else {
        reject(new Error(`Failed to download image: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

// Function to upload buffer to Cloudinary
async function uploadToCloudinary(buffer, publicId) {
  return new Promise((resolve, reject) => {
    v2.uploader.upload_stream(
      {
        public_id: publicId,
        folder: 'art-gallery',
        resource_type: 'image',
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    ).end(buffer);
  });
}

// Generate public ID from URL
function generatePublicId(url) {
  const filename = url.split('/').pop().split('?')[0];
  const cleanName = filename.replace(/[^a-zA-Z0-9-_]/g, '_');
  return cleanName;
}

// Main upload function
async function uploadAllImages() {
  const results = [];
  const urlMapping = {};

  console.log('Starting image upload to Cloudinary...\n');

  for (let i = 0; i < imagesToUpload.length; i++) {
    const url = imagesToUpload[i];
    const publicId = generatePublicId(url);
    
    try {
      console.log(`[${i + 1}/${imagesToUpload.length}] Downloading: ${url}`);
      const buffer = await downloadImage(url);
      
      console.log(`[${i + 1}/${imagesToUpload.length}] Uploading to Cloudinary...`);
      const result = await uploadToCloudinary(buffer, publicId);
      
      console.log(`✓ Uploaded: ${publicId}`);
      console.log(`  Cloudinary URL: ${result.secure_url}`);
      
      results.push({
        originalUrl: url,
        publicId: result.public_id,
        cloudinaryUrl: result.secure_url,
        success: true,
      });
      
      urlMapping[url] = result.secure_url;
    } catch (error) {
      console.error(`✗ Failed: ${url}`);
      console.error(`  Error: ${error.message}`);
      
      results.push({
        originalUrl: url,
        error: error.message,
        success: false,
      });
    }
    
    console.log('');
  }

  // Save results to JSON file
  const outputPath = path.join(__dirname, '../cloudinary-mapping.json');
  fs.writeFileSync(outputPath, JSON.stringify({ results, urlMapping }, null, 2));
  
  console.log('\n=== Upload Complete ===');
  console.log(`Successfully uploaded: ${results.filter(r => r.success).length}/${results.length}`);
  console.log(`Mapping saved to: ${outputPath}`);
  
  return { results, urlMapping };
}

// Run the upload
uploadAllImages().catch(console.error);
