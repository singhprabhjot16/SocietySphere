import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || 'my_jwt_secret_key';

export const signup = async (req, res) => {
  const societyData = req.body;
  const { name, aboutSociety, prerequisites, societyHead, societyEmail, adminEmail, password, collegeId, type } = societyData;

  const existingSociety = await prisma.society.findUnique({
    where: {
      societyEmail,
    },
  });

  if (existingSociety) {
    throw new Error('Society email already exists.');
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const newSociety = await prisma.society.create({
    data: {
      name,
      aboutSociety,
      prerequisites,
      societyHead,
      societyEmail,
      adminEmail,
      passwordHash,
      collegeId,
      type,
    },
  });

  const token = jwt.sign({ societyId: newSociety.id }, JWT_SECRET, { expiresIn: '1h' });

  res.json(
    {newSociety, token}
  );
}

export const login = async (req, res) => {
    const { societyEmail, password } = req.body;
    console.log(req.body);

    const society = await prisma.society.findFirst({
      where: {
        societyEmail,
      },
    });
  
    if (!society) {
      throw new Error('Society not found with this email.');
    }
  
    const isValidPassword = await bcrypt.compare(password, society.passwordHash);
  
    if (!isValidPassword) {
      throw new Error('Invalid password.');
    }
  
    const token = jwt.sign({ societyId: society.id }, JWT_SECRET, { expiresIn: '1h' });
    
    console.log("Logged in");
    res.json(
        {society, token}
      );
  }
