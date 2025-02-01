import getHolidays, { Holidays } from "./getHolidays";
import { DateTime } from "luxon";

/**
 * Checks if a day of the week is a business day.
 */
function isBusinessDay(date: DateTime, holidays: Holidays) {
  return date.weekday !== 7 && !holidays.has(date.toLocaleString());
}

/**
 * Calculates the fifth business day of a month.
 */
function getFifthBusinessDayOfMonth(
  year: number,
  month: number,
  holidays: Holidays,
) {
  let currentDate = DateTime.local(year, month);
  let businessDays = isBusinessDay(currentDate, holidays) ? 1 : 0;

  while (businessDays < 5) {
    currentDate = currentDate.plus({ day: 1 });

    // Days of week are zero-indexed. Sundays
    // and holidays are not business days.
    if (isBusinessDay(currentDate, holidays)) {
      businessDays++;
    }
  }

  return currentDate.day;
}

/**
 * Calculates the closest fifth business day of a date.
 */
export default function nextFifthBusinessDay(startDate: DateTime) {
  const startDayOfMonth = startDate.day;

  let currentMonth = startDate.month;
  let currentYear = startDate.year;
  let currentYearHolidays = getHolidays(currentYear);

  let nextFifth = getFifthBusinessDayOfMonth(
    currentYear,
    currentMonth,
    currentYearHolidays,
  );

  // We are already past this month's fifth business day, go to the next month.
  if (startDayOfMonth > nextFifth) {
    currentMonth++;
  } else {
    return DateTime.local(currentYear, currentMonth, nextFifth);
  }

  // Loop back to the next year
  if (currentMonth > 12) {
    currentYear++;
    currentMonth = 1;
    currentYearHolidays = getHolidays(currentYear);
  }

  return DateTime.local(
    currentYear,
    currentMonth,
    getFifthBusinessDayOfMonth(currentYear, currentMonth, currentYearHolidays),
  );
}
