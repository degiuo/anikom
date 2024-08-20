const mysql = require('sync-mysql');
const {DB} = require('../utils/config.js');
const fileService = require('../utils/FileService.js');

const conn = new mysql(DB);

class Service {
  async create(news, image){
    const fileName = fileService.saveFile(image);
    const date = Math.round(new Date().getTime()/1000);

    const query = conn.query(`INSERT INTO news(image, title, description, date) VALUES('${fileName}', '${news.title}', '${news.description}', '${date}')`);

    return 'SUCCESS!';
  };
  
  async update(req){
    const id = req.params.id;
    const {title, description} = req.body;
    if(req.files) {
      const fileNameRemove = conn.query(`SELECT image FROM news WHERE id = '${id}'`);
      fileService.removeFile(fileNameRemove);
      
      const fileName = fileService.saveFile(req.files.image);
      const query = `UPDATE news SET image = '${fileName}', title = '${title}', description = '${description}' WHERE id = '${id}'`;
    }else{
      const query = `UPDATE news SET title = '${title}', description = '${description}' WHERE id = '${id}'`;
    }
    
    const result = conn.query(query);
    return result;
  };

  async delete(id) {
    if (id == null) {
      throw new Error("nope id");
    }

    let query = `SELECT image FROM news WHERE id = '${id}'`;
    let result = conn.query(query);
    
    fileService.removeFile(result[0]);

    query = `DELETE FROM news WHERE id = '${id}'`;
    
    result = conn.query(query);
    
    return 'SUCCESS!';
  };

  async getNews(req) {
    const query = `SELECT * FROM news`;

    const result = conn.query(query);
    return result;
  };

};

module.exports = new Service();
