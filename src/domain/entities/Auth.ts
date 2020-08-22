export class Auth {
  public success: boolean;
  public message: string;
  public data: Data;

  constructor(success: boolean, message: string, data: Data) {
    this.success = success;
    this.message = message;
    this.data = data;
  }
}

export class Data {
  public token: string;
  public npp: string;
  public name: string;
  public groupAccess: number;
  public unitCode: number;
  public unitLocationCode: number;
  public positionCode: number;
  public eselonCode: string;
  public accessRights: AccessRights;
  constructor(
    token: string,
    npp: string,
    name: string,
    groupAccess: number,
    unitCode: number,
    unitLocationCode: number,
    positionCode: number,
    eselonCode: string,
    accessRights: AccessRights
    ) {
    this.token = token;
    this.npp = npp;
    this.name = name;
    this.groupAccess = groupAccess;
    this.unitCode = unitCode;
    this.unitLocationCode = unitLocationCode;
    this.positionCode = positionCode;
    this.eselonCode = eselonCode;
    this.accessRights = accessRights;
  }
}
export class AccessRights {
  public id: number;
  public name: string;
  public access: boolean;
  constructor(id: number, name: string, access: boolean) {
    this.id = id;
    this.name = name;
    this.access = access;
  }
}
