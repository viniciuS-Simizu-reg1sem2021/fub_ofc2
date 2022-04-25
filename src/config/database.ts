export default (): {
  DB_DIALECT: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
} => {
  return {
    DB_DIALECT: process.env.DB_DIALECT ?? 'mysql',
    DB_HOST: process.env.DB_HOST ?? 'localhost',
    DB_NAME: process.env.DB_NAME ?? '',
    DB_PASSWORD: process.env.DB_PASSWORD ?? '',
    DB_PORT: Number(process.env.DB_PORT) ?? 3306,
    DB_USER: process.env.DB_USER ?? '',
  };
};
