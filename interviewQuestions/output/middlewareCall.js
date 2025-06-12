app.use(function (req, res, next) {
  console.log("middleware 1 called");
});

app.use(function (req, res, next) {
  console.log("middleware 2 called");
  next();
});

app.use(function (req, res, next) {
  console.log("middleware 3 called");
  next();
});


/**
middleware 1 called
 */