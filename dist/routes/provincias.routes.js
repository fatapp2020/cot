"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const provincias_controller_1 = require("../controllers/provincias.controller");
const validateToken_1 = require("../libs/validateToken");
//para metodos posts
const router = express_1.Router();
router.route('/').get(validateToken_1.TokenValidation, provincias_controller_1.ListarProvincia);
exports.default = router;
