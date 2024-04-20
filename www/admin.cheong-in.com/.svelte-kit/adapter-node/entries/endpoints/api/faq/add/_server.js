import { j as json } from "../../../../../chunks/index.js";
import mysql from "mysql2/promise.js";
import { d as dbconf } from "../../../../../chunks/mysql.js";
async function POST({ request, cookies }) {
  let result = { msg: "no" };
  let status = 400;
  const db = await mysql.createConnection(dbconf);
  try {
    let params = await request.json();
    params = JSON.parse(params.body);
    let {
      sort,
      question,
      answer
    } = params;
    const query = "insert into w_faq set sort=?, question=?, answer=?, insdt=now()";
    const data = [
      sort,
      question,
      answer
    ];
    await db.execute(query, data);
    result = { msg: "ok" };
    status = 200;
  } catch (error) {
  }
  db.end();
  return json(result, { status });
}
export {
  POST
};
