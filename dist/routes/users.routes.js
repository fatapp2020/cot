"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
//para metodos posts
const router = express_1.Router();
//console.log('legouser');
router.route('/').get(user_controller_1.getUsers); //solicito modulo que trae el select desde post.controlles importado
//console.log('legouser');
router.route('/').post(user_controller_1.createUsers); // vinculo con el metodo create post
router.route('/:postsId')
    .get(user_controller_1.getUser) //solicito modulo que trae el select desde post.controlles importado por id
    .delete(user_controller_1.deleteUser)
    .put(user_controller_1.updateUser);
exports.default = router;
