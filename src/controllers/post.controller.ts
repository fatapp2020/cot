//crud
import { Request, Response } from 'express';//importo request y repsonse
import { connect } from '../database'; //importo conexion
import { Post } from "../interface/posts.interfaces";
import jwt from 'jsonwebtoken';

//creo paramentros y asigno request y reposnto y devuelvelvo una repsuesta
export async function getPosts(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM POSTS');
   
  const token :string = jwt.sign('1', process.env.TOKEN_SECRET || 'tokentest',
  //exppiracion de token
  {expiresIn: 60 * 60}//una hora
  ); //un token almacenado o string
    return res.header('auth-token',token).json(posts[0]);

}
//metodo create recibo el body para crear el post
export async function createPosts(req: Request, res: Response) {

    console.log(req.header('auth-token'));
    const conn = await connect();
    const newPost: Post = req.body; //llamo a la instancia
    await conn.query('INSERT INTO posts SET ?', [newPost])
    return res.json(
        { message: 'post Created' }
    )
}
;
//sonsulto en la base por id
export async function getPost(req: Request, res: Response): Promise<Response> {
    const id = req.params.postsId;
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM POSTS where id =?', [id]);
    return res.json(posts[0]);


}

export async function deletePost(req: Request, res: Response): Promise<Response> {
    const id = req.params.postsId;
    const conn = await connect();
    const posts = await conn.query('DELETE FROM POSTS where id =?', [id]);
    return res.json({ message: 'delete Created' }
    );
}

export async function updatePosts(req: Request, res: Response): Promise<Response> {
    const id = req.params.postsId;
    const updatePost: Post =req.body;
    const conn = await connect();
    const posts = await conn.query('update  POSTS set ?  where id =?', [updatePost ,id]);
    return res.json({ message: 'Posts update' }
    );
}