import cron from 'node-cron';
import Ticket from '../models/Ticket.js';
import { Op } from 'sequelize';

// Escalation thresholds in hours
const escalationRules = [
  { from: 'Low', to: 'Medium', hours: 48 },
  { from: 'Medium', to: 'High', hours: 24 },
  { from: 'High', to: 'Urgent', hours: 12 },
];

export const startEscalationJob = () => {
  cron.schedule('0 * * * *', async () => {
    console.log(`[ESCALATION JOB] Running at ${new Date().toISOString()}`);

    for (const rule of escalationRules) {
      const thresholdDate = new Date(Date.now() - rule.hours * 60 * 60 * 1000);

      const tickets = await Ticket.findAll({
        where: {
          priority: rule.from,
          status: { [Op.not]: 'Resolved' },
          updatedAt: { [Op.lte]: thresholdDate },
        },
      });

      for (const ticket of tickets) {
        console.log(`Escalating ticket ${ticket.id} from ${rule.from} to ${rule.to}`);
        ticket.priority = rule.to;
        ticket.escalation_level += 1;
        await ticket.save();
      }
    }
  });
};
