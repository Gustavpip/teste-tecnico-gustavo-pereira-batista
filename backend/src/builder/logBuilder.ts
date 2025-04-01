import { ILogBuilder } from "../interfaces/logs";
import { CreateLog } from "../types/log";

export class LogBuilder implements ILogBuilder {
  private log: Partial<CreateLog>;
  constructor() {
    this.log = {};
  }

  setUrlChamada(url: string) {
    this.log.url_chamada = url;
    return this;
  }

  setCodigoStatus(code: number) {
    this.log.codigo_status = code;
    return this;
  }

  setResponseBody(body: string) {
    this.log.corpo_resposta = body;
    return this;
  }

  setRequestMethod(method: string) {
    this.log.metodo_requisicao = method;
    return this;
  }

  setClientIp(ip: string) {
    this.log.ip_cliente = ip;
    return this;
  }

  setUserAgent(userAgent: string) {
    this.log.usuario_agente = userAgent;
    return this;
  }

  setResponseTime(time: number) {
    this.log.tempo_resposta = time;
    return this;
  }

  setHeaders(headers: string) {
    this.log.cabecalhos = headers;
    return this;
  }

  setErroMessage(message: string) {
    this.log.mensagem_erro = message;
    return this;
  }

  build() {
    return this.log as CreateLog;
  }
}
