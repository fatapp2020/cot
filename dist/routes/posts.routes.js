"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
const validateToken_1 = require("../libs/validateToken");
//para metodos posts
const router = express_1.Router();
router.route('/')
    .get(validateToken_1.TokenValidation, post_controller_1.getPosts) //solicito modulo que trae el select desde post.controlles importado
    .post(post_controller_1.createPosts); // vinculo con el metodo create post
router.route('/:userId')
    .get(post_controller_1.getPost) //solicito modulo que trae el select desde post.controlles importado por id
    .delete(post_controller_1.deletePost)
    .put(post_controller_1.updatePosts);
exports.default = router;
