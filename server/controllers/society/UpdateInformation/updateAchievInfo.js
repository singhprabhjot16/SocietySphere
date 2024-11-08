import { PrismaClient } from '@prisma/client';
import { google } from 'googleapis';
import multer from 'multer'
import fs from 'fs';
const prisma = new PrismaClient();

import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file path.
const filename = fileURLToPath(import.meta.url);

// Get the directory name from the file path.
const dirname = path.dirname(filename);

const KEYFILE_PATH = path.join(dirname, '../../../driveApiKey.json');
const SCOPES = ['https://www.googleapis.com/auth/drive.file'];
const upload = multer({ dest: 'uploads/' });
const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILE_PATH,
  scopes: SCOPES,
});

// Google Drive service
const drive = google.drive({ version: 'v3', auth });

async function uploadFileToDrive(filePath, fileName) {
  // try {

    const fileMetadata = { name: fileName, parents: ['1zuWQv0UkvoPUEWKbBm83F0v3UmdurSCf'] };
    const media = { mimeType: 'image/png', body: fs.createReadStream(filePath) };

    console.log(fileMetadata)
    const response = drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id,webViewLink',
    });
    console.log("response: ", response)
    return response;
  // } catch (error) {
  //   console.log(error)
  // }
  }
export const updateAchievement = async (req, res) => {
  try {
    const { societyId } = req.params;
    const achievement = req.body;
    const imageFile = req.file;

    // Iterate over each achievement
    // for (const achievement of achievements) {
      const achievementDetails = achievement; 
      const {id} = achievement;
      // Log the achievement details
      
      // Handle image upload if an image file is provided
      console.log("Achievement details: ", achievementDetails, "image file: ", imageFile, societyId);
      let imageUrl = null;
      if (imageFile) {
        const driveUrl = await uploadFileToDrive(imageFile.path, imageFile.filename);
        imageUrl = driveUrl.data.id; // Extract the URL or ID from the response
        console.log("Image uploaded on drive: ", driveUrl.data);
      }
      
      // Create the achievement record in the database
      await prisma.achievement.update({
        where: { id },
        data: { 
          ...achievement,
          imageUrl: imageUrl || null, // Store the image URL if available
          societyId: parseInt(societyId, 10),
        },
      });
    // }

    res.status(201).json({ message: 'Achievements updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update achievements', details: error });
  }
};