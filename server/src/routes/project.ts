import { Router } from 'express';
import { projects } from '../data/project';

const router = Router();

// GET /api/projects   – return all projects
router.get('/', (_req, res) => {
  res.json(projects);
});

export default router;