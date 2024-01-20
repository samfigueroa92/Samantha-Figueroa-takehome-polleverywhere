const express = require('express');
const participants = express.Router({ mergeParams: true });

const {
    getAllParticipants,
    getParticipant,
    createParticipant,
} = require('../queries/participants');

participants.get('/', async (req, res) => {
    const { id } = req.params;

    const allParticipants = await getAllParticipants(id);

    if(allParticipants[0]){
        res.status(200).json({ payload: allParticipants, success: true });
    }else{
        res.status(500).json({ payload: "Servor Error", success: false });
    };
});

participants.get('/:id', async (req, res) => {
    const { id } = req.params;
    const participant = await getParticipant(id);
    if(participant.id){
        res.json({ payload: participant, success: true });
    }else{
        res.status(404).json({ payload:`Participant with id #${id} was not found.`, success: false })
    };
});

participants.post('/', async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const newParticipant = await createParticipant(body, id);
        if (newParticipant.id){
            res.status(200).json({ payload: newParticipant, success: true});
        } else {
            throw error;
        };
    } catch (err) {
        res.status(422).json({ payload: "Server Error. New participant could not be added.", success: false });
    };
});

module.exports = participants;