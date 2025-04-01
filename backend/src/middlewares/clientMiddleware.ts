import { NextFunction, Request, Response } from "express";
import { createClientSchema } from "../joi-schemas/schemas";

export class CreateClientMiddleware {
  public receive() {
    return this.validate;
  }
  constructor() {}
  public async validate(req: Request, res: Response, next: NextFunction) {
    try {
      await createClientSchema.validateAsync(req.body);
      next();
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }
}
