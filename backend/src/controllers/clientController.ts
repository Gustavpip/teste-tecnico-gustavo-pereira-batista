import { Request, Response } from "express";
import { CreateClientDTO } from "../dtos/client/client";
import {
  ICreateClientUseCase,
  IClientController,
  IGetClientUseCase,
} from "../interfaces/client";

export class ClientController implements IClientController {
  constructor(
    private createClientUseCase: ICreateClientUseCase,
    private getClientUseCase: IGetClientUseCase
  ) {}
  async generate(req: Request, res: Response) {
    const clientData: CreateClientDTO = req.body;
    const result = await this.createClientUseCase.execute(
      clientData,
      req.headers["user-agent"] as string,
      req.ip as string
    );

    return res.status(201).json(result);
  }
  async getAll(_req: Request, res: Response) {
    const result = await this.getClientUseCase.execute();
    return res.status(200).json(result);
  }
}
