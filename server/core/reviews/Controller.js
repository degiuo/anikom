const service = require('./Service.js');

class Controller {
  async addComment(req, res) {
    try{
      const user = await service.add(req, res);
      console.log(user);
      return res.status(200).json(user);
    }catch(e){
      res.status(500).json(e.message);
    }
  }
  
  async deleteComment(req, res) {
    try{
      const user = await service.delete(req, res);
      console.log(user);
      return res.status(200).json(user);
    }catch(e){
      res.status(500).json(e.message);
    }
  }
  
  async updateComment(req, res) {
    try{
      const user = await service.update(req, res);
      return res.status(200).json(user);
    }catch(e){
      res.status(500).json(e.message);
    }
  }
  
  async getComments(req, res) {
    try {
      const users = await service.getComments(req.params.id);
      return res.status(200).json(users);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
};

module.exports = new Controller();