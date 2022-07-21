const express = require("express");
const serverApp = express();
const { API_KEY, CURRENT_WEATHER_URL } = require("../Constant");
const axios = require("axios");

const getWeatherDetails = (req, res) => {
  const { city } = req.params;
  axios
    .get(`${CURRENT_WEATHER_URL}`, { params: { q: city, appid: API_KEY } })
    .then((response) => {
      const data = response.data;
      let weatherParameters;

      weatherParameters = {
        lon: data.coord.lon,
        lat: data.coord.lat,
        main: data.weather[0].main,
        temp: Math.round(data.main.temp - 273, 2),
        feelsLike: Math.round(data.main.feels_like - 273, 2),
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        city: data.name,
      };

      res.status(200).json({ success: true, data: weatherParameters });
    })
    .catch((err) =>
      res.status(500).send({ success: false, error: err.message })
    );
};

module.exports = getWeatherDetails;
