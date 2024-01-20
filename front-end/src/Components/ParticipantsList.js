//total amount
//search bar
//list of all participants

//dependencies
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleParticipant from "./SingleParticipant";

const API = process.env.REACT_APP_API_URL;

const ParticipantsList = () => {
    const { id } = useParams();
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        axios.get(`${API}/raffles/${id}/participants`)
        .then(res => setParticipants(res.data.payload))
    }, [id]);

    return (
        <div className="ParticipantsList">
            <div>Participants: {participants.length}</div>
            <div>
                <input type="search" placeholder="Search" />
            </div>
            <div>
                {participants.map(participant => <SingleParticipant participant={participant} key={participant.id} />)}
            </div>

        </div>
    );
};

export default ParticipantsList;