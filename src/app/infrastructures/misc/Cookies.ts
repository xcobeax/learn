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
  Cookies.set(tokenKey, token, { domain: domains }); // Token
  Cookies.set(expiredTokenKey, expired, { domain: domains }); // expired
};

const setAccessRights = ({ access }) => {
  Cookies.set(accessRights, access, { domain: domains });
};

const removeAuthCredential = () => {
  Cookies.remove(tokenKey, { domain: domains });
  Cookies.remove(expiredTokenKey, { domain: domains });
  Cookies.remove(accessRights, { domain: domains });
};

export {
  getToken,
  getExpired,
  setCredential,
  removeAuthCredential,
  getAccessRights,
  setAccessRights,
};
