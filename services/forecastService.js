import { Forecast } from "../models/Forecast.js";

export async function createForecastRecord(data) {
  return await Forecast.create(data);
}

export function calculateMAE(actual, predicted) {

  if (actual.length !== predicted.length) {
    throw new Error("Array lengths must match");
  }

  const mae =
    actual.reduce(
      (sum, value, index) =>
        sum + Math.abs(value - predicted[index]),
      0
    ) / actual.length;

  return Number(mae.toFixed(4));
}

export function calculateRMSE(actual, predicted) {

  const mse =
    actual.reduce(
      (sum, value, index) =>
        sum +
        Math.pow(
          value - predicted[index],
          2
        ),
      0
    ) / actual.length;

  return Number(
    Math.sqrt(mse).toFixed(4)
  );
}

export function calculateMAPE(actual, predicted) {

  const mape =
    actual.reduce(
      (sum, value, index) =>
        sum +
        Math.abs(
          (value - predicted[index]) /
            value
        ),
      0
    ) /
    actual.length *
    100;

  return Number(mape.toFixed(4));
}

export function calculateR2(actual, predicted) {

  const mean =
    actual.reduce((a, b) => a + b, 0) /
    actual.length;

  const ssTotal =
    actual.reduce(
      (sum, value) =>
        sum +
        Math.pow(value - mean, 2),
      0
    );

  const ssResidual =
    actual.reduce(
      (sum, value, index) =>
        sum +
        Math.pow(
          value - predicted[index],
          2
        ),
      0
    );

  return Number(
    (
      1 -
      ssResidual / ssTotal
    ).toFixed(4)
  );
}