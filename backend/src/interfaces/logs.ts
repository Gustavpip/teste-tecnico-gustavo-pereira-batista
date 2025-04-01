import { CreateLog } from "../types/log";

export interface ILogBuilder {
  setUrlChamada(url: string): this;
  setCodigoStatus(code: number): this;
  setResponseBody(body: string): this;
  setRequestMethod(method: string): this;
  setClientIp(ip: string): this;
  setUserAgent(userAgent: string): this;
  setResponseTime(time: number): this;
  setHeaders(headers: string): this;
  setErroMessage(message: string): this;
  build(): CreateLog;
}
