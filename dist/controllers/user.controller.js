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
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database"); //importo conexion
//creo paramentros y asigno request y reposnto y devuelvelvo una repsuesta
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //const email= req.params.email;
        const conn = yield database_1.connect();
        const users = yield conn.query('SELECT * FROM usuarios');
        return res.json(users[0]);
    });
}
exports.getUsers = getUsers;
//metodo create recibo el body para crear el post
function createUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //return res.json(req.body);
        //console.log(req.header('auth-token'));
        const newUsers = req.body;
        const email = newUsers.email;
        const password = newUsers.password;
        const conn = yield database_1.connect();
        // console.log('email' + email);
        const users = yield conn.query('SELECT * FROM usuarios where email=?', [email]);
        // console.log('usuarios' + users.length)
        if (users.length > 0) {
            // const newUsers: User = req.body; //llamo a la instancia
            // const result =await conn.query('INSERT INTO usuarios SET ?', [newUsers])
            // // console.log(result[0]);
            return res.json({ message: 'usuario Created' });
        }
        else {
            return res.json({ message: 'usuario ya creado' });
        }
    });
}
exports.createUsers = createUsers;
;
//sonsulto en la base por id
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postsId;
        const conn = yield database_1.connect();
        const users = yield conn.query('SELECT * FROM usuarios where idusuario =?', [id]);
        return res.json(users[0]);
    });
}
exports.getUser = getUser;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postsId;
        const conn = yield database_1.connect();
        const posts = yield conn.query('DELETE FROM usuarios where idusuario =?', [id]);
        return res.json({ message: 'delete usuario' });
    });
}
exports.deleteUser = deleteUser;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postsId;
        const updatePost = req.body;
        const conn = yield database_1.connect();
        const posts = yield conn.query('update  usuarios set ?  where id =?', [updatePost, id]);
        return res.json({ message: 'Posts usuarios' });
    });
}
exports.updateUser = updateUser;
//login user
