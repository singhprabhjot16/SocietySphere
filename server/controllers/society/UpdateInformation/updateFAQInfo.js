import { PrismaClient } from '@prisma/client';
// import multer from 'multer';

// const upload = multer(); // Initialize multer without any file handling


const prisma = new PrismaClient();

export const updateFAQ = async (req, res) => {
  const { societyId } = req.params;
  // upload.none();
  // const { id, question, answer } = req.body;
  const id = parseInt(req.body.id, 10);
  const question = req.body.question;
  const answer = req.body.answer;
  console.log(req);

  try {
    // for (const faq of faqs) {
      // const { id, question, answer } = faq;

      const response = await prisma.fAQ.update({
        where: { id },
        data: {
          question,
          answer,
          societyId: parseInt(societyId, 10),
        },
      });
    // }
    res.status(200).json({ ...response, message: 'FAQs updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update FAQs', details: error.message });
  }
};