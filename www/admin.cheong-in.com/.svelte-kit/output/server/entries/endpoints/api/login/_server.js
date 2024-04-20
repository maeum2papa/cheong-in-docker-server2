import { j as json } from "../../../../chunks/index.js";
import { s as setCookie } from "../../../../chunks/cookie.js";
async function POST({ request, cookies }) {
  let result = { msg: "no" };
  let status = 400;
  let params = await request.json();
  params = JSON.parse(params.body);
  if (params.email === "admin" && params.password === "cjddls#1034") {
    setCookie(cookies, "token", "adminadminadmincheongin", 60 * 60 * 24);
    result = { msg: "ok" };
    status = 200;
  }
  return json(result, { status });
}
export {
  POST
};
