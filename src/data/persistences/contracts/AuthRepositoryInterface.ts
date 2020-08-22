import { Auth } from "@/domain/entities/Auth";
import { LoginApiRequest } from '@/data/payload/api/AuthApiRequest';

export interface AuthRepositoryInterface {
  login(payload: LoginApiRequest): Promise<Auth>;
}
