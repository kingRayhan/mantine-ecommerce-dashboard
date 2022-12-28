import { AxiosInstance, AxiosResponse } from "axios";
import http from "../http";
import { AuthenticatedUser } from "../models/User.model";

class AuthApiRepo {
  private http: AxiosInstance;

  constructor(http: AxiosInstance) {
    this.http = http;
  }

  login = (payload: LoginPayload) => {
    return this.http.post("/auth/login", payload);
  };

  me = (): Promise<AxiosResponse<{ data: AuthenticatedUser }>> => {
    return this.http.get("/users/me");
  };
}

// ---------- Payloads ----------
export interface LoginPayload {
  email: string;
  password: string;
}

export default new AuthApiRepo(http);
