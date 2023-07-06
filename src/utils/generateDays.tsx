import { addDays, format, isPast, isToday } from "date-fns";
import { days } from "../days";

interface DayObject {
  date: string;
  past: boolean;
  today: boolean;
  birthday: boolean;
  url?: string;
  summary?: string;
}

function generateDateArray(): DayObject[] {
  const startDate = new Date("1991-02-27");
  const endDate = addDays(startDate, 85 * 365); // Add 85 years worth of days

  const dateArray: DayObject[] = [];

  let currentDate = startDate;
  while (currentDate <= endDate) {
    const humanReadableDate = format(new Date(currentDate), "do MMMM yyyy");
    const dateString = format(currentDate, "yyyy-MM-dd");
    const past = isPast(currentDate);
    const today = isToday(currentDate);
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const birthday = day === 27 && month === 2;

    const url: string | undefined =
      dateString in days ? days[dateString].url : undefined;
    const summary: string | undefined =
      dateString in days ? days[dateString].summary : undefined;

    dateArray.push({
      date: humanReadableDate,
      url,
      past,
      today,
      summary,
      birthday,
    });

    currentDate = addDays(currentDate, 1); // Move to the next day
  }

  return dateArray;
}

export { generateDateArray };
