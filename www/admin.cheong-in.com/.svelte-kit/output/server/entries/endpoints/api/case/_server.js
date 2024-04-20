import { j as json } from "../../../../chunks/index.js";
import mysql from "mysql2/promise.js";
import { d as dbconf } from "../../../../chunks/mysql.js";
async function POST({ request, cookies }) {
  let result = { msg: "no" };
  let status = 400;
  const db = await mysql.createConnection(dbconf);
  let where = [];
  let limit = "";
  let joinWhere = "1";
  try {
    let params = await request.json();
    params = JSON.parse(params.body);
    if (params.sort != void 0) {
      where.push("sort='" + params.sort + "'");
    }
    if (params.limit != void 0) {
      limit = `limit ${params.limit * (params.page - 1)}, ${params.limit}`;
    }
    if (where.length > 0) {
      joinWhere = where.join(" and ");
    }
    if (params.id) {
      joinWhere = `idx=${params.id}`;
    }
    const [rows, fields] = await db.execute("select * from w_build where " + joinWhere + " order by idx desc " + limit);
    const [rows2, fields2] = await db.execute(`SELECT COUNT(*) AS cnt FROM w_build`);
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
