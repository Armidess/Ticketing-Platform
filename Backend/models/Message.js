import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './User.js';
import Ticket from './Ticket.js';

const Message = sequelize.define('Message', {
  message: DataTypes.TEXT,
});

Ticket.hasMany(Message, { foreignKey: 'ticketId' });
Message.belongsTo(Ticket, { foreignKey: 'ticketId' });

User.hasMany(Message, { foreignKey: 'senderId' });
Message.belongsTo(User, { foreignKey: 'senderId' });

export default Message;
