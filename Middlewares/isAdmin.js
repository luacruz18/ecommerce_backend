const isAdmin = (req, res, next) => {
  if (req.auth.role === "Admin") {
    next(); 
  } else {
    res.status(403).send("No autorizado");
  }
};

module.exports = isAdmin;


  // si el rol es admin hacer next, si no es admin res.send no autorizado