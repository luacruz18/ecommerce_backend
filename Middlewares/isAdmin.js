const isAdmin = (req, res, next) => {
  if (req.auth.role === "admin") {
    next(); 
  } else {
    res.status(403).send("Not authorized");
  }
};

module.exports = isAdmin;


  // si el rol es admin hacer next, si no es admin res.send no autorizado