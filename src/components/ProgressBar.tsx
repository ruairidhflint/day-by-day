import { calculateElapsedPercentage } from "../utils/calculatePercentage";

const ProgressBar = () => {
  const percentage = calculateElapsedPercentage();
  return (
    <div className="progress">
      <div className="bar"></div>
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      <h2>Life {percentage}% complete</h2>
    </div>
  );
};

export default ProgressBar;
