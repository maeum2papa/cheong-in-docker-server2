import { c as chash, e as encrypt, d as decrypt } from "./encrypt.js";
const setCookie = (cookies = {}, key = "", value = "", time = 0) => {
  cookies.set(chash(key), encrypt(value), {
    path: "/",
    httpOnly: true,
    secure: false,
    maxAge: time
  });
};
const getCookie = (cookies = {}, key = "") => {
  if (cookies.get(chash(key)) == void 0) {
    return "";
  } else {
    return decrypt(cookies.get(chash(key)));
  }
};
const delCookie = (cookies = {}, key = "") => {
  cookies.set(chash(key), "", {
    path: "/",
    httpOnly: true,
    secure: false,
    maxAge: 0
  });
};
export {
  delCookie as d,
  getCookie as g,
  setCookie as s
};
