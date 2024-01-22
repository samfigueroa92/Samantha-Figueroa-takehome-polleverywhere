//dependencies
import { useState } from "react";
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
  const [winner, setWinner] = useState(false);
  const [tokenInput, setTokenInput] = useState("");
  const [editedRaffle, setEditedRaffle] = useState({
    name: raffle.name,
    secret_token: raffle.secret_token,
    creation_date: raffle.creation_date,
    raffled_date: raffle.raffled_date,
    winner_id: null,
  });
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setTokenInput(e.target.value);
  };
  // console.log(raffle)
  const updateRaffle = () => {
    console.log(editedRaffle);
    axios
      .put(`${API}/raffles/${raffle.id}`, editedRaffle)
      .then((res) => setEditedRaffle(res.data))
      .then(() => alert("Success"))
      .catch((error) => console.error(error));
  };

  const getWinner = () => {
    if (raffle.secret_token === tokenInput) {
      const winner =
        participants[Math.floor(Math.random() * participants.length)];

      setWinner(winner);

      const { winner_id } = editedRaffle;

      // const updatedRaffle = {...editedRaffle}
      // updatedRaffle.winner_id = winner.id;
      setEditedRaffle({ ...editedRaffle, winner_id: winner.id });

      // console.log(updatedRaffle)
      // console.log(winner.id)
      // console.log(editedRaffle)

      // updateRaffle(raffle.id);
    }
  };
  console.log(editedRaffle);

  const handleSubmit = (e) => {
    e.preventDefault();
    getWinner();
    updateRaffle();
  };

  const renderContent = () => {
    if (winner) {
      return <Winner winner={winner} />;
    } else {
      return (
        <>
          <h1>Pick a Winner</h1>
          <form>
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
              Pick a winner
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

// {winner ? (
//   <Winner winner={winner} />
// ) : (
//   <>
//     <div>Pick a Winner</div>
//     <form onSubmit={handleSubmit}>
//     <div>
//       <input
//         type="text"
//         value={tokenInput}
//         placeholder="Secret Token"
//         onChange={handleChange}
//       />
//       <button type="submit" >Pick a winner</button>
//     </div>
//     <div>
//       <h3>Secret Token</h3>
//       <p>
//         The secret token used when creating the raffle must be provided.
//       </p>
//     </div>

//     </form>
//   </>
// )}
