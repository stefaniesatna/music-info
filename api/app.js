var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var testAPIRouter = require("./routes/testAPI");
var app = express();
// var btoa = require("btoa");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/testAPI", testAPIRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// const APIController = (function () {
//   const clientId = "";
//   const clientSecret = "";
//   const str = clientId + ":" + clientSecret;

//   const _getToken = async () => {
//     const result = await fetch("https://accounts.spotify.com/api/token", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         Authorization: "Basic " + Buffer.from(str, "binary").toString("base64"),
//       },
//       body: "grant_type=client_credentials",
//     });

//     const data = await result.json();
//     return data.access_token;
//   };

//   const _getTrack = async (token, trackEndPoint) => {

//     const result = await fetch(`${trackEndPoint}`, {
//       method: "GET",
//       headers: { "Authorization": "Bearer" + token}
//     })

//     const data = await result.json()
//     console.log(data)
//     return data
//   }

//   return {
//     getToken() {
//       return _getToken()
//     },
//     getTrack(token, trackEndPoint){
//       return _getTrack(token, trackEndPoint)
//     }
//   }
// })();

module.exports = app;
