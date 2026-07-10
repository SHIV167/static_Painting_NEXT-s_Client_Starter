const v2 = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

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

// Local files to upload
const localFilesToUpload = [
  {
    path: path.join(__dirname, '../public/artist-profile.webp'),
    publicId: 'artist-profile'
  },
  {
    path: path.join(__dirname, '../public/logo.png'),
    publicId: 'logo'
  }
];

// Function to upload local file to Cloudinary
async function uploadLocalFile(filePath, publicId) {
  return new Promise((resolve, reject) => {
    v2.uploader.upload(
      filePath,
      {
        public_id: publicId,
        folder: 'art-gallery',
        resource_type: 'image',
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
  });
}

// Main upload function
async function uploadAllImages() {
  const results = [];
  const urlMapping = {};

  console.log('Starting local image upload to Cloudinary...\n');

  for (let i = 0; i < localFilesToUpload.length; i++) {
    const { path: filePath, publicId } = localFilesToUpload[i];
    
    try {
      console.log(`[${i + 1}/${localFilesToUpload.length}] Uploading: ${filePath}`);
      
      const result = await uploadLocalFile(filePath, publicId);
      
      console.log(`✓ Uploaded: ${publicId}`);
      console.log(`  Cloudinary URL: ${result.secure_url}`);
      
      results.push({
        originalPath: filePath,
        publicId: result.public_id,
        cloudinaryUrl: result.secure_url,
        success: true,
      });
      
      urlMapping[filePath] = result.secure_url;
    } catch (error) {
      console.error(`✗ Failed: ${filePath}`);
      console.error(`  Error: ${error.message}`);
      
      results.push({
        originalPath: filePath,
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
