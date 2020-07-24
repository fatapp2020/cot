import express, { Application } from 'express';
//le decimos que es una aplicacion
import morgan from 'morgan';
//instancio variable morgan
//routes
import IndexRoutes from './routes/index.routes';
//import PostRoutes from './routes/posts.routes';
import UserRoutes from './routes/users.routes';
import LoginRoutes from './routes/login.routes';
import AutosMarcas from './routes/autosmarcas.routes';
import AutosModelos from './routes/autosmodelos.routes';
import infoauto from './routes/infoauto.routes';
export class App {
    private app: Application; //instancio

    constructor(private port?: number | string) {
        //private lo hace publico en toda la clase
        //? es un paramentro opcional
        
        this.app = express(); //creo constructor
        try{
        this.setting(); //ejecuto seting
        this.midlewares();
        this.routes();
        }catch{
           console.log ("error");
        }
    }

    setting() {
        this.app.set('port', this.port || process.env.port || 3000) //sino reibo el puerto lo configuro ||300
        //metodo para setear
    }
    midlewares() {

        this.app.use(morgan('dev')); //muestro por consola temas de desarrollo
        this.app.use(express.json());


    }

    routes() {
       
        //define rutas iniciales
        this.app.use('/user', UserRoutes);
     
        this.app.use('/login', LoginRoutes);

        this.app.use('/marcas', AutosMarcas);

        this.app.use('/modelos', AutosModelos);
        this.app.use('/infoauto', infoauto);
      
    }

    async listen() {//metodo asyncronico

        await this.app.listen(this.app.get('port')); //creo metodo y le informo que va a tardar tiempo con await
        // obtengo seting de app.get
        console.log('Server on port', 3000);

    }


} 