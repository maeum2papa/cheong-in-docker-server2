import { json } from "@sveltejs/kit";
import { setCookie } from "../../../services/cookie";

export async function POST({request,cookies}){
    
    let result  = {msg:'no'};
    let status  = 400;
    let params = await request.json()
    params = JSON.parse(params.body);
    
    if( params.email === 'admin' && params.password === 'cjddls#1034' ){
        setCookie(cookies,'token','adminadminadmincheongin',(60 * 60 * 24));
        result = {msg:'ok'};
        status = 200;
    }

    return json(result,{status:status})
}