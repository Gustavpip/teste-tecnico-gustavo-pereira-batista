import db from "../../db";

import { CreateClientDTO } from "../dtos/client/client";
import { IClientRepository } from "../interfaces/client";
import { Client } from "../types/client";

export class ClientRepository implements IClientRepository {
  async generate(data: CreateClientDTO): Promise<Client> {
    const insertedRows = await db("clientes")
      .insert({
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
      })
      .returning("*");

    const newClient = insertedRows[0] as Client;
    return newClient;
  }
  async getAll(): Promise<Client[]> {
    const clients = await db("clientes").select("*");
    return clients;
  }

  async exists(email: string): Promise<boolean> {
    const client = await db("clientes").select("id").where({ email }).first();
    return !!client;
  }
}
