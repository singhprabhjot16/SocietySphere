import express from 'express';
import { PrismaClient } from '@prisma/client';
import search from './routes/search.js'

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 6000;
// app.get('/search')
// app.get('/collgesignup')
// app.get('/societydata')
app.use(express.json());

app.get('/search', search);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
