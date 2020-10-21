const slugify = require("slugify");
const { errorHandler } = require(".././helpers/dbErrorHandler");
const Category = require("../models/Category");
const _ = require("lodash");

exports.create = (req, res) => {
  const { name, about, cover, image } = req.body;
  let slug = slugify(name).toLowerCase();
  let category = new Category({ name, slug, cover, image, about });

  category.save((err, data) => {
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
  Category.findOne({ slug }).exec((err, oldCategory) => {
    if (err) {
      return res.status(400).json({
        error: "Internal Server Error",
      });
    } else if (!oldCategory) {
      return res.status(400).json({
        error: "No Category Found!",
      });
    }
    oldSlug = oldCategory.slug;
    oldCategory.slug = oldSlug;

    if (name) {
      oldCategory.name = name;
    }
    if (about) {
      oldCategory.about = about;
    }
    if (cover) {
      oldCategory.cover = cover;
    }
    if (image) {
      oldCategory.image = image;
    }

    oldCategory.save((err, result) => {
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
  //
  let slug = req.params.slug;
  Category.findOneAndRemove({ slug }).exec((err, success) => {
    if (err) {
      return res.status(400).json({
        error: "Internal Server Error",
      });
    }
    res.status(200).json({
      message: `Category ${success.name} Deleted Successfully `,
    });
  });
};

exports.read = (req, res) => {
  // read the category by slug
};

exports.list = (req, res) => {
  Category.find({}).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};
