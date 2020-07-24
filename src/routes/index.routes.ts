import { Router } from 'express';
const router = Router ();
import {IndexWelcome} from '../controllers/index.controller';
//se define una rute para request and response y devulve un json con el texto

router.route('/')
.get(IndexWelcome);


export default router;