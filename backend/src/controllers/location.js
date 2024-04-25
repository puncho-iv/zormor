const Location = require("../models/locationModels");
//desc GET all locations
//route GET /locations
const getLocations = async (req, res) => {
  console.log("test");
  const place = await Location.find();
  res.status(200).json(place);
};

const createLocations = async (req, res) => {
  console.log("The body is: ", req.body);
  const { name, description, location, openHours } = req.body;
  if (!name || !description || !location || !openHours) {
    res.status(400);
    throw new Error("Fill in all fields");
  }
  const place = await Location.create({
    name,
    description,
    location,
    openHours,
  });
  res.status(201).json(place);
};

const getLocation = async (req, res) => {
  const place = await Location.findById(req.params.id);
  if (!place) {
    res.status;
    404;
    throw new Error("Location not found");
  }
  res.status(200).json(place);
};

const updateLocation = async (req, res) => {
  const place = await Location.findById(req.params.id);
  if (!place) {
    res.status;
    404;
    throw new Error("Location not found");
  }

  const updatedLocation = await Location.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedLocation);
};

const deleteLocation = async (req, res) => {
  const place = await Location.findById(req.params.id);
  if (!place) {
    res.status(404);
    throw new Error("Location not found");
  }

  const deletedLocation = await place.remove();
  res.status(200).json(deletedLocation);
};

module.exports = {
  getLocations,
  createLocations,
  getLocation,
  updateLocation,
  deleteLocation,
};
