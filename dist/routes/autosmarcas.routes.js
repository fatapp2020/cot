"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autosmarcas_controller_1 = require("../controllers/autosmarcas.controller");
const validateToken_1 = require("../libs/validateToken");
//para metodos posts
const router = express_1.Router();
router.route('/').get(validateToken_1.TokenValidation, autosmarcas_controller_1.listarMarcas);
exports.default = router;
