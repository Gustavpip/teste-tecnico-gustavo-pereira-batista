import { CreateClientDTO } from "../../dtos/client/client";
import { IClientService, ICreateClientUseCase } from "../../interfaces/client";

export class CreateClientUseCase implements ICreateClientUseCase {
  constructor(private clientService: IClientService) {}
  async execute(data: CreateClientDTO, userAgent: string, clientIp: string) {
    const result = await this.clientService.generate(data, userAgent, clientIp);
    return result;
  }
}
