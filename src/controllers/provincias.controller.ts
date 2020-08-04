import { Request, Response, json } from 'express';//importo request y repsonse
import { connect } from '../database'; //importo conexion
import { Provincias } from "../interface/provincias.interfaces";
import jwt from 'jsonwebtoken';
import { User } from 'interface/user.interfaces';


export async function ListarProvincia(req: Request, res: Response):Promise<Response> {
//console.log(req.body);
   const newinfo: Provincias = req.body;
    
    const conn = await connect();

  
    const prov = await conn.query('SELECT * FROM provincias');

    
    
    const results=JSON.parse(JSON.stringify(prov))
    const provincias =prov[0];
    conn.end();
    /*getData().then(function(rows:any) { 
      //console.log('step 3 ',  rows); 
      console.log(JSON.stringify(rows))
      console.log(rows[1].Email)
    }).catch(function(err) { 
      console.log(err) 
    });*/

   
    

    //console.log(results[0][0].Email); 
    if(results[0] !='' ){
     
        return res.json(provincias);
       
      
    }else{
        return res.json('no existen provincias');
            
    }
    
    
    
    
  
}

