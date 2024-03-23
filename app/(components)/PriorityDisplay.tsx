import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = () => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon icon={faFire} className="text-green-400" /> Low
      <FontAwesomeIcon icon={faFire} className="text-orange-400" /> Medium
      <FontAwesomeIcon icon={faFire} className="text-red-700" /> High
    </div>
  );
};

export default PriorityDisplay;
