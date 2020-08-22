import Axios, { AxiosInstance, Method, AxiosResponse } from "axios";
import qs from "qs";
import { injectable } from "tsyringe";
import { Endpoint } from "../misc/EndPoint";
import { getToken } from "@/app/infrastructures/misc/Cookies";

@injectable()
export default class ApiService {
  public client: AxiosInstance;

  constructor() {
    this.client = Axios.create({
      baseURL: Endpoint.baseUrl,
      timeout: 50000
    });

    if (process.env.NODE_ENV !== "production") {
      this.client.interceptors.request.use(request => {
        return request;
      });

      this.client.interceptors.response.use(response => {
        return response;
      });
    }
  }

  public async invoke(
    method: Method = "get",
    url: string = "",
    params: Object = {},
    payload: any = null,
    headers: Map<string, string> = new Map()
  ): Promise<AxiosResponse<any>> {
    // set header
    this.client.defaults.headers["Content-Type"] = "application/json";
    this.client.defaults.headers["Authorization"] = "Bearer " + getToken();
    headers.forEach((value: string, key: string) => {
      this.client.defaults.headers.common[key] = value;
    });

    var result = await this.client.request({
      url,
      params,
      paramsSerializer: par => qs.stringify(par, { encode: false }),
      data: payload ? payload.toJSON() : null,
      method
    });

    return result;
  }
}
