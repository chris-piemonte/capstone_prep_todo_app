export const YEARS: number[] = [
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
  2021,
  2022,
  2023,
  2024,
  2025,
  2026,
];

export const MONTHS: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const DAYS: string[] = [];
for (let i = 1; i <= 31; i += 1) {
  let val = String(i);
  if (i < 10) {
    val = '0' + String(i)
  }
  DAYS.push(val);
}
