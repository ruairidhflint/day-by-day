import { useEffect, useRef } from "react";
import { Tooltip } from "react-tooltip";
import "./App.css";
import { addDays, isLeapYear, format, isPast, isToday } from "date-fns";
import { days } from "./days";

function Circle({ url, date, today, past }: any) {
  const divStyle = {
    width: "12px",
    height: "12px",
    background: url ? "orange" : past ? "darkgray" : "lightgray",
    MozBorderRadius: "50px",
    WebkitBorderRadius: "50px",
    borderRadius: "50px",
  };

  if (url) {
    return (
      <a href={url as string} target="_blank" rel="noopener noreferrer">
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content={date as string}
          id={today ? "today" : undefined}
          style={divStyle}
        ></div>
      </a>
    );
  }

  return (
    <div
      data-tooltip-id="my-tooltip"
      data-tooltip-content={date as string}
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
      const url: string | null = dateString in days ? days[dateString] : null;

      dateArray.push({ date: dateString, url, past, today });

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
            />
          );
        })}
      </div>
      <Tooltip id="my-tooltip" />
    </>
  );
}

export default App;
