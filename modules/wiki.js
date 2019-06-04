var express = require('express');
const db = require('../modules/db').con;

exports.wiki_name = function (req, res) {
    db.query('select name from wiki order by rand() limit 5', (err, result) => {
        if (err) {
            res.send({
                status: 0,
                info: 'error',
                message: '数据库错误'
            })
        } else {
            res.send(result);
        }
    });
}

exports.wiki_baike = function(req,res){
    db.query('select content from baike order by rand() limit 5', (err, result) => {
        if (err) {
            res.send({
                status: 0,
                info: 'error',
                message: '数据库错误'
            })
        } else {
            res.send(result);
        }
    });
}