const SCOPES = ['https://www.googleapis.com/auth/drive.file'];
const KEYFILE_PATH = path.join(__dirname, 'credentials.json'); // Google API credentials

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Google Drive Authentication
const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILE_PATH,
  scopes: SCOPES,
});

// Google Drive service
const drive = google.drive({ version: 'v3', auth: auth.getClient() });

// Upload image to Google Drive
async function uploadFileToDrive(filePath, fileName) {
  const fileMetadata = { name: fileName, parents: ['<GOOGLE_DRIVE_FOLDER_ID>'] };
  const media = { mimeType: 'image/jpeg', body: fs.createReadStream(filePath) };

  const response = await drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: 'id,webViewLink',
  });

  return response.data.webViewLink;
}

// API to handle file uploads
export const uploadImage = async (req, res) => {
  const { file } = req; // multer adds file to req

  try {
    // Upload file to Google Drive
    const driveUrl = await uploadFileToDrive(file.path, file.originalname);

    // Store URL in the database
    const newImage = await prisma.gallery.create({
      data: { imageUrl: driveUrl, caption: 'Uploaded image' },
    });

    // Clean up uploaded file from server
    fs.unlinkSync(file.path);

    res.status(200).json({ url: driveUrl });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload image', details: error.message });
  }
};