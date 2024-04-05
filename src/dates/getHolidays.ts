/**
 * Pascal full moon dates
 * @see {@link https://en.wikipedia.org/wiki/Paschal_full_moon Paschal full moon}
 */
function getPascalFullMoonDates() {
  return [
    [3, 14],
    [3, 3],
    [2, 23],
    [3, 11],
    [2, 31],
    [3, 18],
    [3, 8],
    [2, 28],
    [3, 16],
    [3, 5],
    [2, 25],
    [3, 13],
    [3, 2],
    [2, 22],
    [3, 10],
    [2, 30],
    [3, 17],
    [3, 7],
    [2, 27],
  ];
}

/**
 * Calculates moveable holidays based on Easter
 * @see {@link https://en.wikipedia.org/wiki/Computus Date of Easter}
 */
export function getEasterHolidays(year: number) {
  const pascalFullMoonMonthDay = getPascalFullMoonDates();
  const [refMonth, refDay] = pascalFullMoonMonthDay[year % 19];
  const movingDate = new Date(year, refMonth, refDay);

  // Easter
  movingDate.setDate(movingDate.getDate() + 7 - movingDate.getDay());
  const easter = new Date(movingDate);

  // Good Friday
  movingDate.setDate(movingDate.getDate() - 2);
  const goodFriday = new Date(movingDate);

  // Carnival
  movingDate.setDate(movingDate.getDate() - 45);
  const carnival = new Date(movingDate);

  // Corpus Christi
  movingDate.setDate(movingDate.getDate() + 107);
  const corpusChristi = new Date(movingDate);

  return [easter, goodFriday, carnival, corpusChristi];
}

/**
 * Brasil public holidays
 * @see {@link https://en.wikipedia.org/wiki/Public_holidays_in_Brazil Public holidays in Brazil}
 */
export function getNationalHolidays(year: number) {
  const fixedHolidays = [
    [1, 1], // Confraternização mundial
    [4, 21], // Tiradentes
    [5, 1], // Dia do trabalho
    [9, 7], // Independência do Brasil
    [10, 12], // Nossa Senhora Aparecida
    [11, 2], // Finados
    [11, 15], // Proclamação da República
    [12, 25], // Natal
  ];
  return fixedHolidays.map(([month, day]) => new Date(year, month, day));
}

export type Holidays = Set<number>;

export default function getHolidays(year: number) {
  const easterHolidays = getEasterHolidays(year);
  const nationalHolidays = getNationalHolidays(year);
  const holidays = [...easterHolidays, ...nationalHolidays];
  return new Set(holidays.map((date) => date.getTime()));
}
