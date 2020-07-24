import { Request, Response, json } from 'express';//importo request y repsonse
import { connect } from '../database'; //importo conexion
import { autosMarcas } from "../interface/autosmarcas.interfaces";
import jwt from 'jsonwebtoken';


export async function listarMarcas(req: Request, res: Response){

    
    const conn = await connect();
    //busco si el usuario existe
    const autos = await conn.query('SELECT idautomarca,descripcion,codigoinfo FROM autosmarcas order by descripcion ');
    
    if(autos.length >0){
        //usuario incorrecto
        
        //const newAutos : autosMarcas =autos; //llamo a la instancia
        
        //console.log(autos);
        return res.json(autos[0]);
       
        
       
    


    }
    
   

}