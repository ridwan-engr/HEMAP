export function calculateENS(
  demand,
  supplied
) {
  return Math.max(
    0,
    demand - supplied
  );
}

export function calculateLOLP(
  outageHours,
  totalHours
) {
  return outageHours / totalHours;
}

export function calculateSAIFI(
  customerInterruptions,
  totalCustomers
) {
  return (
    customerInterruptions /
    totalCustomers
  );
}

export function calculateSAIDI(
  outageDurationMinutes,
  totalCustomers
) {
  return (
    outageDurationMinutes /
    totalCustomers
  );
}

export function calculateCAIDI(
  saidi,
  saifi
) {
  return saifi === 0
    ? 0
    : saidi / saifi;
}

export function calculateCriticalLoadServed(
  criticalLoadServed,
  totalCriticalLoad
) {
  return (
    criticalLoadServed /
    totalCriticalLoad
  );
}

export function calculateRecoveryTime(
  faultTime,
  recoveryTime
) {
  return (
    new Date(recoveryTime) -
    new Date(faultTime)
  ) / 60000;
}

export function calculateResilienceIndex(
  deliveredEnergy,
  demandedEnergy
) {
  return (
    deliveredEnergy /
    demandedEnergy
  );
}