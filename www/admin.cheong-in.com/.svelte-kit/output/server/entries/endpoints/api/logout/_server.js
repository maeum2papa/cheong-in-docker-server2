import { j as json } from "../../../../chunks/index.js";
import { d as delCookie } from "../../../../chunks/cookie.js";
async function GET({ request, cookies }) {
  let result = { msg: "ok" };
  let status = 200;
  delCookie(cookies, "token");
  return json(result, { status });
}
export {
  GET
};
