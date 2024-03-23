import DeleteBlock from "./DeleteBlock";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div>
      <DeleteBlock />
      <ProgressDisplay />
      <StatusDisplay />
    </div>
  );
};

export default TicketCard;
