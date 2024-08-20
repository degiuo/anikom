const mysql = require('sync-mysql');
const bcrypt = require('bcryptjs');
const session = require('../utils/Session.js');
const {DB} = require('../utils/config.js');

const conn = new mysql(DB);

class Service {
  async registration(req, res) {
    const {lastname, firstname, surname, password, email, phone, role = "USER"} = req.body;
    const checkUser = conn.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );

    if (checkUser[0]) throw new Error("Такой пользователь уже есть!");

    const hashPassword = bcrypt.hashSync(password, 6);

    const query = `INSERT INTO users (lastname, firstname, surname, email, password, phone, role) VALUES('${lastname}', '${firstname}', '${surname}', '${email}', '${hashPassword}', '${phone}', '${role}')`;
    const result = conn.query(query);

    session(req, res, req.body);

    return `REGISTRATION!`;
  };

  async login(req, res) {
    const {email, password} = req.body;

    const checkUser = conn.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );
    if(!checkUser[0]) throw new Error("Неверный логин!");

    const validPassword = bcrypt.compareSync(password, checkUser[0].password);
    if(!validPassword) throw new Error("Неверный пароль!");

    session(req, res, checkUser[0]);

    res.status(200).json(`${checkUser[0].email} LOGIN!`);
  };

  logout(req, res){
    req.session.destroy();
    return res.redirect('/');
  };

  async getUsers(req, res) {
    const query = `SELECT id ,firstname, role, email FROM users WHERE email = '${req.session.user}';`;

    const result = conn.query(query);
    // console.log(result[0].firstname);
    return result[0];
  };
};

module.exports = new Service();
