const service = require('./Service.js');

class Controller {
  async registration(req, res) {
    try{
      const user = await service.registration(req, res);
      return res.status(200).json(user);
    }catch(e){
      res.status(500).json(e.message);
    }
  }
  
  async login(req, res) {
    try{
      const user = await service.login(req, res);
      return res.status(200).json(user);
    }catch(e){
      res.status(500).json(e.message);
    }
  }

  async logout(req, res) {
    try{
      const user = await service.logout(req, res);
      return res.status(200).json(user);
    }catch(e){
      res.status(500).json(e.message);
    }
  }
  
  async getUsers(req, res) {
    try {
      const users = await service.getUsers(req, res);
      return res.status(200).json(users);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
};

module.exports = new Controller();