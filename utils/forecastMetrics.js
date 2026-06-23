export function calculateMAE(
  actual,
  predicted
) {

  return (
    actual.reduce(
      (
        sum,
        value,
        index
      ) =>
        sum +
        Math.abs(
          value -
          predicted[index]
        ),
      0
    ) /
    actual.length
  );

}

export function calculateRMSE(
  actual,
  predicted
) {

  const mse =
    actual.reduce(
      (
        sum,
        value,
        index
      ) =>
        sum +
        Math.pow(
          value -
          predicted[index],
          2
        ),
      0
    ) /
    actual.length;

  return Math.sqrt(mse);

}

export function calculateMAPE(
  actual,
  predicted
) {

  const mape =
    actual.reduce(
      (
        sum,
        value,
        index
      ) =>
        sum +
        Math.abs(
          (
            value -
            predicted[index]
          ) /
          value
        ),
      0
    );

  return (
    mape /
    actual.length *
    100
  );

}

export function calculateR2(
  actual,
  predicted
) {

  const mean =
    actual.reduce(
      (a, b) => a + b,
      0
    ) /
    actual.length;

  const ssTotal =
    actual.reduce(
      (
        sum,
        value
      ) =>
        sum +
        Math.pow(
          value -
          mean,
          2
        ),
      0
    );

  const ssResidual =
    actual.reduce(
      (
        sum,
        value,
        index
      ) =>
        sum +
        Math.pow(
          value -
          predicted[index],
          2
        ),
      0
    );

  return (
    1 -
    ssResidual /
      ssTotal
  );

}