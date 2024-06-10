const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/blog", (req, res) => {
  res.sendFile("./views/blog.html", { root: __dirname });
});
app.get("/blog-me", (req, res) => {
  res.redirect("/blog")
});
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
})

app.listen(3000);
