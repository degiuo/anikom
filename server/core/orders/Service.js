const mysql = require('sync-mysql');
const {DB} = require('../utils/config.js');

const conn = new mysql(DB);

class Service {
  async create(req, res) {
    const {closet, status_code = 1, address, note_order, online_check = 0, count = 1} = req.body;

    const date = Math.round(new Date().getTime()/1000);

    const query = conn.query(`INSERT INTO orders(user, closet, status_code, date, address, note_order, online_check, count) VALUES((SELECT id FROM users WHERE email = '${req.session.user}'), '${closet}', '${status_code}', '${date}', '${address}', '${note_order}', ${online_check}, ${count})`);

    return 'SUCCESS!';
  };

  async delete(req, res) {
    const {id} = req.body; 

    const query = `DELETE o FROM orders AS o JOIN users AS u ON o.user = u.id WHERE o.id = '${id}' AND u.email = '${req.session.user}'`;
    
    const result = conn.query(query);
    
    return 'SUCCESS!';
  };

  async getOrders(req) {
    const query = `
        SELECT o.id, c.image, u.email user, u.phone, c.price, u.role, c.name closet, os.status_code, os.value, o.online_check, o.date, o.address, o.note_order, o.count
        FROM orders o JOIN users u JOIN closet c JOIN order_status os 
        ON o.user = u.id AND o.closet = c.id AND o.status_code = os.status_code
      `;

    const result = conn.query(query);
    return result;
  };

  async updateStatus(req, res){
    const {id, status_code} = req.body;
    
    const query = `UPDATE orders SET status_code = '${status_code}' WHERE id = '${id}'`;

    const result = conn.query(query);
    return result;
  };

  async getStatus(req, res){
    const query = `SELECT * FROM order_status`;

    const result = conn.query(query);
    return result;
  };
};

module.exports = new Service();
