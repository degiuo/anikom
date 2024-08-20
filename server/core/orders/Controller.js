const service = require('./Service.js');

class Controller {
  async create(req, res) {
    try{
      const order = await service.create(req, res);
      return res.status(200).json(order);
    }catch(e){
      res.status(500).json(e.message);
    }
  }
  
  async getOrders(req, res) {
    try{
      const orders = await service.getOrders(req);
      return res.status(200).json(orders);
    }catch(e){
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const closet = await service.delete(req, res);
      return res.status(200).json(closet);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getStatus(req, res){
    try{
      const orders = await service.getStatus(req, res);
      return res.status(200).json(orders);
    }catch(e){
      res.status(500).json(e.message);
    }
  }

  async updateStatus(req, res) {
    try{
      const orders = await service.updateStatus(req, res);
      return res.status(200).json(orders);
    }catch(e){
      res.status(500).json(e.message);
    }
  }
};

module.exports = new Controller();