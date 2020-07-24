import { Request, Response, json } from 'express';//importo request y repsonse
import { connect } from '../database'; //importo conexion
import { login } from "../interface/login.interfaces";
import jwt from 'jsonwebtoken';
import { User } from 'interface/user.interfaces';


export async function loginUsers(req: Request, res: Response):Promise<Response> {

    const newUsers: login = req.body;
    const email = newUsers.email;
    const password= newUsers.password;
    const conn = await connect();

    //console.log ( email + '-' + password);
    //busco si el usuario existe
    const users = await conn.query('SELECT * FROM usuarios where email=? and password=?',
    [newUsers.email, newUsers.password] );
    
    
    const results=JSON.parse(JSON.stringify(users))

    /*getData().then(function(rows:any) { 
      //console.log('step 3 ',  rows); 
      console.log(JSON.stringify(rows))
      console.log(rows[1].Email)
    }).catch(function(err) { 
      console.log(err) 
    });*/

   
    

    //console.log(results[0][0].Email); 
     
    
    
    
    if(results[0] == '' ){
        //usuario incorrecto
        /*const newUsers: login = req.body; //llamo a la instancia
        const result =await conn.query('INSERT INTO usuarios SET ?', [newUsers])
        console.log(result[0]);*/
        return res.json(
            { message: 'usuario inexistente' }
        )
       
        
       
    }else{
       //usuario se logea
       
        const token :string = jwt.sign(newUsers, process.env.TOKEN_SECRET || 'tokentest'//una hora
        ,{expiresIn: 600}); //un token almacenado o string

          return res.header('auth-token',token).json(token );


    }
    
   
return res.json('aaa');
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