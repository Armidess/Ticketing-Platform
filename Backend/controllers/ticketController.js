import Ticket from '../models/Ticket.js';
import Message from '../models/Message.js';

export const createTicket = async (req, res) => {
  const ticket = await Ticket.create({
    ...req.body,
    userId: req.user.id
  });
  res.status(201).json(ticket);
};

export const getTickets = async (req, res) => {
  const tickets = req.user.role === 'admin'
    ? await Ticket.findAll()
    : await Ticket.findAll({ where: { userId: req.user.id } });

  res.json(tickets);
};

export const replyToTicket = async (req, res) => {
  const ticket = await Ticket.findByPk(req.params.id);
  if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

  if (req.user.role !== 'admin' && ticket.userId !== req.user.id) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const message = await Message.create({
    message: req.body.message,
    ticketId: ticket.id,
    senderId: req.user.id,
  });

  res.status(201).json(message);
};
