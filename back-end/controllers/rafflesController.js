const express = require('express');
const raffles = express.Router();
const participants = require('./participantsController');

raffles.use('/:id/participants', participants)

const {
    getAllRaffles,
    getRaffle,
    createRaffle,
} = require('../queries/raffles');

raffles.get('/', async (req, res) => {
    const allRaffles = await getAllRaffles();
    
    if(allRaffles[0]){
        res.status(200).json({ payload: allRaffles, success: true });
    }else{
        res.status(500).json({ payload: "Server Error", success: false });
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

// raffles.post('/', async (req, res) => {
//     const { body } = req;
//     try {
//         const newRaffle = await createRaffle(body);
//         if (newRaffle.id){
//             res.status(200).json({ payload: newRaffle, success: true});
//         } else {
//             throw error;
//         };
//     } catch (err) {
//         res.status(422).json({ payload: "Server Error. Could Not Create Raffle.", success: false });
//     };
// });

module.exports = raffles;