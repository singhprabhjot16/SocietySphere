import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || 'my_jwt_secret_key';

export const signup = async (req, res) => {
  const collegeData = req.body;
  const { name, collegeHead, adminEmail, collegeEmail, password, cityId } = collegeData;

  const existingCollege = await prisma.college.findUnique({
    where: {
      adminEmail,
    },
  });

  if (existingCollege) {
    throw new Error('Admin email already exists.');
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const newCollege = await prisma.college.create({
    data: {
      name,
      collegeHead,
      adminEmail,
      collegeEmail,
      passwordHash,
      cityId,
    },
  });

  const token = jwt.sign({ collegeId: newCollege.id }, JWT_SECRET, { expiresIn: '1h' });

  res.json({ newCollege, token });
};


export const login = async (req, res) => {
  const { collegeEmail, password } = req.body;

  const college = await prisma.college.findFirst({
    where: {
      collegeEmail,
    },
  });

  if (!college) {
    throw new Error('College not found with this email.');
  }

  const isValidPassword = await bcrypt.compare(password, college.passwordHash);

  if (!isValidPassword) {
    throw new Error('Invalid password.');
  }

  const token = jwt.sign({ collegeId: college.id }, JWT_SECRET, { expiresIn: '1h' });

  res.json({ college, token });
};
