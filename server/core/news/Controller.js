const service = require('./Service.js');

class Controller {
  async create(req, res) {
    try{
      const news = await service.create(req.body, req.files.image);
      return res.status(200).json(news);
    }catch(e){
      res.status(500).json(e.message);
    }
  }
  
  async getNews(req, res) {
    try{
      const news = await service.getNews();
      return res.status(200).json(news);
    }catch(e){
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const news = await service.delete(req.params.id);
      return res.status(200).json(news);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async update(req, res) {
    try{
      const news = await service.update(req);
      return res.status(200).json(news);
    }catch(e){
      res.status(500).json(e.message);
    }
  }
};

module.exports = new Controller();