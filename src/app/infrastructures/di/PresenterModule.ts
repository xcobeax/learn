import { DependencyContainer } from 'tsyringe';
import { AuthPresenter } from "@/app/container/views/Login/Presenter";
import { AuthApiRepository } from "@/app/infrastructures/repositories/api/AuthApiRepository";

export class PresenterModule {
  public static init(container: DependencyContainer) {
    container.register<AuthPresenter>(AuthPresenter, {
      useFactory: d => {
        return new AuthPresenter(d.resolve(AuthApiRepository));
      }
    });
  }
}
