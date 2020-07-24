"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const infoauto_controller_1 = require("../controllers/infoauto.controller");
const validateToken_1 = require("../libs/validateToken");
//para metodos posts
const router = express_1.Router();
console.log('llego');
router.route('/').post(validateToken_1.TokenValidation, infoauto_controller_1.CodigoInfo);
exports.default = router;
