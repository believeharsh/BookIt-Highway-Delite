import express from 'express';
import { 
  getAllExperiences, 
  getExperienceById, 
  getCategories 
} from '../controllers/experience.Controller';

const experienceRouter = express.Router();

experienceRouter.get('/', getAllExperiences);
experienceRouter.get('/categories', getCategories);
experienceRouter.get('/:id', getExperienceById);

export default experienceRouter;