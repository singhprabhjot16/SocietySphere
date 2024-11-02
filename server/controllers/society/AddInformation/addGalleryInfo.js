import { PrismaClient } from '@prisma/client';
import { google } from 'googleapis';
import multer from 'multer'
import fs from 'fs';
const prisma = new PrismaClient();

import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file path.
const __filename = fileURLToPath(import.meta.url);

// Get the directory name from the file path.
const __dirname = path.dirname(__filename);

const KEYFILE_PATH = path.join(__dirname, '../../../driveApiKey.json');
const SCOPES = ['https://www.googleapis.com/auth/drive.file'];
const upload = multer({ dest: 'uploads/' });
const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILE_PATH,
  scopes: SCOPES,
});

// Google Drive service
const drive = google.drive({ version: 'v3', auth });

// Upload image to Google Drive
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
    
    return response;
  // } catch (error) {
  //   console.log(error)
  // }
  }
export const addGallery = async (req, res) => {
  const { societyId } = req.params;
  const { galleries } = req.body;

  try {
    await prisma.gallery.createMany({
      data: galleries.map(gallery => ({
        ...gallery,
        societyId: parseInt(societyId, 10),
      })),
    });
    res.status(201).json({ message: 'Galleries added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add galleries', details: error.message });
  }
};
