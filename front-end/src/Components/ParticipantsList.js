//dependencies
// import axios from "axios";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import SingleParticipant from "./SingleParticipant";

//styling
import "./ParticipantsList.css";
import TextField from "@mui/material/TextField";
import ErrorIcon from '@mui/icons-material/Error';

// const API = process.env.REACT_APP_API_URL;

const ParticipantsList = ({ participants }) => {
  // const { id } = useParams();
  // const [participants, setParticipants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(`${API}/raffles/${id}/participants`)
  //     .then((res) => setParticipants(res.data.payload));
  // }, [id]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  let participantsToDisplay = participants;

  if (searchInput) {
    participantsToDisplay = participants.filter((participant) => {
      const { first_name, last_name } = participant;
      const fullName = `${first_name} ${last_name}`.toLowerCase();

      return fullName.includes(searchInput.toLowerCase());
    });
  }

  return (
    <div className="ParticipantsList">
      <h2>Participants: {participants.length > 0 ? participants.length : (<div>No Participants</div>)}</h2>
      <form>
        <TextField
          id="search-bar"
          className="text"
          onChange={handleChange}
          variant="outlined"
          placeholder="Search..."
          fullWidth
        ></TextField>
      </form>
      <div className="ParticipantsList-map">
        {participantsToDisplay.length === 0 ? (<div className="ParticipantsList-noResults"><ErrorIcon fontSize="large" /> {`No results found for: ${searchInput}`}</div>) : participantsToDisplay.map((participant) => (
          <SingleParticipant participant={participant} key={participant.id} />
        ))}
      </div>
    </div>
  );
};

export default ParticipantsList;
