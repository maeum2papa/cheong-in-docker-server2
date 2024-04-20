import { json } from "@sveltejs/kit";
import mysql from "mysql2/promise.js";
import { dbconf } from "../../../../services/mysql";

export async function POST({request,cookies}){

    let result = {msg:'no'}
    let status  = 400;
    const db = await mysql.createConnection(dbconf);

    try {
        let params = await request.json();
        params = JSON.parse(params.body);

        let {
            sort,
            title,
            content,
            beforeImg,
            afterImg,
            idx
        } = params

        const query = "update w_build set sort=?, title=?, content=?, beforeImg=?, afterImg=?, moddt=now() where idx=?";
        const data = [
            sort,
            title,
            content,
            beforeImg,
            afterImg,
            idx
        ]
        
        await db.execute(query, data);
        
        result = {msg:'ok'}
        status  = 200;
    } catch (error) {
        // console.log('error:', error);
    }

    db.end();
    return json(result,{status:status});
}