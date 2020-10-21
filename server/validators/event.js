const { check } = require("express-validator");

exports.eventCreateValidator = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Title Should Not Be Empty")
    .isLength({ min: 6 })
    .withMessage("Title Must Consist of 6 Chars"),
  check("event_date").not().isEmpty().withMessage("Date Should Not Be Empty"),
  check("event_time").not().isEmpty().withMessage("Time Should Not Be Empty"),
  check("mode").not().isEmpty().withMessage("mode Should Not Be Empty"),
  check("organization")
    .not()
    .isEmpty()
    .withMessage("organization Should Not Be Empty"),
  check("categories")
    .not()
    .isEmpty()
    .withMessage("categories Should Not Be Empty"),
  check("subCategories")
    .not()
    .isEmpty()
    .withMessage("subCategories Should Not Be Empty"),
];
