import { LoginRequestInterface } from "../contracts/AuthContract";

export class LoginApiRequest implements LoginRequestInterface {
  private npp: string;
  private password: string;

  constructor(npp: string, password: string) {
    this.npp = npp;
    this.password = password;
  }

  public toJSON() {
    const data = {
      npp_id: this.npp,
      password: this.password
    };

    return JSON.stringify({
      data
    });
  }
}
