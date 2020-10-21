const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      max: 32,
      unique: true,
      index: true,
      lowercase: true,
    },
    firstName: {
      type: String,
      trim: true,
      required: true,
      max: 12,
    },
    lastName: {
      type: String,
      max: 12,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    hashed_password: {
      type: String,
    },

    role: {
      type: Number,
      default: 0,
    },
    salt: String,
    about: {
      type: String,
      maxlength: 180,
    },
    profile_photo: {
      type: String,
    },
    cover: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Rather Not Say"],
    },
    designation: {
      type: String,
      enum: ["Developer", "Student", "Writer"],
    },
    twitter: {
      type: String,
    },
    instagram: {
      type: String,
    },
    facebook: {
      type: String,
    },
    mail: {
      type: String,
    },
    website: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    //! create a temporary variable called _password

    this._password = password;

    // TODO: generate salt

    this.salt = this.makeSalt();
    // encrypt Password
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random() + "");
  },
};

module.exports = mongoose.model("User", userSchema);