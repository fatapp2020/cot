import {Router} from 'express'
import { getPosts, createPosts,getPost,deletePost,updatePosts } from "../controllers/post.controller";
import {TokenValidation}from '../libs/validateToken';
//para metodos posts
 const router = Router();
 
 router.route('/')
 .get(TokenValidation,getPosts) //solicito modulo que trae el select desde post.controlles importado
 .post(createPosts) ;// vinculo con el metodo create post

 router.route('/:userId')
 .get(getPost) //solicito modulo que trae el select desde post.controlles importado por id
 .delete(deletePost)
 .put(updatePosts)
 export default router;
