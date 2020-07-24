
import dotenv from 'dotenv';
dotenv.config();

import { App } from './app'; //importo

async function main(){

const app = new App(3000); //instancio en app
 await app.listen(); //llamo a funcion de la clase

}

main(); //ejecuto funcion