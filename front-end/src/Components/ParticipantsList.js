//dependencies
import { useState } from "react";
import SingleParticipant from "./SingleParticipant";

//styling
import "./ParticipantsList.css";
import TextField from "@mui/material/TextField";
import ErrorIcon from '@mui/icons-material/Error';

const ParticipantsList = ({ participants }) => {
  const [searchInput, setSearchInput] = useState("");

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

  const renderContent = () => {
    if(participants.length === 0){
      return (
        <div className="noParticipants">No Registered Participants Yet</div>
      )

    } else{
      return participantsToDisplay.length === 0 ? (<div className="ParticipantsList-noResults"><ErrorIcon fontSize="large" /> {`No results found for: ${searchInput}`}</div>) : participantsToDisplay.map((participant, index) => (
        <SingleParticipant participant={participant} key={participant.id} index={index}/>
      ))
    }
 };

  return (
    <div className="ParticipantsList">
      {!!participants.length && 
      <div className="ParticipantsList-existing">
      <h2>Participants: { participants.length }</h2>
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
      </div>}
      <div className="ParticipantsList-map">
        {renderContent()}
      </div>
    </div>
  );
};

export default ParticipantsList;
