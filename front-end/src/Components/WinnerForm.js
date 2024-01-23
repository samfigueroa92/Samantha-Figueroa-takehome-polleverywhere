//dependencies
import { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

//components
import Winner from "./Winner";

//styling
import "./WinnerForm.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const API = process.env.REACT_APP_API_URL;

const WinnerForm = ({ raffle, participants }) => {
  const [winner, setWinner] = useState(null);
  const [tokenInput, setTokenInput] = useState("");
  const [editedRaffle, setEditedRaffle] = useState({
    name: raffle.name,
    secret_token: raffle.secret_token,
    creation_date: raffle.creation_date,
    raffled_date: raffle.raffled_date,
    winner_id: null
  });
  
  
  useEffect(() => {
    if(winner){
      updateRaffle();
      console.log(winner)
    }
    
    // else{
    //   axios.get(`${API}/raffles/${raffle.id}`)
    // .then(res => setWinner(res.data.payload))

    // }
  
  }, [winner]);

  const handleChange = (e) => {
    setTokenInput(e.target.value);
  };
  // console.log(raffle)
  const updateRaffle = () => {
    // console.log(editedRaffle);
    axios
      .put(`${API}/raffles/${raffle.id}`, editedRaffle)
      .then((res) => setEditedRaffle(res.data))
      .catch((error) => console.error(error));
      // .then(() => alert("Success"))
  };

  const getWinner = () => {
    if (raffle.secret_token === tokenInput) {
      const randomWinner =
        participants[Math.floor(Math.random() * participants.length)];

      setWinner(randomWinner);
      console.log(winner)

      setEditedRaffle({ ...editedRaffle, winner_id: randomWinner.id });
    }
  };

  // const foundParticipant = participants.find(participant => participant.id === editedRaffle.winner_id);

  const handleSubmit = (e) => {
    e.preventDefault();
    getWinner();
  };
  console.log(winner)

  const renderContent = () => {
    if (winner) {
      return <Winner winner={winner} />;
    } else {
      return (
        <>
          <h1>Pick a Winner</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              id="name"
              label="Secret Token"
              variant="outlined"
              value={tokenInput}
              placeholder="Secret Token"
              onChange={handleChange}
              required
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ margin: "20px", width: "50vw" }}
            >
              Submit
            </Button>
          </form>
          <div className="WinnerForm-secretToken">
            <h3>Secret Token</h3>
            <p>
              The secret token used when creating the raffle must be provided.
            </p>
          </div>
        </>
      );
    }
  };

  return <div className="WinnerForm">{renderContent()}</div>;
};

export default WinnerForm;
