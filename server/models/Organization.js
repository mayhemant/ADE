const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

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
      max: 200,
    },
    cover: {
      type: String,
    },
    image: {
      type: String,
    },
    createdBy: [{ type: ObjectId, ref: "User", required: true }],
    twitter: {
      type: String,
    },
    website: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
