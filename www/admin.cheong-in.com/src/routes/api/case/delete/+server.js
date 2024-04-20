import { json } from "@sveltejs/kit";
import mysql from "mysql2/promise.js";
import { dbconf } from "../../../../services/mysql";

export async function POST({request,cookies}){
    
    let result  = {msg:'no'};
    let status  = 400;
    const db = await mysql.createConnection(dbconf);

    try {
        let params = await request.json();
        params = JSON.parse(params.body);

        const [rows, fields] = await db.execute("delete from w_build where idx=?", [params.id]);
        
        result = {msg:'ok',data:rows};
        status = 200;
    } catch(error) {
        // console.log('error:', error);
    }

    db.end();
    return json(result,{status:status})
}