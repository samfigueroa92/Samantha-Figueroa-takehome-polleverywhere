//dependencies
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTokenInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (raffle.secret_token === tokenInput) {
      const randomWinner =
        participants[Math.floor(Math.random() * participants.length)];

      const makeACopyWinner = { ...editedRaffle, winner_id: randomWinner.id };

      axios
        .put(`${API}/raffles/${raffle.id}`, makeACopyWinner)
        .then((res) => {
          setEditedRaffle(res.data.payload);
          console.log(res)
          if (res.data.success) {
                toast.success("Success! We have a winner!", {
                  theme: "colored",
                });
                navigate("/")
              } else {
                toast.error("Error. Raffle could not be created.", {
                  theme: "colored",
                });
              }
        })
        .catch((error) => console.error(error));
    }
  };

  const checkWinner = async () => {
    axios
      .get(`${API}/raffles/get-winner-by-id/${raffle.id}`)
      .then((res) => {
        let foundWinner = res.data.payload;

        foundWinner = participants.find(
          (user) => user.id === foundWinner.winner_id
        );

        setWinner(foundWinner);
        
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    checkWinner();
  }, []);

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
