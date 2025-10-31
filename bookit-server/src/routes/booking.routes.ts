import express from 'express';
import { 
  createBooking, 
  getBookingByBookingId 
} from '../controllers/booking.controller';

const bookingRouter = express.Router();

bookingRouter.post('/', createBooking);
bookingRouter.get('/:bookingId', getBookingByBookingId);

export default bookingRouter;