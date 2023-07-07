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
      (birthday || url || summary) && past
        ? "#262626"
        : today
        ? "#FB923C"
        : past
        ? "#bfbfbf"
        : "#F4F4F5",
    borderRadius: (birthday || url || summary) && past ? "0px" : "50%",
  };

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div
          data-tooltip-id="tooltip"
          data-tooltip-html={
            today
              ? `${date}: Today!`
              : summary
              ? `${date}: <br /> ${summary}`
              : date
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
      data-tooltip-id="tooltip"
      data-tooltip-html={
        today
          ? `${date}: Today!`
          : summary
          ? `${date}: <br /> ${summary}`
          : date
      }
      id={today ? "today" : undefined}
      className="day"
      style={divStyle}
    ></div>
  );
};

export default Day;
