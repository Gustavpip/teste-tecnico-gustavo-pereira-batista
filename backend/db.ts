import knex from "knex";
import knexConfig from "./knexConfig";

const db = knex(knexConfig.development);

export default db;
