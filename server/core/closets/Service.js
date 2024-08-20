const mysql = require('sync-mysql');
const FileService = require('../utils/FileService.js');
const {DB} = require('../utils/config.js');

const conn = new mysql(DB);

class ClosetService {
  async create(closet, image) {
    const fileName = FileService.saveFile(image);
    const query = `INSERT INTO closet(name, width, height, power_consumption, image, price, description) VALUES ('${closet.name}','${closet.width}','${closet.height}','${closet.power_consumption}','${fileName}','${closet.price}','${closet.description}')`;

    const result = conn.query(query);
    return result;
  }

  async getAll(req) {
    const {width = null, height = null, power_consumption = null} = req.query;
    const query = `SELECT * FROM closet WHERE ${width?'width <= '+ width:'width'} AND ${height?'height <= ' + height:'height'} AND ${power_consumption?'power_consumption <= ' + power_consumption:'power_consumption'}`;

    const result = conn.query(query);
    return result;
  }

  async getAllFilter(req) {
    const data = req.query();
    console.log(data);
    // const query = "SELECT * FROM closet";

    // const result = conn.query(query);
    return 'ok';
  }

  async getOne(id) {
    const query = `SELECT * FROM closet WHERE id = '${id}'`;

    const result = conn.query(query);
    return result;
  }

  async update(req, res) {
    const id = req.params.id;
    
    let arr = [];
    let str = '';

    for(const key in req.body){
      if(req.body[key]){
        str += `${key} = ?,`;
        arr.push(req.body[key]);
      }
    };

    if(req.files) {
      const result = conn.query(`SELECT image FROM closet WHERE id = '${id}'`);
      FileService.removeFile(result[0]);
      str += `image = ?`
      const fileName = FileService.saveFile(req.files.image);
      arr.push(fileName);
    }else{
      str = str.slice(0, -1);
    }

    if (id == null) {
      throw new Error("nope id");
    }
    const query = `
      UPDATE closet SET ${str} 
      WHERE id = '${id}'
    `;
    
    const result = conn.query(query, arr);

    return 'Ok!';
  }

  async delete(id) {
    if (id == null) {
      throw new Error("nope id");
    }

    let query = `SELECT image FROM closet WHERE id = '${id}'`;
    let result = conn.query(query);
    
    FileService.removeFile(result[0]);

    query = `DELETE FROM closet WHERE id = '${id}'`;
    result = conn.query(query);
    return 'Ok!';
  }
}

module.exports = new ClosetService();
