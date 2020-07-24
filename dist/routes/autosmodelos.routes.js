"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autosmodelos_controller_1 = require("../controllers/autosmodelos.controller");
const validateToken_1 = require("../libs/validateToken");
//para metodos posts
const router = express_1.Router();
router.route('/:idautomarca').get(validateToken_1.TokenValidation, autosmodelos_controller_1.listarModelos);
exports.default = router;
