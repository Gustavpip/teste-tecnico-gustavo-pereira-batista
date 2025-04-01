import { Client } from "../types/client";

export class ClientFluent {
  private client: Partial<Client>;
  constructor() {
    this.client = {};
  }

  withId(id: number) {
    this.client.id = id;
    return this;
  }

  withName(name: string) {
    this.client.nome = name;
    return this;
  }

  withPhone(phone: string) {
    this.client.telefone = phone;
    return this;
  }

  withEmail(email: string) {
    this.client.email = email;
    return this;
  }

  build() {
    return this.client as Client;
  }
}
