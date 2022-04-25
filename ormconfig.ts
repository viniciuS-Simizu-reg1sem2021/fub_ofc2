import database from '@config/database';

const databaseConfig = database();

module.exports = [
  {
    type: databaseConfig.DB_DIALECT,
    host: databaseConfig.DB_HOST,
    port: databaseConfig.DB_PORT,
    username: databaseConfig.DB_USER,
    password: databaseConfig.DB_PASSWORD,
    database: databaseConfig.DB_NAME,
    synchronize: false,
    logging: true,
    logger: 'file',
    entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
    migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
    subscribers: ['./src/subscriber/**/*.ts'],
    cli: {
      entitiesDir: './src/modules/**/infra/typeorm/entities/*.ts',
      migrationsDir: './src/shared/infra/typeorm/migrations',
      subscribersDir: './src/subscriber',
    },
  },
];
