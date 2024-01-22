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
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/raffles/${id}`)
      .then((res) => setRaffle(res.data.payload))
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(`${API}/raffles/${id}/participants`)
      .then((res) => setParticipants(res.data.payload));
  }, [id]);

  const renderContent = () => {
    if (showParticipants) {
      return <ParticipantsList participants={participants} />;
    } else if (showWinner) {
      return <WinnerForm raffle={raffle} participants={participants} />;
    } else{
      return <NewParticipantForm />;
    }
  };

  return (
    <div className="RafflePage">
      <RaffleNavBar
      participants={participants}
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
