/*=========================================================================================
REQUIRED MODULES
=========================================================================================*/

const express = require("express");
const path = require("path");

/*=========================================================================================
VARIABLES
=========================================================================================*/

const router = new express.Router();
const customerRouteOptions = {
  root: path.join(__dirname, "../../views/public")
};

/*=========================================================================================
ROUTES
=========================================================================================*/

router.get("/services/*", (req, res) => {
  res.sendFile("error404.html", customerRouteOptions);
});

router.get("/company/*", (req, res) => {
  res.sendFile("error404.html", customerRouteOptions);
});

router.get("*", (req, res) => {
  res.sendFile("error404.html", customerRouteOptions);
});

/*=========================================================================================
EXPORT ROUTE
=========================================================================================*/

module.exports = router;

/*=========================================================================================
END
=========================================================================================*/
