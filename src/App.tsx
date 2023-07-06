import { useEffect, useRef } from "react";
import { Tooltip } from "react-tooltip";
import "./App.css";
import { addDays, isLeapYear, format, isPast, isToday } from "date-fns";
import { days } from "./days";

interface CircleProps {
  url: string | null;
  date: string;
  today: boolean;
  past: boolean;
  summary: string | null;
}

function Circle({ url, date, today, past, summary }: CircleProps) {
  const divStyle = {
    width: "11px",
    height: "11px",
    background: url || summary ? "#EF4444" : past ? "#A1A1AA" : "#E4E4E7",
    MozBorderRadius: "50px",
    WebkitBorderRadius: "50px",
    borderRadius: "50px",
  };

  const reversedDate: string = date.split("-").reverse().join("-");

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content={
            summary ? `${reversedDate}: ${summary}` : reversedDate
          }
          id={today ? "today" : undefined}
          style={divStyle}
        ></div>
      </a>
    );
  }

  return (
    <div
      data-tooltip-id="my-tooltip"
      data-tooltip-content={
        summary ? `${reversedDate}: ${summary}` : reversedDate
      }
      id={today ? "today" : undefined}
      style={divStyle}
    ></div>
  );
}

function App() {
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
      const url: string | null =
        dateString in days ? days[dateString].url : null;
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

  // Usage
  const result = generateDateArray();

  console.log(result);

  const dotContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentDot = dotContainerRef.current?.querySelector("#today");
    if (currentDot) {
      currentDot.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return (
    <>
      <div className="circle-grid" ref={dotContainerRef}>
        {result.map((day) => {
          return (
            <Circle
              date={day.date}
              past={day.past}
              url={day.url}
              today={day.today}
              summary={day.summary}
            />
          );
        })}
      </div>
      <Tooltip id="my-tooltip" />
    </>
  );
}

export default App;
