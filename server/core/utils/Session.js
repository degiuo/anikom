module.exports = function(req, res, {email}){
  req.session.user = email;
  return email;
};