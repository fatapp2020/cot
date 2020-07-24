import {Router} from 'express'
import { listarModelos } from "../controllers/autosmodelos.controller";
import {TokenValidation}from '../libs/validateToken';
//para metodos posts
 const router = Router();
 router.route('/:idautomarca').get(TokenValidation,listarModelos) ;


 export default router;