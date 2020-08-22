import { DependencyContainer } from "tsyringe";
import { AuthDataMapper } from "@/data/persistences/mappers/AuthMapper";

export class MapperModule {
  public static init(container: DependencyContainer) {
    container.register<AuthDataMapper>(AuthDataMapper, {
      useClass: AuthDataMapper
    });
  }
}
