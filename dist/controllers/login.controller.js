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
const database_1 = require("../database"); //importo conexion
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function loginUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUsers = req.body;
        const email = newUsers.email;
        const password = newUsers.password;
        const conn = yield database_1.connect();
        //console.log ( email + '-' + password);
        //busco si el usuario existe
        const users = yield conn.query('SELECT * FROM usuarios where email=? and password=?', [newUsers.email, newUsers.password]);
        const results = JSON.parse(JSON.stringify(users));
        /*getData().then(function(rows:any) {
          //console.log('step 3 ',  rows);
          console.log(JSON.stringify(rows))
          console.log(rows[1].Email)
        }).catch(function(err) {
          console.log(err)
        });*/
        //console.log(results[0][0].Email); 
        if (results[0] == '') {
            //usuario incorrecto
            /*const newUsers: login = req.body; //llamo a la instancia
            const result =await conn.query('INSERT INTO usuarios SET ?', [newUsers])
            console.log(result[0]);*/
            return res.json({ message: 'usuario inexistente' });
        }
        else {
            //usuario se logea
            const token = jsonwebtoken_1.default.sign(newUsers, process.env.TOKEN_SECRET || 'tokentest' //una hora
            , { expiresIn: 600 }); //un token almacenado o string
            return res.header('auth-token', token).json(token);
        }
        return res.json('aaa');
    });
}
exports.loginUsers = loginUsers;
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        var sql = 'SELECT * FROM usuarios';
        const con = yield database_1.connect();
        let promise = new Promise((resolve, reject) => {
            con.query(sql, (err, resultSet) => __awaiter(this, void 0, void 0, function* () {
                if (err)
                    reject(err);
                // asyncForEach
                function asyncForEach(array, callback) {
                    return __awaiter(this, void 0, void 0, function* () {
                        for (let index = 0; index < array.length; index++) {
                            yield callback(array[index], index, array);
                        }
                    });
                }
                //Subdata
                /*let promisesub = new Promise((resolvesub, rejectsub) => {
                  con.query('SELECT * FROM usuarios', (err:any, rs:any) => {
                      resolvesub(rs)
              })
            })*/
                const start = () => __awaiter(this, void 0, void 0, function* () {
                    yield asyncForEach(resultSet, (row) => __awaiter(this, void 0, void 0, function* () {
                        // row.additionalData = await promisesub;
                    }));
                    resolve(resultSet);
                    //console.log('ready')
                });
                start();
            }));
        });
        let result = yield promise;
        return result;
    });
}
