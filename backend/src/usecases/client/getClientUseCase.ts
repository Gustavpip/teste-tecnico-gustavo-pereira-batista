import { IClientService, IGetClientUseCase } from "../../interfaces/client";

export class GetClientUseCase implements IGetClientUseCase {
  constructor(private clientService: IClientService) {}
  async execute() {
    const result = await this.clientService.getAll();
    return result;
  }
}
