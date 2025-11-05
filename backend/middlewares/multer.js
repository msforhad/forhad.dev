import multer from 'multer';
import cloudinary from '../config/cloudinary.js';
import path from 'path';

// Multer storage memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

export const uploadToCloudinary = async (fileBuffer, filename, folder = 'my_folder') => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { folder, public_id: filename, resource_type: 'auto' },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      )
      .end(fileBuffer);
  });
};

export default upload;
