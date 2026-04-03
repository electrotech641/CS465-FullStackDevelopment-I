const express = require("express");
const router = express.Router();

//Initialize trips controller
const tripsController = require("../controllers/trips");

//Define routes
router.route("/trips").get(tripsController.tripsList);
router.route('/trips/:tripCode').get(tripsController.tripsFindByCode);

module.exports = router;