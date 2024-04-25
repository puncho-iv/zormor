const express = require("express");
const router = express.Router();
const {
  getLocations,
  createLocations,
  getLocation,
  updateLocation,
  deleteLocation,
} = require("../controllers/location");

router.route("/").get(getLocations).post(createLocations);
router
  .route("/:id")
  .put(updateLocation)
  .get(getLocation)
  .delete(deleteLocation);

module.exports = router;
