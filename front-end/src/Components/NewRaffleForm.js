//dependencies
import axios from "axios";
import { useState } from "react";

//styling
import "./NewRaffleForm.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_URL;

const NewRaffleForm = () => {

  const [newRaffle, setNewRaffle] = useState({
    name: "",
    secret_token: "",
  });

  const addRaffle = () => {
    axios
      .post(`${API_URL}/raffles`, newRaffle)
      .then((res) => {
        if (res.data.success) {
          toast.success("Success! Your raffle was created.", {
            theme: "colored",
          });
          
        } else {
          toast.error("Error. Raffle could not be created.", {
            theme: "colored",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleTextChange = (e) => {
    setNewRaffle({ ...newRaffle, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRaffle();
  };

  return (
    <div className="NewRaffleForm">
      <h3>Start your raffle today!</h3>
      <div className="NewRaffleForm-content">
        <form onSubmit={handleSubmit}>
          <div className="NewRaffleForm-fields">
            <TextField
              id="name"
              label="Raffle Name"
              variant="outlined"
              onChange={handleTextChange}
              value={newRaffle.name}
              required
              fullWidth
            />
            <TextField
              id="secret_token"
              label="Raffle Secret Token"
              variant="outlined"
              onChange={handleTextChange}
              value={newRaffle.secret_token}
              required
              fullWidth
            />
          </div>
          <div className="NewRaffleForm-content-text">
            You must remember the Raffle Token because it will be asked when
            picking a winner.
          </div>
          <div className="NewRaffleForm-content-button">
            <Button type="submit" variant="contained">
              Create new raffle
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewRaffleForm;
