const express = require("express");
const cors = require("cors");
const app = express();
const weatherRouter = require("./Routers/weather");

app.use(cors());
app.use("/api/weather", weatherRouter);

app.get("*", (req, res) => {
  res.writeHead(404, { "content-type": "text/html" });
  res.write("<h1>404</h1><p>Page not found</p>");
  res.send();
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
