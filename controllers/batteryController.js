import { Battery } from "../models/Battery.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createBattery =
  asyncHandler(async (req, res) => {

    const battery =
      await Battery.create(req.body);

    res.status(201).json({
      success: true,
      count: battery.length,
      battery
    });
  });

  export const getBattery = asyncHandler(async (req, res) => {
      
        const battery = await Battery.findById(req.params.id);
      
        if (!battery) {
          throw new ApiError(404, "Battery not found");
        }
      
        res.status(200).json({
          success: true,
          battery
        });
    
      
      });

export const getBatteries =
  asyncHandler(async (req, res) => {

    const batteries =
      await Battery.find()
      .populate("siteId");

    res.json({
      success: true,
      count: batteries.length,
      batteries
    });
  });

  export const updateBattery = asyncHandler(async (req, res) => {
  const battery = await Battery.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!battery) {
    throw new ApiError(404, "Battery not found");
  }

  res.status(200).json({
    success: true,
    message: "Battery updated successfully",
    battery
  });

});

export const deleteBattery = asyncHandler(async (req, res) => {

  const battery = await Battery.findByIdAndDelete(req.params.id);

  if (!battery) {
    throw new ApiError(404, "Battery not found");
  }

  res.status(200).json({
    success: true,
    message: "Battery deleted successfully"
  });

});
