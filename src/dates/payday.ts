import getHolidays, { Holidays } from "./getHolidays";

/**
 * Checks if a day of the week is a business day.
 */
function isBusinessDay(date: Date, holidays: Holidays) {
  return date.getDay() !== 0 && !holidays.has(date.toLocaleDateString());
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

    // Days of week are zero-indexed. Sundays
    // and holidays are not business days.
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
  let currentYear = startDate.getFullYear();
  let currentYearHolidays = getHolidays(currentYear);

  let nextFifth = getFifthBusinessDayOfMonth(
    currentYear,
    currentMonth,
    currentYearHolidays
  );

  // We are already past this month's fifth business day, go to the next month.
  if (startDayOfMonth > nextFifth) {
    currentMonth++;
  } else {
    return new Date(currentYear, currentMonth, nextFifth);
  }

  // Loop back to the next year
  if (currentMonth > 11) {
    currentYear++;
    currentMonth = 0;
    currentYearHolidays = getHolidays(currentYear);
  }

  return new Date(
    currentYear,
    currentMonth,
    getFifthBusinessDayOfMonth(currentYear, currentMonth, currentYearHolidays)
  );
}
