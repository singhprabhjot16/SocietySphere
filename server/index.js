import express from 'express';
import searchRoutes from './routes/search.js';
import societiesInfo from './routes/society.js';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())
app.use(express.json());

app.use('/search', searchRoutes);
app.use('/society', societiesInfo);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
