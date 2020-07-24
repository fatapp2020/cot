import {Router} from 'express'
import { CodigoInfo } from "../controllers/infoauto.controller";
import {TokenValidation}from '../libs/validateToken';
//para metodos posts
 const router = Router();
 console.log('llego');
 router.route('/').post(TokenValidation,CodigoInfo) ;
 


 export default router;