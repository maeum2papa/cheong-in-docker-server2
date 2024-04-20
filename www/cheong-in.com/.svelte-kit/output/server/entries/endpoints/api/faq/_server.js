import { j as json } from "../../../../chunks/index.js";
import mysql from "mysql2/promise.js";
import { d as dbconf } from "../../../../chunks/mysql.js";
import { d as decrypt } from "../../../../chunks/encrypt.js";
async function POST({ request, cookies }) {
  let result = { msg: "no" };
  let status = 400;
  const db = await mysql.createConnection(dbconf);
  let where = [];
  let joinWhere = "1";
  try {
    let params = await request.json();
    params = JSON.parse(decrypt(params.body));
    if (params.sort != void 0 && params.sort != 0) {
      where.push("sort='" + params.sort + "'");
    }
    if (where.length > 0) {
      joinWhere = where.join(" and ");
    }
    if (params.id) {
      joinWhere = `idx=${params.id}`;
    }
    const [rows, fields] = await db.execute("select * from w_faq where " + joinWhere + " order by idx desc limit " + params.limit * (params.page - 1) + "," + params.limit);
    const [rows2, fields2] = await db.execute("SELECT COUNT(*) AS cnt FROM w_faq where " + joinWhere);
    result = { msg: "ok", data: rows, totalDocs: rows2[0].cnt };
    status = 200;
  } catch (error) {
  }
  db.end();
  return json(result, { status });
}
export {
  POST
};
