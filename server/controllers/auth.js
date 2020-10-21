const User = require("../models/User");
const shortId = require("shortid");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

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
          error: "Please try again",
        });
      }
      res.status(200).json({
        message: `Signup success, please LogIn to continue`,
      });
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: `No User Found With ${email}, please make sure to Sign-Up first!`,
      });
    }

    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email Pass dose not match",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // const {_id, username, firstName, lastName, role, email,profile_photo,cover,gender,designation,twitter,instagram,facebook,mail,website}
    user.hashed_password = undefined;
    user.salt = undefined;
    return res.json({
      token,
      user,
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "Signed Out Successfully",
  });
};
