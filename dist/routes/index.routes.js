"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const index_controller_1 = require("../controllers/index.controller");
//se define una rute para request and response y devulve un json con el texto
router.route('/')
    .get(index_controller_1.IndexWelcome);
exports.default = router;
