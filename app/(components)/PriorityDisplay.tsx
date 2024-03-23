import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = () => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon icon={faFire} className="text-red-400" />
      <FontAwesomeIcon icon={faFire} className="text-orange-400" />
      <FontAwesomeIcon icon={faFire} className="text-green-400" />
      <FontAwesomeIcon icon={faFire} className="text-yellow-400" />
      <FontAwesomeIcon icon={faFire} className="text-red-700" />
    </div>
  );
};

export default PriorityDisplay;
