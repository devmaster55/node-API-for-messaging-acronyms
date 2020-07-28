const acronymsRoutes = require("./acronyms.routes");
  
const registerRoutes = app => {
  app.use("/api/v1", acronymsRoutes);
};

module.exports = {
  registerRoutes,
};
  