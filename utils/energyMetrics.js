export function renewableFraction(
  renewableEnergy,
  totalEnergy
) {

  if (
    totalEnergy === 0
  ) {
    return 0;
  }

  return (
    renewableEnergy /
    totalEnergy
  );

}

export function batteryEfficiency(
  dischargeEnergy,
  chargeEnergy
) {

  if (
    chargeEnergy === 0
  ) {
    return 0;
  }

  return (
    dischargeEnergy /
    chargeEnergy
  );

}

export function selfConsumptionRatio(
  renewableUsed,
  renewableGenerated
) {

  if (
    renewableGenerated === 0
  ) {
    return 0;
  }

  return (
    renewableUsed /
    renewableGenerated
  );

}

export function energyCost(
  energyKWh,
  tariff
) {

  return (
    energyKWh *
    tariff
  );

}

export function carbonEmission(
  dieselLitres
) {

  return (
    dieselLitres *
    2.68
  );

}