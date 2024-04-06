/**
 * Counts the number of days in between to days
 */
export default function countDaysInBetween(startDate: Date, endDate: Date) {
  const MS_IN_A_DAY = 1000 * 60 * 60 * 24;

  return Math.ceil((endDate.getTime() - startDate.getTime()) / MS_IN_A_DAY);
}
