const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const eventSchema = new mongoose.Schema(
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
    excerpt: {
      type: String,
      max: 1000,
    },
    mtitle: {
      type: String,
    },
    mdesc: {
      type: String,
    },
    about: {
      type: String,
      required: true,
      min: 2,
      max: 2000000,
    },
    image: {
      type: String,
    },
    registration_url: {
      type: String,
    },
    categories: [{ type: ObjectId, ref: "Category", required: true }],
    subCategories: [{ type: ObjectId, ref: "SubCategories", required: true }],
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
    organization: [{ type: ObjectId, ref: "Organization", required: true }],
    views: {
      type: Number,
      default: 0,
    },
    mode: {
      type: String,
      enum: ["offline", "online"],
    },
    price: {
      type: Number,
      default: 0,
    },
    event_date: {
      type: String,
      required: true,
    },
    event_time: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      // required: true,
    },
    blogLink: {
      type: String,
    },
    expPics: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
