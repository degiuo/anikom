const mysql = require('sync-mysql');
const {DB} = require('../utils/config.js');

const conn = new mysql(DB);

module.exports = function(roles){
  return (req, res, next) => {
    try{
      const checkEmail = req.session.user;
      if(!checkEmail) {return res.status(400).json('Пользователь не авторизован!');}

      const result = conn.query(`SELECT role FROM users WHERE email = '${checkEmail}'`);

      if(!roles.find(el => el == result[0].role))return res.status(400).json('Нет доступа!');
      
      next();
    }catch(e){
      return res.status(401).json('Пользователь не авторизован!')
    }
  };
};