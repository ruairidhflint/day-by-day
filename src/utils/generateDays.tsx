import { addDays, format, isLeapYear, isPast, isToday } from "date-fns";
import { days } from "../days";

interface DateObject {
  date: string;
  url: string | null;
  past: boolean;
  today: boolean;
  summary: string | null;
}

function generateDateArray(): DateObject[] {
  const startDate = new Date("1991-02-27");
  const endDate = addDays(startDate, 85 * 365); // Add 85 years worth of days

  const dateArray: DateObject[] = [];

  let currentDate = startDate;
  while (currentDate <= endDate) {
    const dateString = format(currentDate, "yyyy-MM-dd");
    const past = isPast(currentDate);
    const today = isToday(currentDate);
    const url: string | null = dateString in days ? days[dateString].url : null;
    const summary: string | null =
      dateString in days ? days[dateString].summary : null;

    dateArray.push({ date: dateString, url, past, today, summary });

    currentDate = addDays(currentDate, 1); // Move to the next day
    if (isLeapYear(currentDate)) {
      currentDate = addDays(currentDate, 1); // If it's a leap year, add an extra day
    }
  }

  return dateArray;
}

export { generateDateArray };
