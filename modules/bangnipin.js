var express = require('express');
const db = require('../modules/db').con;


exports.bangnipin = function(req,res){
  var name = req.query.name;
  
  db.query('select * from bangni where name=?',[name],(err,result)=>{
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