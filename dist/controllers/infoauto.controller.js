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
function CodigoInfo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        const newinfo = req.body;
        const idautosmarcas = newinfo.idautosmarcas;
        const idautosmodelos = newinfo.idautosmodelos;
        const conn = yield database_1.connect();
        const info = yield conn.query('SELECT ta3_codia FROM infoauto WHERE ta3_nmarc=? AND ta3_nmode=?;', [newinfo.idautosmarcas, newinfo.idautosmodelos]);
        const results = JSON.parse(JSON.stringify(info));
        /*getData().then(function(rows:any) {
          //console.log('step 3 ',  rows);
          console.log(JSON.stringify(rows))
          console.log(rows[1].Email)
        }).catch(function(err) {
          console.log(err)
        });*/
        //console.log(results[0][0].Email); 
        if (results[0] != '') {
            return res.json(info[0]);
        }
        else {
            return res.json('no existen codigo de infoauto');
        }
    });
}
exports.CodigoInfo = CodigoInfo;
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        var sql = 'SELECT * FROM usuarios';
        const con = yield database_1.connect();
        let promise = new Promise((resolve, reject) => {
            con.query(sql, (err, resultSet) => __awaiter(this, void 0, void 0, function* () {
                if (err)
                    reject(err);
                // asyncForEach
                function asyncForEach(array, callback) {
                    return __awaiter(this, void 0, void 0, function* () {
                        for (let index = 0; index < array.length; index++) {
                            yield callback(array[index], index, array);
                        }
                    });
                }
                //Subdata
                /*let promisesub = new Promise((resolvesub, rejectsub) => {
                  con.query('SELECT * FROM usuarios', (err:any, rs:any) => {
                      resolvesub(rs)
              })
            })*/
                const start = () => __awaiter(this, void 0, void 0, function* () {
                    yield asyncForEach(resultSet, (row) => __awaiter(this, void 0, void 0, function* () {
                        // row.additionalData = await promisesub;
                    }));
                    resolve(resultSet);
                    //console.log('ready')
                });
                start();
            }));
        });
        let result = yield promise;
        return result;
    });
}
