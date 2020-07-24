"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//le decimos que es una aplicacion
const morgan_1 = __importDefault(require("morgan"));
//import PostRoutes from './routes/posts.routes';
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const login_routes_1 = __importDefault(require("./routes/login.routes"));
const autosmarcas_routes_1 = __importDefault(require("./routes/autosmarcas.routes"));
const autosmodelos_routes_1 = __importDefault(require("./routes/autosmodelos.routes"));
const infoauto_routes_1 = __importDefault(require("./routes/infoauto.routes"));
class App {
    constructor(port) {
        //private lo hace publico en toda la clase
        //? es un paramentro opcional
        this.port = port;
        this.app = express_1.default(); //creo constructor
        try {
            this.setting(); //ejecuto seting
            this.midlewares();
            this.routes();
        }
        catch (_a) {
            console.log("error");
        }
    }
    setting() {
        this.app.set('port', this.port || process.env.port || 3000); //sino reibo el puerto lo configuro ||300
        //metodo para setear
    }
    midlewares() {
        this.app.use(morgan_1.default('dev')); //muestro por consola temas de desarrollo
        this.app.use(express_1.default.json());
    }
    routes() {
        //define rutas iniciales
        this.app.use('/user', users_routes_1.default);
        this.app.use('/login', login_routes_1.default);
        this.app.use('/marcas', autosmarcas_routes_1.default);
        this.app.use('/modelos', autosmodelos_routes_1.default);
        this.app.use('/infoauto', infoauto_routes_1.default);
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port')); //creo metodo y le informo que va a tardar tiempo con await
            // obtengo seting de app.get
            console.log('Server on port', 3000);
        });
    }
}
exports.App = App;
