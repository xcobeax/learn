import Cookies from "js-cookie";

// TOKEN CREDENTIAL
const tokenKey = `${process.env.NODE_ENV}_admin_access_token`;
const expiredTokenKey = `${process.env.NODE_ENV}_admin_expired_token`;
const accessRights = `${process.env.NODE_ENV}`;
const domains = `${process.env.REACT_APP_DOMAIN}`;

const getAccessRights = () => Cookies.get(accessRights);
const getToken = () => Cookies.get(tokenKey) || null;

const getExpired = () => Cookies.get(expiredTokenKey);

const setCredential = ({ token, expired }) => {
  Cookies.set(tokenKey, token, { domain: "netlify.app" }); // Token
  Cookies.set(expiredTokenKey, expired, { domain: "netlify.app" }); // expired
};

const setAccessRights = ({ access }) => {
  Cookies.set(accessRights, access, { domain: "netlify.app" });
};

const removeAuthCredential = () => {
  Cookies.remove(tokenKey, { domain: "netlify.app" });
  Cookies.remove(expiredTokenKey, { domain: "netlify.app" });
  Cookies.remove(accessRights, { domain: "netlify.app" });
};

export {
  getToken,
  getExpired,
  setCredential,
  removeAuthCredential,
  getAccessRights,
  setAccessRights,
};
