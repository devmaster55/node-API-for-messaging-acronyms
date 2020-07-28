/* eslint-disable */
const env = process.env.NODE_ENV;

console.log(`Starting application with ${env ? env : 'dev'} configuration...`.bgBlue);

if (env === 'production') {
  var config = require('./prod.config.js');
} else {
  var config = require('./dev.config.js');
}

module.exports = config;