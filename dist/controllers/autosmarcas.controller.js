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
function listarMarcas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        //busco si el usuario existe
        const autos = yield conn.query('SELECT idautomarca,descripcion,codigoinfo FROM autosmarcas order by descripcion ');
        if (autos.length > 0) {
            //usuario incorrecto
            //const newAutos : autosMarcas =autos; //llamo a la instancia
            //console.log(autos);
            return res.json(autos[0]);
        }
    });
}
exports.listarMarcas = listarMarcas;
