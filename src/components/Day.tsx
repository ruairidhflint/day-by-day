interface CircleProps {
  date: string;
  today: boolean;
  past: boolean;
  birthday: boolean;
  summary?: string;
  url?: string;
}

const Day = ({ url, date, today, past, summary, birthday }: CircleProps) => {
  const divStyle = {
    background:
      birthday && past
        ? "#60A5FA"
        : url || summary
        ? "#EF4444"
        : past
        ? "#CECECE"
        : "#F4F4F5",
  };

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content={summary ? `${date}: ${summary}` : date}
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
      data-tooltip-content={summary ? `${date}: ${summary}` : date}
      id={today ? "today" : undefined}
      className="day"
      style={divStyle}
    ></div>
  );
};

export default Day;
