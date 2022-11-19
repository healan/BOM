import * as fs from 'fs';
import 'date-utils';
const data = fs.readFileSync('./db.json');
const conf = JSON.parse(data);
import { createConnection } from 'mysql';
import mysql from 'mysql';
import iconv from 'iconv-lite';

const connection = createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database:conf.database
});

connection.connect();
connection.on('error', function(err) {
    if(err){
        console.log(err.code);
        connection.connect();
    }
});


export function srchProduct(req, res){
    let sql = 'select productId ,createDate, subject, planStartDate, planEndDate, comment from production;';
    connection.query(sql,
        (err, rows, fields) => {
            if(err)
                res.send(err);
            else
                res.send({
                    rows
                });
        });
};

export function addProduct(req, res){
    let sql = 'insert into production (createDate, subject, planStartDate, planEndDate, comment) values (?,?,?,?,?);';
    let createDate = req.body.createDt;
    let subject = req.body.subject;
    let planStartDate = req.body.startDt;
    let planEndDate = req.body.endDt;
    let comment = req.body.comment;
    let params = [createDate, subject, planStartDate, planEndDate, comment];
    connection.query(sql, params,
        (err, rows, fields) => {
            if(err)
                res.send(err);
            else    
                res.send(200);
        });

};

export function delProduct(req, res){
    let sql = 'delete from production where productId=?';
    let projId = req.params.id;
    let params = [projId];
    connection.query(sql, params,
        (err, rows, fields) => {
            if(err)
                res.send(err);
            else
                res.send(200);
        });
};
