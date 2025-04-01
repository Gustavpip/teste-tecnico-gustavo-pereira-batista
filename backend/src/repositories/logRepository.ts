import { ILogRepository } from "../interfaces/client";
import db from "../../db";
import { CreateLog, LogData } from "src/types/log";

export class LogRepository implements ILogRepository {
  async generate(data: CreateLog): Promise<LogData> {
    const insertedRows = await db("logs")
      .insert({
        url_chamada: data.url_chamada,
        codigo_status: data.codigo_status,
        corpo_resposta: data.corpo_resposta,
        metodo_requisicao: data.metodo_requisicao,
        ip_cliente: data.ip_cliente,
        usuario_agente: data.usuario_agente,
        tempo_resposta: data.tempo_resposta,
        cabecalhos: data.cabecalhos,
        mensagem_erro: data.mensagem_erro,
      })
      .returning("*");

    const newLog = insertedRows[0] as LogData;
    return newLog;
  }
}
