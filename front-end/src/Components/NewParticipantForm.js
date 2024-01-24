//dependencies
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//styling
import "./NewParticipantForm.css";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { toast } from "react-toastify";
import SendIcon from '@mui/icons-material/Send';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const API = process.env.REACT_APP_API_URL;

const NewParticipantForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [newParticipant, setNewParticipant] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const handleTextChange = (e) => {
    setNewParticipant({ ...newParticipant, [e.target.id]: e.target.value });
  };

  const addParticipant = () => {
    axios
      .post(`${API}/raffles/${id}/participants`, newParticipant)
      .then((res) => {
        if (res.data.success) {
          toast.success("Success! Participant registered.", {
            theme: "colored",
          });
          navigate("/")
          
        } else {
          toast.error("Error. Participant could not be registered.", {
            theme: "colored",
          });
          
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addParticipant();
  };

  const handleReset = () => {
    setNewParticipant({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="NewParticipantForm">
      <h2>Register to participate in the raffle:</h2>
      <form id="participant-form" onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              id="first_name"
              value={newParticipant.first_name}
              label="First Name"
              variant="outlined"
              onChange={handleTextChange}
              fullWidth
              required
            ></TextField>
            <TextField
              id="last_name"
              value={newParticipant.last_name}
              onChange={handleTextChange}
              label="Last Name"
              variant="outlined"
              required
              fullWidth
            ></TextField>
          </Stack>
          <TextField
            id="email"
            value={newParticipant.email}
            onChange={handleTextChange}
            label="Email"
            variant="outlined"
            required
            fullWidth
            sx={{ marginBottom: 2 }}
          ></TextField>
          <TextField
            id="phone"
            value={newParticipant.phone}
            onChange={handleTextChange}
            label="Phone"
            variant="outlined"
            fullWidth
            margin="normal"
          ></TextField>
          <div className="NewParticipantForm-buttons">
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <Button variant="contained" size="large" type="submit" sx={{ fontWeight:"600", width:"300px", fontSize: "20px", ":hover": { color: "orange" }}}>
                <SendIcon sx={{paddingRight: 1}}/>
                Submit
              </Button>
              <Button type="button" sx={{ fontWeight:"600", width:"300px", fontSize: "20px",":hover": { color: "orange" }}} onClick={handleReset} variant="contained" size="large">
                <RestartAltIcon sx={{paddingRight: 1}}/>
                Reset
              </Button>
            </Stack>
          </div>
        </FormControl>
      </form>
    </div>
  );
};

export default NewParticipantForm;
