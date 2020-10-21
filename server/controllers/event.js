const { errorHandler } = require("../helpers/dbErrorHandler");
const { smartTrim } = require("../helpers/event");
const Event = require("../models/Event");
const slugify = require("slugify");
const stripHtml = require("string-strip-html");
const _ = require("lodash");
exports.create = (req, res) => {
  //
  const {
    name,
    cover,
    about,
    image,
    registration_url,
    categories,
    subCategories,
    mode,
    price,
    location,
    event_date,
    event_time,
    organization,
  } = req.body;

  let event = new Event();
  event.organization = organization;
  event.price = price;
  event.event_date = event_date;
  event.event_time = event_time;
  event.location = location;
  event.image = image;
  event.mode = mode;
  event.registration_url = registration_url;
  event.about = about;
  event.name = name;
  event.cover = cover;
  event.excerpt = smartTrim(about, 3, " ", " ...");

  event.slug =
    Math.floor(Math.random() * 10) +
    "-" +
    slugify(name).toLowerCase() +
    "-" +
    Math.floor(Math.random() * 1);
  console.log(event.slug);
  event.mdesc = stripHtml(about).result.substring(0, 150);
  event.postedBy = req.user._id;
  let arrayOfCategories = categories && categories.split(",");
  let arrayOfSubCats = subCategories && subCategories.split(",");

  if (arrayOfCategories[1]) {
    return res.status(400).json({
      error: "Single Category Can be Used for a Event",
    });
  }

  event.save((err, result) => {
    if (err) {
      console.log("0");
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    Event.findByIdAndUpdate(
      result._id,
      { $push: { categories: arrayOfCategories } },
      { new: true }
    ).exec((err, result) => {
      if (err) {
        console.log("1");
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      Event.findByIdAndUpdate(
        result._id,
        { $push: { subCategories: arrayOfSubCats } },
        { new: true }
      ).exec((err, result) => {
        if (err) {
          console.log("2");
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        idString = result._id.toString();
        idShort = idString.slice(1, 10);
        var newSlug = result.slug + "-" + idShort;
        Event.findByIdAndUpdate(
          result._id,
          { $set: { slug: newSlug } },
          { new: true }
        ).exec((err, result) => {
          if (err) {
            console.log("3");
            return res.status(400).json({
              error: errorHandler(err),
            });
          }
          res.status(200).json({
            result,
          });
        });
      });
    });
  });
};

exports.list = (req, res) => {
  Event.find({}).exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: "Please Try Again :)",
      });
    }
    res.json({
      result,
    });
  });
};

exports.read = (req, res) => {
  let slug = req.params.slug;
  Event.findOne({ slug }).exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      result,
    });
  });
};

exports.remove = (req, res) => {
  let slug = req.params.slug;
  Event.findOneAndRemove({ slug }).exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: result.name,
    });
  });
};

exports.update = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Event.findOne({ slug }).exec((err, oldEvent) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    newEvent = _.merge(oldEvent, req.body);
    newEvent.slug = oldEvent.slug;
    newEvent.organization = oldEvent.organization;
    newEvent.save((err) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      Event.findById(oldEvent._id).exec((err, data) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        response = `${data.name}, ${data.slug}`;
        res.json({
          blog: response,
        });
      });
    });
  });
};
