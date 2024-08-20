const service = require('./Service.js');

class ClosetController {
  async create(req, res) {
    try{
      const closet = await service.create(req.body, req.files.image);
      return res.status(200).json(closet);
    }catch(e){
      res.status(500).json(e.message);
    }
  }
  
  async getAll(req, res) {
    try{
      const closets = await service.getAll(req);
      return res.status(200).json(closets);
    }catch(e){
      res.status(500).json(e.message);
    }
  }

  async getAllFilter(req, res) {
    try{
      const closets = await service.getAllFilter(req);
      return res.status(200).json(closets);
    }catch(e){
      res.status(500).json(e.message);
    }
  }
  
  async getOne(req, res) {
    try {
      const closet = await service.getOne(req.params.id);
      return res.status(200).json(closet);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async update(req, res){
    try {
      const closet = await service.update(req, res);
      return res.status(200).json(closet);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const closet = await service.delete(req.params.id);
      return res.status(200).json(closet);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
};

module.exports = new ClosetController();