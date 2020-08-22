import { Auth, Data, AccessRights } from "@/domain/entities/Auth";
import { AxiosResponse } from "axios";
import { BaseResponseMapper } from "./Base";

export class AuthDataMapper extends BaseResponseMapper {
  public convertAuthFromApi(result: AxiosResponse<any>): Auth {
    const { data } = result;
    return new Auth(
      data.status,
      data.message,
      new Data(
        data.data.token,
        data.data.npp,
        data.data.name,
        data.data.groupAkses,
        data.data.kodeUnit,
        data.data.kodeLokasiUnit,
        data.data.kodeJabatan,
        data.data.kodeEselon+data.data.kodeJenisJabatan,
        data.data.accessRights.map(
          (val: any) => new AccessRights(val.id, val.name, val.access)
        )
      )
    );
  }
}
