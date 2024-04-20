import { json } from '@sveltejs/kit';
import { postServerApi } from '../../../services/api';
import { getCookie,setCookie } from '../../../services/cookie'
import { backendServer } from '../../../services/config';
 
export async function POST({request,cookies}){
    
    let result = {msg:'no'}
    let status = 400

    let token = getCookie(cookies,'token');
    if(token=='adminadminadmincheongin'){
        result = {msg:'ok'}
        status = 200
    }
    
    return json(result,{status:status});
}