import {Router} from 'express'
import {  ListarProvincia} from "../controllers/provincias.controller";
import {TokenValidation}from '../libs/validateToken';
//para metodos posts
 const router = Router();

 router.route('/').get(TokenValidation,ListarProvincia) ;
 


 export default router;