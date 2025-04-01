import { GetClientUseCase } from "../usecases/client/getClientUseCase";
import { ClientController } from "../controllers/clientController";
import { ClientRepository } from "../repositories/clientRepository";
import { ClientService } from "../services/clientService";
import { CreateClientUseCase } from "../usecases/client/createClientUseCase";

import { LogService } from "../services/logService";
import { LogRepository } from "../repositories/logRepository";
import { UserService } from "../services/userService";
import { LogBuilder } from "../builder/logBuilder";

export class ClientFactory {
  build() {
    const logBuilder = new LogBuilder();
    const userService = new UserService();
    const logRepository = new LogRepository();

    const logService = new LogService(logRepository, userService, logBuilder);

    const clientRepository = new ClientRepository();

    const clientService = new ClientService(clientRepository, logService);

    const getClientUseCase = new GetClientUseCase(clientService);
    const createClientUseCase = new CreateClientUseCase(clientService);
    const clientController = new ClientController(
      createClientUseCase,
      getClientUseCase
    );
    return clientController;
  }
}
