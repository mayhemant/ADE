const User = require("../models/User");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: `User with ${email} already Exists, if you did not created account, please contact our support team!`,
      });
    }
    const { firstname, lastname, email, password } = req.body;
    let username = email.split("@")[0];

    let newUser = new User({ name, email, password, profile, username });

    newUser.save((err, user) => {
      if (err) {
        return res.status(400).json({
          error: "Please try again",
        });
      }
      res.json({
        message: `Signup success, please LogIn to continue`,
      });
    });
  });
};
