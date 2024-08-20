module.exports = function(req, res, next){
  try{
    if(!req.session.user) {return res.status(402).json('Вы не зарегистрированы!');}
    next();
  }catch(e){
    res.status(400).json(e);
  }
};