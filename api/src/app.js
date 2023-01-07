//IMPORTS//
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const getRecipes = require("./routes/getRecipes.js");
const getRecipeDetail = require("./routes/getRecipeDetail.js");
const getDiets = require("./routes/getDiets.js");
const makeRecipe = require("./routes/makeRecipe.js");
const {getRecipesApi} = require("./routes/controllers");
//Define Server//
const server = express();

//Define MiddleWares//
server.use(morgan("dev"));
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});



//Use Routes//
server.use(getRecipes);
server.use(getRecipeDetail);
server.use(getDiets);
server.use(makeRecipe);

//MODULE EXPORTS//
module.exports = server;


