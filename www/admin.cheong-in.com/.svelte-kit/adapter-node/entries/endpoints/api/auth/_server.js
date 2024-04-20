import { j as json } from "../../../../chunks/index.js";
import "../../../../chunks/encrypt.js";
import { g as getCookie } from "../../../../chunks/cookie.js";
async function POST({ request, cookies }) {
  let result = { msg: "no" };
  let status = 400;
  let token = getCookie(cookies, "token");
  if (token == "adminadminadmincheongin") {
    result = { msg: "ok" };
    status = 200;
  }
  return json(result, { status });
}
export {
  POST
};
