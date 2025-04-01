import { Client } from "../types/client";
import { CreateClientDTO } from "../dtos/client/client";
import {
  IClientRepository,
  IClientService,
  ILogService,
} from "../interfaces/client";

import { config } from "dotenv";

config();

export class ClientService implements IClientService {
  constructor(
    private clientRepository: IClientRepository,
    private logService: ILogService
  ) {}
  async generate(
    data: CreateClientDTO,
    userAgent: string,
    clientIp: string
  ): Promise<Client> {
    if (await this.clientRepository.exists(data.email)) {
      throw new Error("Cliente já cadastrado no sistema.");
    }

    const newClient = await this.clientRepository.generate(data);

    await this.logService.generate(userAgent, clientIp);
    return newClient;
  }
  async getAll(): Promise<Client[]> {
    const clients = await this.clientRepository.getAll();
    return clients;
  }
}
