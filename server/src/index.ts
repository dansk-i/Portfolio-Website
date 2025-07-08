import express from 'express';
import cors from 'cors';
import projectRouter from './routes/project';

const app = express();
const PORT = 3001;
app.use(cors());

// Mount router: any request starting with /api/projects is handed off to routes/projects.ts
app.use('/api/project', projectRouter);

app.get('/api/message', (_req, res) => {
  res.json({ message: 'Hello from Express backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});