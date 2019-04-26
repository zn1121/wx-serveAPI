var express = require('express');
const db = require('../modules/db').con;


exports.bangnipin = function(req,res){
  var food_name = req.query.food_name;
  db.query('select * from bangni where name=?',[food_name],(err,result)=>{
    if(err){
      res.send({
        status: 0,
        info: 'error',
        message: '数据库错误'
      })
    }else{
      res.send(result);
    }
  });
}
exports.help_hc = function(req,res){
  var food_hcid = req.query.food_hcid;
  db.query('select * from huncai where id=?',[food_hcid],(err,result)=>{
    if(err){
      res.send({
        status: 0,
        info: 'error',
        message: '数据库错误'
      })
    }else{
      res.send(result);
    }
  })
}
exports.help_sc = function(req,res){
  var food_scid = req.query.food_scid;
  db.query('select * from sucai where id=?',[food_scid],(err,result)=>{
    if(err){
      res.send({
        status: 0,
        info: 'error',
        message: '数据库错误'
      })
    }else{
      res.send(result);
    }
  })
}