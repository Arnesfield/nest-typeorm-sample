module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  synchronize: String(process.env.DB_SYNCHRONIZE).toLowerCase() === 'true',
  dropSchema: ['development', 'test'].includes(process.env.NODE_ENV),
  entities: ['dist/**/*.entity{.ts,.js}']
};
