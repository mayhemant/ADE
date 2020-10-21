const { errorHandler } = require("../helpers/dbErrorHandler");
const User = require("../models/User");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: `User with ${email} already Exists, if you did not created account, please contact our support team!`,
      });
    }
    const { lastName, firstName, email, password } = req.body;
    let username = email.split("@")[0];

    let newUser = new User({
      firstName,
      lastName,
      email,
      password,
      username,
    });

    newUser.save((err, user) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.status(200).json({
        message: `Signup success, please LogIn to continue`,
      });
    });
  });
};
