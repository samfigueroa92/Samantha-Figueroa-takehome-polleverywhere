//dependencies
import { useNavigate } from "react-router-dom";

//styling
import "./RaffleNavBar.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

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
    <div className="RaffleNavBar">
      
        <Stack spacing={2} direction="row">
          <Button variant="contained" 
          size="large" onClick={() => navigate("/")}>
            All Raffles
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              setShowRegistration(!showRegistration);
              setShowParticipants(false);
              setShowWinner(false);
            }}
          >
            Register
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              setShowParticipants(!showParticipants);
              setShowWinner(false);
              setShowRegistration(false);
            }}
          >
            Participants
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              setShowWinner(!showWinner);
              setShowParticipants(false);
              setShowRegistration(false);
            }}
          >
            Pick A Winner
          </Button>
        </Stack>
    </div>
  );
};

export default RaffleNavBar;
