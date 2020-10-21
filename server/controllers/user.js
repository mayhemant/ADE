const User = require("../models/User");
const Event = require("../models/Event");
const errorHandler = require("../helpers/dbErrorHandler");
const _ = require("lodash");
const { values } = require("lodash");

exports.read = (req, res) => {
  username = req.params.username;
  console.log(req.user);
  User.findOne({ username: username }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User Not Found",
      });
    }
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json({ user });
  });
};

exports.update = (req, res) => {
  userId = req.user._id;
  User.findById(userId).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User Not Found",
      });
    }
    // res.json({ user });
    console.log(user.email);
    newUser = _.merge(user);
    console.log(newUser);

    if (req.body.email) {
      req.body.email = user.email;
    }
    if (req.body.hashed_password) {
      req.body.hashed_password = user.hashed_password;
    }

    if (req.body.salt) {
      req.body.salt = user.salt;
    }

    if (req.body.role) {
      req.body.role = user.role;
    }
    newUser = _.merge(newUser, req.body);
    // console.log(newUser);
    console.log(newUser);

    newUser.save((err) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      User.findById(user._id).exec((err, data) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }

        data.hashed_password = undefined;
        data.salt = undefined;
        res.json({
          data,
        });
      });
    });
  });
};
