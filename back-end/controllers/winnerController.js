// const express = require('express');
// const winner = express.Router({ mergeParams: true });

// const {
//     getWinner
// } = require('../queries/winner');

// winner.put('/:id', async (req, res) => {
//     const { id } = req.params;
//     const winner = await getWinner(id);

//     if(winner.id){
//         res.status(200).json({ payload: winner, success: true });
//     }else{
//         res.status(500).json({ payload: "Servor Error", success: false })
//     };
// });

// module.exports = winner;