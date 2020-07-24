
import {Request , Response } from 'express';//importo request y repsonse


//creo paramentros y asigno request y reposnto y devuelvelvo una repsuesta
export function IndexWelcome(req:Request,res: Response): Response {
   return res.json('welcome to my API');

}