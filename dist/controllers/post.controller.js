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
//creo paramentros y asigno request y reposnto y devuelvelvo una repsuesta
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const posts = yield conn.query('SELECT * FROM POSTS');
        const token = jsonwebtoken_1.default.sign('1', process.env.TOKEN_SECRET || 'tokentest', 
        //exppiracion de token
        { expiresIn: 60 * 60 } //una hora
        ); //un token almacenado o string
        return res.header('auth-token', token).json(posts[0]);
    });
}
exports.getPosts = getPosts;
//metodo create recibo el body para crear el post
function createPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.header('auth-token'));
        const conn = yield database_1.connect();
        const newPost = req.body; //llamo a la instancia
        yield conn.query('INSERT INTO posts SET ?', [newPost]);
        return res.json({ message: 'post Created' });
    });
}
exports.createPosts = createPosts;
;
//sonsulto en la base por id
function getPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postsId;
        const conn = yield database_1.connect();
        const posts = yield conn.query('SELECT * FROM POSTS where id =?', [id]);
        return res.json(posts[0]);
    });
}
exports.getPost = getPost;
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postsId;
        const conn = yield database_1.connect();
        const posts = yield conn.query('DELETE FROM POSTS where id =?', [id]);
        return res.json({ message: 'delete Created' });
    });
}
exports.deletePost = deletePost;
function updatePosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postsId;
        const updatePost = req.body;
        const conn = yield database_1.connect();
        const posts = yield conn.query('update  POSTS set ?  where id =?', [updatePost, id]);
        return res.json({ message: 'Posts update' });
    });
}
exports.updatePosts = updatePosts;
