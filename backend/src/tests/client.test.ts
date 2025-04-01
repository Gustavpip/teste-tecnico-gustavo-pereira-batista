import {
  describe,
  it,
  jest,
  expect,
  afterEach,
  afterAll,
  beforeEach,
} from "@jest/globals";
import request from "supertest";

import { ClientFluent } from "../fluent-api/clientBuilderFluent";
import { ClientService } from "../services/clientService";

import app from "../server";
import db from "../../db";

describe("Clients", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  afterAll(async () => {
    await db.destroy();
  });

  describe("POST /clientes", () => {
    it("Deveria retornar um objeto client", async () => {
      const client = new ClientFluent()
        .withId(1)
        .withName("Gustavo Batista")
        .withPhone("73999999999")
        .withEmail("gustavo.promad@gmail.com")
        .build() as never;

      ClientService.prototype.generate = jest
        .fn()
        .mockResolvedValue(client) as never;

      const response = await request(app).post("/clientes").send({
        nome: "Gustavo Batista",
        email: "gustavo.promad@gmail.com",
        telefone: "73999999999",
      });

      expect(response.status).toBe(201);
      expect(response.body).toEqual(client);
    });
  });

  describe("GET /clientes", () => {
    const mockClients = [
      new ClientFluent()
        .withId(1)
        .withName("Gustavo Batista")
        .withPhone("73999999999")
        .withEmail("gustavo.promad@gmail.com")
        .build() as never,
      new ClientFluent()
        .withId(1)
        .withName("Gabriel Silva")
        .withPhone("73999999991")
        .withEmail("gabriel.promad@gmail.com")
        .build() as never,
    ];

    beforeEach(() => {
      jest.restoreAllMocks();
    });

    it("Deveria retornar todos os clientes", async () => {
      jest
        .spyOn(ClientService.prototype, "getAll")
        .mockResolvedValue(mockClients);

      const response = await request(app).get("/clientes");

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockClients);
    });
  });
});
