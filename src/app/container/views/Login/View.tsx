import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext, LoginController } from "./Controller";
import { Alert } from "../../components/Alert/Alert";
import { Assets } from "../../assets/index";
const styleInput = {
  number: {
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
  input: {
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
} as React.CSSProperties;
const ChildComponent = () => {
  const loginData = useContext(AuthContext);
  const { register, handleSubmit, errors } = useForm();
  const styles = {
    backgroundImage: `url(${Assets.bg})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  } as React.CSSProperties;

  return (
    <div
      className="container mx-auto h-full flex flex-1 justify-center items-center max-w-full"
      style={styles}
    >
      <div className="container max-w-sm lg:max-w-lg xl:max-w-lg">
        <div className="leading-loose">
          <div
            className="max-w-xl m-4 p-10 rounded shadow-2xl"
            style={styles}
          >
            <div className="w-full mb-2 text-center text-gray-600 font-semibold">
             LOGIN
            </div>
            <form onSubmit={handleSubmit((e) => loginData._login(e))}>
              <div className="">
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-white rounded border border-gray-500"
                  id="email"
                  disabled={loginData.loading === true}
                  autoComplete="off"
                  name="email"
                  type="email"
                  placeholder="e-mail"
                  aria-label="npp"
                  onChange={(e) => loginData.onChangeNpp(e.target.value)}
                  ref={register({
                    required: true,
                  })}
                  style={styleInput}
                ></input>
                {errors.email && (
                  <p className="text-red-600 text-xs">Email tidak boleh kosong</p>
                )}
              </div>
              <div className="mt-2">
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-white rounded border border-gray-500"
                  id="password"
                  disabled={loginData.loading === true}
                  name="password"
                  type="password"
                  placeholder="*******"
                  aria-label="password"
                  onChange={(e) => loginData.setPass(e.target.value)}
                  ref={register({ required: true })}
                ></input>
                {errors.password && (
                  <p className="text-red-600 text-xs">
                    Password tidak boleh kosong
                  </p>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between w-full">
                {loginData.loading === true && (
                  <button
                    disabled
                    className="hover:bg-teal text-white font-bold py-1 px-4 rounded block w-full"
                    style={{ backgroundColor: "#7B7B7B" }}
                  >
                    Loading
                  </button>
                )}
                {loginData.loading === false && (
                  <button
                    type="submit"
                    className="hover:bg-gray-700 bg-gray-800 text-white font-bold py-1 px-4 rounded block w-full"
                  >
                    Masuk
                  </button>
                )}
              </div>
              <div className="w-full text-xs text-center">
                <p>Dont have an account ? Register <a className="hover:text-gray-500" href="/register">here</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      {loginData.success === false && (
        <Alert title={loginData.errMessage} closeAlert={loginData.closeAlert} />
      )}
    </div>
  );
};
const LoginPage = () => {
  return (
    <LoginController>
      <ChildComponent />
    </LoginController>
  );
};

export default LoginPage;
