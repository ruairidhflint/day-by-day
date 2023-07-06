interface CircleProps {
  url: string | null;
  date: string;
  today: boolean;
  past: boolean;
  summary: string | null;
}

const Day = ({ url, date, today, past, summary }: CircleProps) => {
  const divStyle = {
    background: url || summary ? "#EF4444" : past ? "#A1A1AA" : "#E4E4E7",
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
          className="day"
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
      className="day"
      style={divStyle}
    ></div>
  );
};

export default Day;
