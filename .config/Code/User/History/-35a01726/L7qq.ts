import Knex from 'knex';
import { log } from '../../../../utils/bunyan/log';

const configuration = {
  client: 'mysql2',
  connection: {
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    user: String(process.env.DB_USER),
    password: String(process.env.DB_PASS),
    database: String(process.env.DB_NAME),
    decimalNumbers: true,
  },
};

const knexLogger = log.child({
  context: 'MariaDB',
  'knex.client': configuration.client,
  'knex.host': configuration.connection.host,
  'knex.port': configuration.connection.port,
});

knexLogger.info(`Attempting connection to database connection.`);

const knex = Knex(configuration);
function isAlive() {
  return new Promise((resolve, reject) => {
    knexLogger.info('Checking if connection is alive');
    knex
      .raw('SELECT 1+1 AS result;')
      .then(() => {
        knexLogger.info(`Successfully connected to database.`);
        resolve(true);
      })
      .catch((err) => {
        knexLogger.error({ err }, `Failed to connect to database.`);
        reject(err);
      });
  });
}

// const performInitialHealthCheck = () =>
// isAlive();
// };
export { knex };
