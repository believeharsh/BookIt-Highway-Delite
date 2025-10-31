import express from 'express';
import { 
  validatePromoCode, 
  getActivePromoCodes 
} from '../controllers/promo.controller';

const promoRouter = express.Router();

promoRouter.post('/validate', validatePromoCode);
promoRouter.get('/active', getActivePromoCodes);

export default promoRouter;