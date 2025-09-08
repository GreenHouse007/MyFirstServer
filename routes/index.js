const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awesomeFunction, myController.tooeleTech);

module.exports = routes;
