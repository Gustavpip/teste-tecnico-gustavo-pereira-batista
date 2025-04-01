import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE TABLE IF NOT EXISTS clientes (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      telefone VARCHAR(20) NOT NULL,
      data_cadastro TIMESTAMP DEFAULT NOW()
    );
  `);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw("DROP TABLE clientes;");
}
