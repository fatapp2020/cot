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
function listarModelos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //console.log(req.params.idautomarca);
        let idautomarca = req.params.idautomarca;
        const conn = yield database_1.connect();
        //busco si el usuario existe
        const autos = yield conn.query('SELECT * FROM autosmodelos where idautomarca =? ', idautomarca);
        const results = JSON.parse(JSON.stringify(autos));
        if (results[0] != '') {
            return res.json(autos[0]);
        }
        else {
            return res.json('no existen modelos');
        }
    });
}
exports.listarModelos = listarModelos;
