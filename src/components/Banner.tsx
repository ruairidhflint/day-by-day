import { useState, useEffect } from "react";

function Banner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !localStorage.getItem("dismissedIosBanner")
    ) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("dismissedIosBanner", "true");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="banner">
      <div className="banner-spacer"></div>
      <a
        href="https://www.day-by-day.life/"
        target="_blank"
        rel="noopener noreferrer"
        className="banner-link"
      >
        <span>Now available for all!</span>
        <span className="banner-download">Try it out!</span>
      </a>
      <div className="banner-dismiss">
        <button
          onClick={handleDismiss}
          className="banner-dismiss-button"
          aria-label="Dismiss banner"
        >
          <svg
            className="banner-dismiss-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Banner;
