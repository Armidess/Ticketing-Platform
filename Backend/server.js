import app from './app.js';
import sequelize from './config/db.js';
import { startEscalationJob } from './jobs/escalationJob.js';

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    startEscalationJob();
  });
});
