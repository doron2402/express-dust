var site = {};

site.getHome = function(req, res, next) {
  return res.render('index', {
    title: "get login",
    header: "Login page"
  });
};

site.postContact = function (req, res, next) {
  return res.render('index', {
    title: "get login",
    header: "Login page"
  });
};

module.exports = site;