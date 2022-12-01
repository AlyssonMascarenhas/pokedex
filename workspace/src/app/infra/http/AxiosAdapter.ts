import axios from "axios";
import { SafeAny } from "src/safeAny";
import Http from "./http";

export default class AxiosAdapter implements Http {
  async get(url: string): Promise<SafeAny> {
    const response = await axios({ method: "get", url });
    return response.data;
  }
}
