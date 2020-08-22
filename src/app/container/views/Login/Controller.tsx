import React, { useState, createContext } from "react";
import { container } from "tsyringe";
import { AuthPresenter } from "./Presenter";
import { LoginApiRequest } from "@/data/payload/api/AuthApiRequest";
import {
  setCredential,
  setAccessRights,
} from "@/app/infrastructures/misc/Cookies";

interface InitialState {
  loading: Boolean;
  _login: Function;
  closeAlert: Function;
  success: any;
  onChangeNpp: Function;
  setPass: Function;
  npp: string;
  pass: string;
  errMessage: string;
}

const initialState = {
  loading: false,
  _login: () => {},
  closeAlert: () => {},
  success: "",
  onChangeNpp: () => {},
  setPass: () => {},
  npp: "",
  pass: "",
  errMessage: "",
};

export const AuthContext = createContext<InitialState>(initialState);

export const { Provider: AuthProvider, Consumer: AuthConsumer } = AuthContext;

export const LoginController = ({ children }) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [success, setSuccess] = useState<any>();
  const [npp, setNpp] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [errMessage, setError] = useState<string>("");

  const onChangeNpp = (e) => {
    setNpp(e);
  };

  const authPresenter: AuthPresenter = container.resolve(AuthPresenter);
  const closeAlert = () => {
    setSuccess(null);
  };
  const _login = async () => {
    setLoading(true);
    if (npp === "admin@gmail.com" && pass === "Password1@") {
      setAccessRights({ access: "test" });
      setCredential({ token: "TOKEN", expired: "" });
      setSuccess(true);
      setLoading(false);
      window.location.reload();
    } else if (npp !== "admin@gmail.com" && pass === "Password1@") {
      setLoading(false);
      setSuccess(false);
      setError("Email Anda tidak terdaftar");
    } else if (npp === "admin@gmail.com" && pass !== "Password1@") {
      setLoading(false);
      setSuccess(false);
      setError("Password Anda Salah");
    }
  };

  return (
    <AuthProvider
      value={{
        loading,
        _login,
        success,
        closeAlert,
        onChangeNpp,
        setPass,
        npp,
        pass,
        errMessage,
      }}
    >
      {children}
    </AuthProvider>
  );
};
