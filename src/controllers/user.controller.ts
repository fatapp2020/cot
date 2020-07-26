//crud
import { Request, Response, json } from 'express';//importo request y repsonse
import { connect } from '../database'; //importo conexion
import { User } from "../interface/user.interfaces";
import jwt from 'jsonwebtoken';

//creo paramentros y asigno request y reposnto y devuelvelvo una repsuesta
export async function getUsers(req: Request, res: Response): Promise<Response> {
    //const email= req.params.email;
    const conn = await connect();
    const users = await conn.query('SELECT * FROM usuarios' );


    return res.json(users[0]);

}
//metodo create recibo el body para crear el post
export async function createUsers(req: Request, res: Response): Promise<Response> {

   //return res.json(req.body);

    //console.log(req.header('auth-token'));
    const newUsers: User = req.body;
    const email = newUsers.email;
    const password= newUsers.password;
    const conn = await connect();
    
   // console.log('email' + email);
    const users = await conn.query('SELECT * FROM usuarios where email=?',[email]);
    // console.log('usuarios' + users.length)
    if(users.length>0){
        
        // const newUsers: User = req.body; //llamo a la instancia
        // const result =await conn.query('INSERT INTO usuarios SET ?', [newUsers])
        // // console.log(result[0]);
        return res.json(
            { message: 'usuario Created' }
        )
    }else{
       
       
        return res.json(
            { message: 'usuario ya creado' })

    }
    
    

    
}
;
//sonsulto en la base por id
export async function getUser(req: Request, res: Response): Promise<Response> {
    const id = req.params.postsId;
    const conn = await connect();
    const users = await conn.query('SELECT * FROM usuarios where idusuario =?', [id]);
    return res.json(users[0]);


}

export async function deleteUser(req: Request, res: Response): Promise<Response> {
    const id = req.params.postsId;
    const conn = await connect();
    const posts = await conn.query('DELETE FROM usuarios where idusuario =?', [id]);
    return res.json({ message: 'delete usuario' }
    );
}

export async function updateUser(req: Request, res: Response): Promise<Response> {
    const id = req.params.postsId;
    const updatePost: User =req.body;
    const conn = await connect();
    const posts = await conn.query('update  usuarios set ?  where id =?', [updatePost ,id]);
    return res.json({ message: 'Posts usuarios' }
    );
}

//login user
