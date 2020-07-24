import { Request, Response, json } from 'express';//importo request y repsonse
import { connect } from '../database'; //importo conexion
import { autosModelos } from "../interface/autosmodelos.interfaces";
import jwt from 'jsonwebtoken';



export async function listarModelos(req: Request, res: Response):Promise<Response>{

    
    //console.log(req.params.idautomarca);
    let idautomarca = req.params.idautomarca;
    
    

    const conn = await connect();
    //busco si el usuario existe
    const autos = await conn.query('SELECT * FROM autosmodelos where idautomarca =? ',idautomarca);
    const results=JSON.parse(JSON.stringify(autos))
    
    if(results[0] !='' ){
     
        return res.json(autos[0]);
       
      
    }else{
        return res.json('no existen modelos');

    }
    
   

}