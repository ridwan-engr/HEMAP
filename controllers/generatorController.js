import { Generator } from "../models/Generator.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createGenerator =
  asyncHandler(async (req, res) => {

    const generator =
      await Generator.create(req.body);

    res.status(201).json({
      success: true,
      count: generator.length,
      generator
    });
  });

export const getGenerators =
  asyncHandler(async (req, res) => {

    const generators =
      await Generator.find()
      .populate("siteId");

    res.json({
      success: true,
      count: generators.length,
      generators
    });
  });

  export const getGenerator = asyncHandler(async (req, res) => {
  
    const generator = await Generator.findById(req.params.id);
  
    if (!generator) {
      throw new ApiError(404, "Generator not found");
    }
  
    res.status(200).json({
      success: true,
      generator
    });

  
  });

  export const updateGenerator = asyncHandler(async (req, res) => {

  const generator = await Generator.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!generator) {
    throw new ApiError(404, "Generator not found");
  }

  res.status(200).json({
    success: true,
    message: "Generator updated successfully",
    generator
  });

});

// Delete Site
export const deleteGenerator = asyncHandler(async (req, res) => {

  const generator = await Generator.findByIdAndDelete(req.params.id);

  if (!generator) {
    throw new ApiError(404, "Generator not found");
  }

  res.status(200).json({
    success: true,
    message: "Generator deleted successfully"
  });

});
