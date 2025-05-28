import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './User.js';

const Ticket = sequelize.define('Ticket', {
  subject: DataTypes.STRING,
  description: DataTypes.TEXT,
  status: {
    type: DataTypes.ENUM('Open', 'In Progress', 'Resolved', 'Closed'),
    defaultValue: 'Open'
  },
  priority: {
    type: DataTypes.ENUM('Low', 'Medium', 'High', 'Urgent'),
    defaultValue: 'Low'
  },
  escalation_level: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

User.hasMany(Ticket, { foreignKey: 'userId' });
Ticket.belongsTo(User, { foreignKey: 'userId' });

export default Ticket;
