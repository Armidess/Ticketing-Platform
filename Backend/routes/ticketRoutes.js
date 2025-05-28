import express from 'express';
import {
  createTicket,
  getTickets,
  replyToTicket,
} from '../controllers/ticketController.js';

import { protect } from '../middleware/authMiddleware.js';
import { authorize } from '../middleware/roleMiddleware.js';

const router = express.Router();

router.use(protect);

router.route('/')
  .post(createTicket)
  .get(getTickets);

router.post('/:id/reply', replyToTicket);

export default router;
