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
function ListarProvincia(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //console.log(req.body);
        const newinfo = req.body;
        const conn = yield database_1.connect();
        const prov = yield conn.query('SELECT * FROM provincias');
        const results = JSON.parse(JSON.stringify(prov));
        const provincias = prov[0];
        conn.end();
        /*getData().then(function(rows:any) {
          //console.log('step 3 ',  rows);
          console.log(JSON.stringify(rows))
          console.log(rows[1].Email)
        }).catch(function(err) {
          console.log(err)
        });*/
        //console.log(results[0][0].Email); 
        if (results[0] != '') {
            return res.json(provincias);
        }
        else {
            return res.json('no existen provincias');
        }
    });
}
exports.ListarProvincia = ListarProvincia;
