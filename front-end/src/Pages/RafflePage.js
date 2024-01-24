//dependencies
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//components
import RaffleNavBar from "../Components/RaffleNavBar";
import NewParticipantForm from "../Components/NewParticipantForm";
import ParticipantsList from "../Components/ParticipantsList";
import WinnerForm from "../Components/WinnerForm";
import Loading from "../Components/Loading";

//styling
import "./RafflePage.css";
import { toast } from 'react-toastify'

const API = process.env.REACT_APP_API_URL;

const RafflePage = ({ loading, setLoading }) => {
  const { id } = useParams();
  const [raffle, setRaffle] = useState({});
  const [showRegistration, setShowRegistration] = useState(true);
  const [showParticipants, setShowParticipants] = useState(false);
  const [showWinner, setShowWinner] = useState(false);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    try{
      setLoading(true);
      axios
      .get(`${API}/raffles/${id}`)
      .then((res) => {
        setRaffle(res.data.payload);
        if(res.data.success){
          setLoading(false);
        }
      })
      .catch((err) => console.error(err));

    }catch(err){
      toast.error("Error");
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    try{
      setLoading(true);

      axios
      .get(`${API}/raffles/${id}/participants`)
      .then((res) => {
        setParticipants(res.data.payload);
        if(res.data.success){
          setLoading(false);
        }
      }).catch(err => console.error(err));

    }catch(err){
      toast.error("Error");
      setLoading(false);
    }
  }, [id]);

  const renderContent = () => {
    if (loading){
      return <Loading />
    } else if (showParticipants) {
      return <ParticipantsList participants={participants} loading={loading} />;
    } else if (showWinner) {
      return <WinnerForm raffle={raffle} participants={participants} loading={loading} setLoading={setLoading}  />;
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
