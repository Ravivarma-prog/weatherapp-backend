const express = require("express");
const weatherRouter = express.Router();
const getWeatherDetails = require("../Controllers/weather");

weatherRouter.get("/:city", getWeatherDetails);

module.exports = weatherRouter;
