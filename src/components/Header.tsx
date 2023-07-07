import ProgressBar from "./ProgressBar";

const Header = ({ scrollToToday }: { scrollToToday: () => void }) => {
  return (
    <header className="header">
      <h1>Day by Day</h1>
      <p>
        Following is a representation of my life, day by day, assuming I live to
        85 years old. This project was inspired by Buster Benson's{" "}
        <a href="https://busterbenson.com/life-in-weeks" target="_blank">
          Life in Weeks
        </a>{" "}
        and a{" "}
        <a
          href="https://waitbutwhy.com/2014/05/life-weeks.html"
          target="_blank"
        >
          blog post
        </a>{" "}
        by Tim Urban. Important life events are highlighted, and some include
        links for further reading.{" "}
        <button onClick={scrollToToday}>Click here</button> to scroll to today.
      </p>
      <ProgressBar />
    </header>
  );
};
export default Header;
