import { useEffect, useRef } from "react";
import { Tooltip } from "react-tooltip";
import "./App.css";
import Day from "./components/Day";
import { generateDateArray } from "./utils/generateDays";
import Header from "./components/Header";

function App() {
  const days = generateDateArray();

  const dotContainerRef = useRef<HTMLDivElement>(null);

  const scrollToToday = () => {
    const currentDot = dotContainerRef.current?.querySelector("#today");
    if (currentDot) {
      currentDot.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <Header scrollToToday={scrollToToday} />
      <div className="day-grid" ref={dotContainerRef}>
        {days.map((day) => {
          return (
            <Day
              date={day.date}
              past={day.past}
              url={day.url}
              today={day.today}
              summary={day.summary}
              birthday={day.birthday}
            />
          );
        })}
      </div>
      <Tooltip id="my-tooltip" />
    </>
  );
}

export default App;
