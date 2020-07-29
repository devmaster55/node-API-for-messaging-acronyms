module.exports = (req, res, next) => {  
  console.log('headers =>', req.headers);
  if (!req.headers.authorization) return res.status(401).send({
    message: "Access denied. No authorization provided."});

  next();
};