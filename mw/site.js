var site = {};

site.checkForCSRF = function(req, res, next) {
  console.log('checking for csrf')
  return next();
};


module.exports = site;