const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: [32, "Too Long"],
    },
    slug: {
      type: String,
      trim: true,
      unique: true,
      index: true,
    },
    about: {
      type: String,
      required: true,
      min: 2,
      max: 2000000,
    },
    cover: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
