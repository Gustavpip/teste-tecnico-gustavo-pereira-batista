import { config } from "dotenv";

config();

export default {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST as string,
      user: process.env.DB_USER as string,
      password: process.env.DB_PASSWORD as string,
      database: process.env.DB_DATABASE as string,
      port: process.env.DB_PORT as string,
      connectionTimeout: 20000,
    },
    migrations: {
      directory: "./src/migrations",
      extension: "ts",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
