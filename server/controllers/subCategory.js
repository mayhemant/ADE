const slugify = require("slugify");
const { errorHandler } = require(".././helpers/dbErrorHandler");
const SubCategory = require("../models/SubCategory");
const _ = require("lodash");

exports.create = (req, res) => {
  const { name, about, cover, image, badge } = req.body;
  let slug = slugify(name).toLowerCase();
  let subCategory = new SubCategory({ name, slug, cover, image, about });

  subCategory.save((err, data) => {
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
  SubCategory.findOne({ slug }).exec((err, oldSubCategory) => {
    if (err) {
      return res.status(400).json({
        error: "Internal Server Error",
      });
    } else if (!oldSubCategory) {
      return res.status(400).json({
        error: "No Sub-Category Found!",
      });
    }
    oldSlug = oldSubCategory.slug;
    oldSubCategory.slug = oldSlug;

    if (name) {
      oldSubCategory.name = name;
    }
    if (about) {
      oldSubCategory.about = about;
    }
    if (cover) {
      oldSubCategory.cover = cover;
    }
    if (image) {
      oldSubCategory.image = image;
    }

    oldSubCategory.save((err, result) => {
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
  console.log("rm");
  let slug = req.params.slug;
  SubCategory.findOneAndRemove({ slug }).exec((err, success) => {
    if (err) {
      return res.status(400).json({
        error: "Internal Server Error",
      });
    }
    res.status(200).json({
      message: `Sub Category ${success.name} Deleted Successfully `,
    });
  });
};

exports.read = (req, res) => {
  // read the category by slug
};

exports.list = (req, res) => {
  SubCategory.find({}).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};
