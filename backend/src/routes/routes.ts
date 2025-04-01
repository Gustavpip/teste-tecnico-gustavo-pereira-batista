import { Router } from "express";
import { ClientFactory } from "../factories/clientFactory";
import { IClientController } from "../interfaces/client";
import { executeControllerMethod } from "../helpers/executeControllerMethod";
import { CreateClientMiddleware } from "../middlewares/clientMiddleware";

export const router = Router();

const clientController: IClientController = new ClientFactory().build();

router.post(
  "/clientes",
  new CreateClientMiddleware().receive(),
  executeControllerMethod(clientController.generate.bind(clientController))
);

router.get(
  "/clientes",
  executeControllerMethod(clientController.getAll.bind(clientController))
);
