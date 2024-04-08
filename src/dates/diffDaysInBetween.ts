import { DateTime } from "luxon";

/**
 * Calculates the difference in days between two dates.
 */
export default function diffDaysInBetween(
  startDate: DateTime,
  endDate: DateTime
) {
  const diff = startDate.diff(endDate, "days");
  return Math.ceil(diff.days);
}
