const isAdmin = (req, res, next) => {

  console.log(req.auth.role)
    next()
  };
  
  module.exports = isAdmin;


  // si el rol es admin hacer next, si no es admin res.send no autorizado