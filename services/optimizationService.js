export function dispatchPriority({
  solarPower,
  batterySOC,
  batteryPower,
  generatorPower,
  loadDemand
}) {

  let remainingLoad =
    loadDemand;

  const dispatch = {
    solar: 0,
    battery: 0,
    generator: 0,
    unmetLoad: 0
  };

  // Solar First
  dispatch.solar =
    Math.min(
      solarPower,
      remainingLoad
    );

  remainingLoad -=
    dispatch.solar;

  // Battery Second
  if (
    remainingLoad > 0 &&
    batterySOC > 20
  ) {
    dispatch.battery =
      Math.min(
        batteryPower,
        remainingLoad
      );

    remainingLoad -=
      dispatch.battery;
  }

  // Generator Last
  if (remainingLoad > 0) {

    dispatch.generator =
      Math.min(
        generatorPower,
        remainingLoad
      );

    remainingLoad -=
      dispatch.generator;
  }

  dispatch.unmetLoad =
    remainingLoad;

  return dispatch;
}

export function peakShaving(
  demand,
  threshold
) {
  if (demand <= threshold) {
    return 0;
  }

  return (
    demand - threshold
  );
}

export function loadShifting(
  offPeakLoad,
  peakLoad
) {
  return {
    shiftAmount:
      peakLoad -
      offPeakLoad
  };
}