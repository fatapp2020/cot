import {Router} from 'express'
import { getUser,getUsers,createUsers,deleteUser, updateUser } from "../controllers/user.controller";
import {TokenValidation}from '../libs/validateToken';
//para metodos posts
 const router = Router();
 //console.log('legouser');
 router.route('/').get(getUsers) ;//solicito modulo que trae el select desde post.controlles importado
 //console.log('legouser');
 router.route('/').post(createUsers) ;// vinculo con el metodo create post

 router.route('/:postsId')
 .get(getUser) //solicito modulo que trae el select desde post.controlles importado por id
 .delete(deleteUser)
 .put(updateUser)
 export default router;