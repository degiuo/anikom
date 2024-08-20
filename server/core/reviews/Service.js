const mysql = require('sync-mysql');
const {DB} = require('../utils/config.js');
const uuid = require('uuid');

const conn = new mysql(DB);

class Service {
  async add(req, res) {
    const {closet, comment} = req.body;
    const date = Math.round(new Date().getTime()/1000.0);
    const user = req.session.user;

    const getUser = conn.query(
      `SELECT id FROM users WHERE email = '${user}'`
    );
    
    if (!getUser[0]) throw new Error("Вы незарегистрированны!");

    const query = `INSERT INTO reviews(closet, user, comment, date) VALUES ('${closet}', '${getUser[0].id}', '${comment}', '${date}')`;
    const result = conn.query(query);

    return 'SUCCESS';
  };

  async delete(req, res) {
    const id = req.params.id;
    const result = conn.query(`DELETE r FROM reviews AS r JOIN users AS u ON r.user = u.id WHERE r.id = '${id}' AND u.email = '${req.session.user}'`);
    return result;
  };

  async update(req, res) {
    const {id, comment} = req.body;

    const commnetsUser = conn.query(
      `UPDATE reviews FROM reviews WHERE user = '${req.session.user}'`
    );

    return 'SUCCESS!';
  };

  async getComments(id) {
    const query = `SELECT reviews.id, users.email, users.id userId, reviews.comment, reviews.date FROM reviews JOIN closet JOIN users ON reviews.closet = closet.id AND reviews.user = users.id WHERE reviews.closet = ${id};`;

    const result = conn.query(query);
    if(!result[0]) return 'Комминтариев нет!'; 
    
    return result;
  }
};

module.exports = new Service();
