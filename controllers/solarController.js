import { SolarPlant } from "../models/SolarPlant.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createSolarPlant =
  asyncHandler(async (req, res) => {

    const solar =
      await SolarPlant.create(req.body);

    res.status(201).json({
      success: true,
      count: solar.length,
      solar
    });
  });

export const getSolarPlants =
  asyncHandler(async (req, res) => {

    const solar =
      await SolarPlant.find()
      .populate("siteId");

    res.json({
      success: true,
      count: solar.length,
      solar
    });
  });

  export const getSolarPlant = asyncHandler(async (req, res) => {

  const solar = await SolarPlant.findById(req.params.id);

  if (!solar) {
    throw new ApiError(404, "solarplant not found");
  }

  res.status(200).json({
    success: true,
    solar
  });

});

export const updateSolarPlant = asyncHandler(async (req, res) => {

  const solar = await SolarPlant.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!solar) {
    throw new ApiError(404, "Solar plant not found");
  }

  res.status(200).json({
    success: true,
    message: "Solar plant updated successfully",
    solar
  });

});

export const deleteSolarPlant = asyncHandler(async (req, res) => {

  const solar = await SolarPlant.findByIdAndDelete(req.params.id);

  if (!solar) {
    throw new ApiError(404, "Solar plant not found");
  }

  res.status(200).json({
    success: true,
    message: "Solarplant deleted successfully"
  });

});


