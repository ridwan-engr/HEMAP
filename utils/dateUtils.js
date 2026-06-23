export function formatDate(
  date
) {

  return new Date(
    date
  ).toISOString();

}

export function getDaysBetween(
  startDate,
  endDate
) {

  const difference =
    new Date(endDate) -
    new Date(startDate);

  return Math.floor(
    difference /
    (1000 * 60 * 60 * 24)
  );

}

export function getHoursBetween(
  startDate,
  endDate
) {

  const difference =
    new Date(endDate) -
    new Date(startDate);

  return difference /
    (1000 * 60 * 60);

}

export function getMinutesBetween(
  startDate,
  endDate
) {

  const difference =
    new Date(endDate) -
    new Date(startDate);

  return difference /
    (1000 * 60);

}