import express from 'express';
import { 
  validatePromoCode, 
  getActivePromoCodes 
} from '../controllers/promo.Controller';

const promoRouter = express.Router();

promoRouter.post('/validate', validatePromoCode);
promoRouter.get('/active', getActivePromoCodes);

export default promoRouter;