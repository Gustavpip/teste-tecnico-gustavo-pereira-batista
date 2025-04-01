import { IUserService } from "../interfaces/client";

import api from "../../axiosConfig";
import { AxiosResponse } from "axios";

export class UserService implements IUserService {
  async getAll(): Promise<AxiosResponse<any, any> | null> {
    try {
      const result = await api.get("");
      return result;
    } catch (error: any) {
      console.log(error);
      return null;
    }
  }
}
