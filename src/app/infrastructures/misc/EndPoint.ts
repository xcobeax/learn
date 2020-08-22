require("dotenv").config();
export class Endpoint {
  public static baseUrl = process.env.REACT_APP_BASE_URL;
  loginUrl(): string {
    return "/login";
  }
}
