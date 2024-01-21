//dependencies
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//components
import RaffleNavBar from "../Components/RaffleNavBar";
import NewParticipantForm from "../Components/NewParticipantForm";
import ParticipantsList from "../Components/ParticipantsList";
import WinnerForm from "../Components/WinnerForm";

//styling
import "./RafflePage.css";

const API = process.env.REACT_APP_API_URL;

const RafflePage = () => {
  const { id } = useParams();
  const [raffle, setRaffle] = useState({});
  const [showRegistration, setShowRegistration] = useState(true);
  const [showParticipants, setShowParticipants] = useState(false);
  const [showWinner, setShowWinner] = useState(false);

  useEffect(() => {
    axios
      .get(`${API}/raffles/${id}`)
      .then((res) => setRaffle(res.data.payload))
      .catch((err) => console.error(err));
  }, [id]);

  const renderContent = () => {
    if (showParticipants) {
      return <ParticipantsList />;
    } else if (showWinner) {
      return <WinnerForm />;
    } else{
      return <NewParticipantForm />;
    }
  };

  return (
    <div className="RafflePage">
      <RaffleNavBar
        showRegistration={showRegistration}
        setShowRegistration={setShowRegistration}
        showParticipants={showParticipants}
        setShowParticipants={setShowParticipants}
        showWinner={showWinner}
        setShowWinner={setShowWinner}
      />
      <h1>{raffle.name}</h1>
      {renderContent()}
    </div>
  );
};

export default RafflePage;
