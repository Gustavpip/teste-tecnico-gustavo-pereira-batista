import { ILogBuilder } from "../interfaces/logs";

import {
  ILogRepository,
  ILogService,
  IUserService,
} from "../interfaces/client";
import { LogData } from "../types/log";

export class LogService implements ILogService {
  constructor(
    private logRepository: ILogRepository,
    private userService: IUserService,
    private logBuilder: ILogBuilder
  ) {}
  async generate(userAgent: string, clientIp: string): Promise<LogData | null> {
    const UNKNOWN_TEXT = "UNKNOWN";

    const start = Date.now();

    const result = await this.userService.getAll();

    const end = Date.now();
    const responseTime = end - start;

    if (!result) {
      return null;
    }

    const urlChamada = `${process.env.API_URL_BASE}${result.config.url}`;

    const oNewLog = this.logBuilder
      .setUrlChamada(urlChamada as string)
      .setCodigoStatus(result.status)
      .setResponseBody(JSON.stringify(result.data))
      .setRequestMethod(
        result.config.method ? result.config.method.toUpperCase() : UNKNOWN_TEXT
      )
      .setClientIp(clientIp || UNKNOWN_TEXT)
      .setUserAgent(userAgent)
      .setResponseTime(responseTime)
      .setHeaders(JSON.stringify(result.headers))
      .setErroMessage(result.data.error ? result.data.error : "Nenhum erro")
      .build();

    const newLog = await this.logRepository.generate(oNewLog);

    return newLog;
  }
}
