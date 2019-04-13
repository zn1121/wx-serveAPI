var express = require('express');
const db = require('../modules/db')


exports.bangnipin = function(req,res){

  
  db.query(`select * from bangni`,(err,result)=>{
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