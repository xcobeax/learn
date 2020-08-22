import { injectable } from "tsyringe";
import { Auth } from "@/domain/entities/Auth";
import { AuthRepositoryInterface } from "@/data/persistences/contracts/AuthRepositoryInterface";
import {
  LoginApiRequest
} from "@/data/payload/api/AuthApiRequest";
@injectable()
export class AuthPresenter {
  private repository: AuthRepositoryInterface;

  constructor(repository: AuthRepositoryInterface) {
    this.repository = repository;
  }

  public login(payload: LoginApiRequest): Promise<Auth> {
    return this.repository.login(payload);
  }
}
