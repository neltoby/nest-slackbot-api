export const configuration = () => {
  return {
    environment: process.env.NODE_ENV,
    port: process.env.PORT,
    mongo_url: process.env.CONNECTION_URL,
  };
};
