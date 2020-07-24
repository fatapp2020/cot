import {Router} from 'express'
import { loginUsers } from "../controllers/login.controller";
import {TokenValidation}from '../libs/validateToken';
//para metodos posts
 const router = Router();
 router.route('/').post(loginUsers) ;


 export default router;