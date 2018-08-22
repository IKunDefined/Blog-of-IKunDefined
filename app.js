var express = require("express");
var swig = require("swig");
var mongoose = require("mongoose");

var app = express();

app.engine("html", swig.renderFile);
app.set("views", "./views");
app.set("view engine", "html");
swig.setDefaults({cache: false});

app.use("/public", express.static(__dirname + "/public"));

app.use("/admin", require("./routers/admin"));
app.use("/api", require("./routers/api"));
app.use("/", require("./routers/main"));

app.listen(3000);

console.log("your blog is running in http://localhost:3000");