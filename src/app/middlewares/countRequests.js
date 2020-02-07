module.exports = (req, res, next) => {

  console.count("Número de requisições");
  return next();
  
}