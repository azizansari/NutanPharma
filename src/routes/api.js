const express = require("express");
const { errorHandler } = require("../middleware");
const { login } = require("../controllers/users/login");
const { test } = require("../controllers/users/test");

const router = express();
// register api points
router.use("/c", require("./common"));
router.post("/login", login);
router.post("/test/:id", test);

// catch api all errors
router.use(errorHandler);

module.exports = router;
