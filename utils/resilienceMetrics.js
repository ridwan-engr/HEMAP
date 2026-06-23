export function calculateENS(
  demandEnergy,
  suppliedEnergy
) {

  return Math.max(
    0,
    demandEnergy -
    suppliedEnergy
  );

}

export function calculateLOLP(
  outageHours,
  totalHours
) {

  if (
    totalHours === 0
  ) {
    return 0;
  }

  return (
    outageHours /
    totalHours
  );

}

export function calculateSAIFI(
  customerInterruptions,
  totalCustomers
) {

  if (
    totalCustomers === 0
  ) {
    return 0;
  }

  return (
    customerInterruptions /
    totalCustomers
  );

}

export function calculateSAIDI(
  outageMinutes,
  totalCustomers
) {

  if (
    totalCustomers === 0
  ) {
    return 0;
  }

  return (
    outageMinutes /
    totalCustomers
  );

}

export function calculateCAIDI(
  saidi,
  saifi
) {

  if (
    saifi === 0
  ) {
    return 0;
  }

  return (
    saidi /
    saifi
  );

}

export function calculateRecoveryTime(
  outageStart,
  outageEnd
) {

  return (
    new Date(outageEnd) -
    new Date(outageStart)
  ) /
  (1000 * 60);

}

export function calculateCriticalLoadServed(
  served,
  demand
) {

  if (
    demand === 0
  ) {
    return 0;
  }

  return (
    served /
    demand
  );

}

export function calculateResilienceIndex(
  deliveredEnergy,
  requiredEnergy
) {

  if (
    requiredEnergy === 0
  ) {
    return 0;
  }

  return (
    deliveredEnergy /
    requiredEnergy
  );

}