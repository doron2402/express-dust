var usersController = {};

usersController.getLogin = function(req, res, next) {
  return res.render('index', {
    title: "get login",
    header: "Login page"
  });
};

usersController.postLogin = function(req, res, next) {
  return res.render('index', {
    title: "post login",
    header: "Login page"
  });
};

module.exports = usersController;