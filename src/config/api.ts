export default (): {
  API_PORT: number;
  API_BASE_URL: string;
} => {
  return {
    API_PORT: Number(process.env.PORT) ?? 3000,
    API_BASE_URL: process.env.API_BASE_URL ?? '/v1/fub',
  };
};
