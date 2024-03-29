const express = require('express');
const raffles = express.Router();
const participants = require('./participantsController');
// const winner = require('./winnerController');

raffles.use('/:id/participants', participants)
// raffles.use('/:id/winner', winner)

const {
    getAllRaffles,
    getRaffle,
    createRaffle,
    editRaffle
} = require('../queries/raffles');

raffles.get('/', async (req, res) => {
    const allRaffles = await getAllRaffles();
    if(allRaffles[0]){
        res.status(200).json({ payload: allRaffles, success: true });
    }else{
        res.status(500).json({ payload: 'Server error.', success: false });
    };
});

raffles.get('/:id', async (req, res) => {
    const { id } = req.params;
    const raffle = await getRaffle(id);
    if(raffle.id){
        res.json({ payload: raffle, success: true });
    }else{
        res.status(404).json({ payload:`Raffle #${id} not found.`, success: false })
    };
});

raffles.post('/', async (req, res) => {
    const { body } = req;
    try {
        const newRaffle = await createRaffle(body);
        if (newRaffle.id){
            res.status(200).json({ payload: newRaffle, success: true});
        } else {
            throw error;
        };
    } catch (err) {
        res.status(422).json({ payload: "Server Error. Could Not Create Raffle.", success: false });
    };
});

raffles.put("/:id", async (req, res) => {
    const { id } = req.params;
    const editedRaffle = await editRaffle(req.body, id);

    if (editedRaffle.id) {
      res.status(200).json(editedRaffle);
    } else {
      res.status(400).json({ error: "Your request was not updated" });
    }
  });

  raffles.get("/get-winner-by-id/:id", async (req, res) => {
    const { id } = req.params;
    const winnerByID = await getRaffle(id);

    if(winnerByID.winner_id){
        res.status(200).json(winnerByID);
    }else{
        res.status(404).json({ error: "Winner not found.", data: null});
    };
  });

module.exports = raffles;