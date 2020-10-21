const slugify = require("slugify");
const { errorHandler } = require(".././helpers/dbErrorHandler");
const _ = require("lodash");
const Organization = require("../models/Organization");

exports.create = (req, res) => {
  const { name, about, cover, image } = req.body;
  createdBy = req.user._id;
  let slug = slugify(name).toLowerCase();
  let organization = new Organization({ name, slug, cover, image, about });
  organization.createdBy = createdBy;
  organization.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

// exports.categoryBySlug = (req, res, next, slug) => {
//   Category.findOne({ slug }).exec((err, category) => {
//     if (err || !category) {
//       return res.status(400).json({
//         error: "Not Found",
//       });
//     }

//     req.category = category;

//     next();
//   });
// };

// ,update , remove , read, list

exports.update = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  const { name, about, cover, image } = req.body;
  //
  Organization.findOne({ slug }).exec((err, oldOrg) => {
    if (err) {
      return res.status(400).json({
        error: "Internal Server Error",
      });
    } else if (!oldOrg) {
      return res.status(400).json({
        error: "No Category Found!",
      });
    }
    oldSlug = oldOrg.slug;
    oldOrg.slug = oldSlug;

    if (name) {
      oldOrg.name = name;
    }
    if (about) {
      oldOrg.about = about;
    }
    if (cover) {
      oldOrg.cover = cover;
    }
    if (image) {
      oldOrg.image = image;
    }

    oldOrg.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });
};

exports.remove = (req, res) => {
  console.log("rm");
  //
  let slug = req.params.slug.toLowerCase();
  Organization.findOneAndRemove({ slug }).exec((err, success) => {
    if (err) {
      return res.status(400).json({
        error: "Internal Server Error",
      });
    }
    res.status(200).json({
      message: `Organization ${success.name} Deleted Successfully `,
    });
  });
};

exports.read = (req, res) => {
  // read the category by slug
};

exports.list = (req, res) => {
  Organization.find({}).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};
