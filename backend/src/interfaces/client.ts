import { Request, Response } from "express";

import { CreateClientDTO } from "../dtos/client/client";
import { Client } from "../types/client";
import { CreateLog, LogData } from "src/types/log";

import { AxiosResponse } from "axios";

export interface IClientController {
  generate(req: Request, res: Response): Promise<Response>;
  getAll(req: Request, res: Response): Promise<Response>;
}

export interface IClientService {
  generate(
    data: CreateClientDTO,
    userAgent: string,
    clientIp: string
  ): Promise<Client>;
  getAll(): Promise<Client[]>;
}

export interface IClientRepository {
  generate(data: CreateClientDTO): Promise<Client>;
  getAll(): Promise<Client[]>;
  exists(email: string): Promise<boolean>;
}

export interface IUserService {
  getAll(): Promise<AxiosResponse<any, any> | null>;
}

export interface ILogService {
  generate(userAgent: string, clientIp: string): Promise<LogData | null>;
}

export interface ILogRepository {
  generate(data: CreateLog): Promise<LogData>;
}

export interface IUseCase<Input, Output> {
  execute(data: Input): Promise<Output>;
}

export interface ICreateClientUseCase {
  execute(
    data: CreateClientDTO,
    userAgent: string,
    clientIp: string
  ): Promise<Client>;
}

export interface IGetClientUseCase extends IUseCase<void, Client[]> {}
