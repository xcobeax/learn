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
  setCPass: Function;
  npp: string;
  pass: string;
  cpass: string;
  errMessage: string;
}

const initialState = {
  loading: false,
  _login: () => {},
  closeAlert: () => {},
  success: "",
  onChangeNpp: () => {},
  setPass: () => {},
  setCPass: () => {},
  npp: "",
  pass: "",
  cpass: "",
  errMessage: "",
};

export const AuthContext = createContext<InitialState>(initialState);

export const { Provider: AuthProvider, Consumer: AuthConsumer } = AuthContext;

export const LoginController = ({ children }) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [success, setSuccess] = useState<any>();
  const [npp, setNpp] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [cpass, setCPass] = useState<string>("");
  const [errMessage, setError] = useState<string>("");

  const onChangeNpp = (e) => {
    setNpp(e);
  };

  const closeAlert = () => {
    setSuccess(null);
  };
  const _login = async () => {
    setLoading(true);
    if (npp === "admin@gmail.com" && cpass === pass) {
      setSuccess(false);
      setLoading(false);
      setError("Berhasil Mendaftar");
    } else if (npp !== "admin@gmail.com") {
      setLoading(false);
      setSuccess(false);
      setError("Email Anda Sudah terdaftar");
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
        setCPass,
        npp,
        pass,
        errMessage,
        cpass
      }}
    >
      {children}
    </AuthProvider>
  );
};
