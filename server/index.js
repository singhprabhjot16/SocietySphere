import express from 'express';
import searchRoutes from './routes/search.js';
import societiesInfo from './routes/society.js';
import signup from './routes/signup.js'
import collegesignup from './routes/collegesignup.js';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 6001;

app.use(cors())
app.use(express.json());
app.use(cors());
app.use('/search', searchRoutes);
app.use('/society', societiesInfo);
app.use('/societyHead', signup);
app.use('/collegeHead', collegesignup);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
