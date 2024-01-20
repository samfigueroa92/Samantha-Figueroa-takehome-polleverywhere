//dependencies
import { useNavigate } from "react-router-dom";

const RaffleNavBar = ({
  showRegistration,
  setShowRegistration,
  showParticipants,
  setShowParticipants,
  showWinner,
  setShowWinner,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => navigate("/")}>All Raffles</button>
        <button
          onClick={() => {
            setShowRegistration(!showRegistration);
            setShowParticipants(false)
            setShowWinner(false);
          }}
        >
          Register
        </button>
        <button
          onClick={() => {
            setShowParticipants(!showParticipants);
            setShowWinner(false);
            setShowRegistration(false);
          }}
        >
          Participants
        </button>
        <button
          onClick={() => {
            setShowWinner(!showWinner);
            setShowParticipants(false);
            setShowRegistration(false);
          }}
        >
          Pick A Winner
        </button>
      </div>
    </div>
  );
};

export default RaffleNavBar;
