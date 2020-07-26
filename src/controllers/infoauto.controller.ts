import { Request, Response, json } from 'express';//importo request y repsonse
import { connect } from '../database'; //importo conexion
import { Infoauto } from "../interface/infoauto.interfaces";
import jwt from 'jsonwebtoken';
import { User } from 'interface/user.interfaces';


export async function CodigoInfo(req: Request, res: Response):Promise<Response> {
//console.log(req.body);
   const newinfo: Infoauto = req.body;
    const idautosmarcas = newinfo.idautosmarcas;
    const idautosmodelos= newinfo.idautosmodelos;
    const conn = await connect();

  
    const info = await conn.query('SELECT ta3_codia FROM infoauto WHERE ta3_nmarc=? AND ta3_nmode=?;',
    [newinfo.idautosmarcas, newinfo.idautosmodelos] );
    
    
    const results=JSON.parse(JSON.stringify(info))

    /*getData().then(function(rows:any) { 
      //console.log('step 3 ',  rows); 
      console.log(JSON.stringify(rows))
      console.log(rows[1].Email)
    }).catch(function(err) { 
      console.log(err) 
    });*/

   
    

    //console.log(results[0][0].Email); 
    if(results[0] !='' ){
     
        return res.json(info[0]);
       
      
    }else{
        return res.json('no existen codigo de infoauto');

    }
    
    
    
  
}

async function getData() { 
  var sql = 'SELECT * FROM usuarios' 
  const con = await connect();
  let promise = new Promise((resolve, reject) => {

    con.query(sql, async (err: any, resultSet: unknown) => { 
      if (err) reject(err); 

      // asyncForEach
        async function asyncForEach(array:any, callback:any) {
          for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array)
          }
        } 

        //Subdata
        /*let promisesub = new Promise((resolvesub, rejectsub) => {
          con.query('SELECT * FROM usuarios', (err:any, rs:any) => { 
              resolvesub(rs)     
      })  
    })*/

      const start = async () => {
          await asyncForEach(resultSet, async (row:any) => {
           // row.additionalData = await promisesub;
          })
      resolve(resultSet)
      //console.log('ready')
      };

      start()
    }) 
  })

  let result = await promise;

  return result;
} 