import {Router} from 'express'
import { listarMarcas } from "../controllers/autosmarcas.controller";
import {TokenValidation}from '../libs/validateToken';
//para metodos posts
 const router = Router();

 router.route('/:descripcion').get(TokenValidation ,listarMarcas) ;
 router.route('/').get(TokenValidation ,listarMarcas) ;
 export default router;