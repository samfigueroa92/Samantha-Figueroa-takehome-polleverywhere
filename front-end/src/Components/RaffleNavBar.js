//dependencies
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useState } from "react";

//styling
import "./RaffleNavBar.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CreateIcon from '@mui/icons-material/Create';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const API = process.env.REACT_APP_API_URL;

const RaffleNavBar = ({
  showRegistration,
  setShowRegistration,
  showParticipants,
  setShowParticipants,
  showWinner,
  setShowWinner,
  participants
}) => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('Register')

  return (
    <div className="RaffleNavBar">
      
        <Stack spacing={2} direction="row">
          <Button variant="contained" 
          size="large" onClick={() => navigate("/")} sx={{fontWeight:"600", width:"300px",":hover": { color: "orange" }, fontSize: "20px"}}>
            <ConfirmationNumberIcon sx={{ paddingRight: 1 }}/>
            All Raffles
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{fontWeight:"600", width:"300px", fontSize: "20px", ":hover": { color: "orange" }}}
            onClick={() => {
              setShowRegistration(!showRegistration);
              setShowParticipants(false);
              setShowWinner(false);
              setLocation('Register')
            }}
            disabled={location==="Register"}
          >
            <CreateIcon sx={{ paddingRight: 1 }}/>
            Register
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{fontWeight:"600", width:"300px", fontSize: "20px", ":hover": { color: "orange" }}}
            onClick={() => {
              setShowParticipants(!showParticipants);
              setShowWinner(false);
              setShowRegistration(false);
              setLocation("Participant")
            }}
            disabled={location === "Participant"}
          >
            <PeopleIcon sx={{ paddingRight: 1 }}/>
            Participants
          </Button>
          {participants.length === 0 ? null : (<Button
            variant="contained"
            size="large"
            sx={{fontWeight:"600", width:"300px", fontSize: "20px", ":hover": { color: "orange" }}}
            onClick={() => {
              setShowWinner(!showWinner);
              setShowParticipants(false);
              setShowRegistration(false);
              setLocation("Winner")
            }}
            disabled={location === "Winner"}
          >
            <EmojiEventsIcon sx={{ paddingRight: 1 }}/>
            Pick A Winner
          </Button>
        )}
      </Stack>
    </div>
  );
};

export default RaffleNavBar;
