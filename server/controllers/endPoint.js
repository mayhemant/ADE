exports.endPoint = (req, res) => {
  res.status(200).json({
    Routes: "/api -GET -All (All the routes Info)",
    User: "Null",
    Admin: "Null",
  });
};
