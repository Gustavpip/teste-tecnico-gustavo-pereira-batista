import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
        CREATE TABLE IF NOT EXISTS logs (
            id SERIAL PRIMARY KEY,
            url_chamada VARCHAR(255) NOT NULL,
            codigo_status INT NOT NULL,
            corpo_resposta TEXT,  
            metodo_requisicao VARCHAR(10),
            ip_cliente VARCHAR(45),
            usuario_agente VARCHAR(255),
            data_criacao TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
            tempo_resposta INT,
            cabecalhos JSONB,
            mensagem_erro TEXT
        );
    
    `);
}

export async function down(knex: Knex): Promise<void> {
    await knex.raw("DROP TABLE logs;");
}
