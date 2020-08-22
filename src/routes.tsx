import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PortalPage from "./app/container/views/Portal/View";
import LoginPage from "./app/container/views/Login/View";
import RegisterPage from "./app/container/views/Register/View";
import { getToken } from "./app/infrastructures/misc/Cookies";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const login = getToken();
  return (
    <Route
      {...rest}
      render={props =>
        login !== null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const RouteLogin = ({ component: Component, ...rest }) => {
  const login = getToken();
  return (
    <Route
      {...rest}
      render={props =>
        login === null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
const RouteRegister = ({ component: Component, ...rest }) => {
  const login = getToken();
  return (
    <Route
      {...rest}
      render={props =>
        login === null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
const Routes = () => {
  return (
    <Router>
      <Switch>
        <RouteLogin path="/login" component={LoginPage} />
        <RouteRegister path="/register" component={RegisterPage} />
        <PrivateRoute path="/" component={PortalPage} />
      </Switch>
    </Router>
  );
};
export default Routes;
