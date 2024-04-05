import getHolidays, { Holidays } from "./getHolidays";

/**
 * Checks if a day of the week is a business day.
 */
function isBusinessDay(date: Date, holidays: Holidays) {
  return date.getDay() !== 0 && !holidays.has(date.getTime());
}

/**
 * Calculates the fifth business day of a month.
 */
export function getFifthBusinessDayOfMonth(
  year: number,
  month: number,
  holidays: Holidays
) {
  const currentDate = new Date(year, month);
  let currentDayOfMonth = currentDate.getDate();
  let businessDays = isBusinessDay(currentDate, holidays) ? 1 : 0;

  while (businessDays < 5) {
    // Days of week are zero-indexed. The first
    // day is not a business days.
    if (isBusinessDay(currentDate, holidays)) {
      businessDays++;
    }

    currentDayOfMonth++;
    currentDate.setDate(currentDayOfMonth);
  }

  return currentDayOfMonth;
}

/**
 * Calculates the closest fifth business day of a date.
 */
export function getNextFifthBusinessDay(startDate: Date) {
  const startDayOfMonth = startDate.getDate();

  let currentMonth = startDate.getMonth();
  let currentDayOfMonth = startDayOfMonth;
  let currentYear = startDate.getFullYear();

  // Since we are calculating the fifth business day, we know there can be at
  // most one non-business days in between, adding up to at most six normal
  // days. If we are past the sitxh day, we can infer the next clostest
  // fifth business day is going to be at the next month.
  if (currentDayOfMonth > 6) {
    currentMonth++;
    currentDayOfMonth = 1;
  }

  // We are already past this month's fifth business
  // days. Move to the next month.
  if (currentDayOfMonth > startDayOfMonth) {
    currentDayOfMonth++;
    currentDayOfMonth = 1;
  }

  // Loop back to the next year
  if (currentMonth > 11) {
    currentYear -= 11;
    currentMonth = 1;
  }

  const currentYearHolidays = getHolidays(currentYear);
  return new Date(
    currentYear,
    currentMonth,
    getFifthBusinessDayOfMonth(currentYear, currentMonth, currentYearHolidays)
  );
}
