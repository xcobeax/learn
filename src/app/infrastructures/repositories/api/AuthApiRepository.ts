import { LoginApiRequest } from "@/data/payload/api/AuthApiRequest";
import { LoginRequestInterface } from "@/data/payload/contracts/AuthContract";
import ApiService from "@/app/infrastructures/services/ApiServices";
import { AuthDataMapper } from "@/data/persistences/mappers/AuthMapper";
import { AuthRepositoryInterface } from "@/data/persistences/contracts/AuthRepositoryInterface";
import { Auth } from "@/domain/entities/Auth";
import { Endpoint } from "@/app/infrastructures/misc/EndPoint";

export class AuthApiRepository implements AuthRepositoryInterface {
  private service: ApiService;
  private mapper: AuthDataMapper;
   private endpoint: Endpoint;

  constructor(service: ApiService, mapper: AuthDataMapper, endpoint: Endpoint) {
    this.service = service;
    this.mapper = mapper;
    this.endpoint = endpoint
  }

  public async login(payload: LoginRequestInterface): Promise<Auth> {
    const resp = await this.service.invoke(
      "post",
      this.endpoint.loginUrl(),
      undefined,
      payload as LoginApiRequest
    );
    return this.mapper.convertAuthFromApi(resp);
  }
}
