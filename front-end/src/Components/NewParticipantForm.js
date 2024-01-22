//dependencies
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

//styling
import "./NewParticipantForm.css";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const API = process.env.REACT_APP_API_URL;

const NewParticipantForm = () => {
  const { id } = useParams();

  const [ newParticipant, setNewParticipant ] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const handleTextChange = (e) => {
    setNewParticipant({...newParticipant, [e.target.id]: e.target.value});
  };

  const addParticipant = () => {
    axios.post(`${API}/raffles/${id}/participants`, newParticipant)
    .then((res) => {
      if(res.data.success){
          // setSuccess("Success! Your new room has been created.")
          // setFormSuccess(true);
          // navigate("/");
          alert('Success')
      }else{
          // setError("Error. Room could not be created.")
          // setFormSuccess(true);
          alert("Error")
      }
    })
    .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addParticipant();
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
              <Button variant="contained" size="large" type="submit">
                Submit
              </Button>
              {/* <Button variant="contained" size="large" onClick={handleReset}>
                Reset
              </Button> */}
            </Stack>
          </div>
        </FormControl>
      </form>
     
    </div>
  );
};

export default NewParticipantForm;