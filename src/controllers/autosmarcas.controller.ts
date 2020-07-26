import { Request, Response, json } from 'express';//importo request y repsonse
import { connect } from '../database'; //importo conexion
import { autosMarcas } from "../interface/autosmarcas.interfaces";
import jwt from 'jsonwebtoken';


export async function listarMarcas(req: Request, res: Response){
    console.log('llego controlador');
    let descripcion = req.params.descripcion;
    
    const conn = await connect();
    //busco si el usuario existe
    let sql='';
    if (descripcion!=undefined){
    sql = "SELECT idautomarca,descripcion,codigoinfo FROM autosmarcas where descripcion like  '%" + descripcion + "%'";
    }else{
    sql = "SELECT idautomarca,descripcion,codigoinfo FROM autosmarcas  order by descripcion";
  

    }
    
    
    const autos = await conn.query(sql);

    const results=JSON.parse(JSON.stringify(autos))
    return res.json(autos[0]);
    if(results[0] !='' ){

        //usuario incorrecto
        
        //const newAutos : autosMarcas =autos; //llamo a la instancia
        
        //console.log(autos);
        return res.json(autos[0]);
       
    }else{
        return res.json('no existen modelos');

    }
    
   

}