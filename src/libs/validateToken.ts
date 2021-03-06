import {Request,Response,NextFunction} from 'express';
import jwt from 'jsonwebtoken';
export const TokenValidation = (req:Request , res:Response, next:NextFunction)=> {

    const token = req.header('auth-token');
try{
    if(!token) return res.status(401).json('Acceso Denegado');

    const payload = jwt.verify(token, process.env.TOKEN_SECRET ||'tokentest');
    console.log(payload);
    next();
}catch{

    res.json('Expiracion de token' )
}

}