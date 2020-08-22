import { DependencyContainer } from "tsyringe";
import { Endpoint } from "../misc/EndPoint";
import ApiService from "../services/ApiServices";
import { AuthDataMapper } from "@/data/persistences/mappers/AuthMapper";
import { AuthApiRepository } from "@/app/infrastructures/repositories/api/AuthApiRepository";

export class RepositoryModule {
  public static init(container: DependencyContainer) {
    container.register<AuthApiRepository>(AuthApiRepository, {
      useFactory: d => {
        return new AuthApiRepository(
          d.resolve(ApiService),
          d.resolve(AuthDataMapper),
          d.resolve(Endpoint)
        );
      }
    });
  }
}
