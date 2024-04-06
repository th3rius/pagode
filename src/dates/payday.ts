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
    currentDayOfMonth++;
    currentDate.setDate(currentDayOfMonth);

    // Days of week are zero-indexed. The first
    // day is not a business days.
    if (isBusinessDay(currentDate, holidays)) {
      businessDays++;
    }
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
  let currentYearHolidays = getHolidays(currentYear);

  let nextFifth = getFifthBusinessDayOfMonth(
    currentYear,
    currentMonth,
    currentYearHolidays
  );

  // Since we are calculating the fifth business day, we know there can be at
  // most one non-business days in between, adding up to at most six normal
  // days. If we are past the sitxh day, we can infer the next clostest
  // fifth business day is going to be at the next month.
  if (currentDayOfMonth > 6 || startDayOfMonth > nextFifth) {
    currentMonth++;
    currentDayOfMonth = 1;
  } else {
    return new Date(currentYear, currentMonth, nextFifth);
  }

  // Loop back to the next year
  if (currentMonth > 11) {
    currentYear++;
    currentMonth = 0;
    currentDayOfMonth = 1;
    currentYearHolidays = getHolidays(currentYear);
  }

  return new Date(
    currentYear,
    currentMonth,
    getFifthBusinessDayOfMonth(currentYear, currentMonth, currentYearHolidays)
  );
}
