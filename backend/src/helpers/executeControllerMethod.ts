import { NextFunction, Request, Response } from "express";

export const executeControllerMethod = (controllerMethod: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controllerMethod(req, res);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        if (error.message) {
          res.status(400).json({ message: error.message });
          return;
        }
      }
    }
  };
};
