import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/api/message', (req, res) => {
  res.json({message: 'Hello from Express backend!'});
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});