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