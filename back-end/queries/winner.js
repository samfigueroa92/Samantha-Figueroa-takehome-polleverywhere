// const db = require('../db/dbConfig');

// const getWinner = async (id) => {
//     try {
//         const participants = await db.any('SELECT * FROM participants WHERE participants.raffle=$1', id);

//         const winner = participants[Math.floor(Math.random() * participants.length)];

//         const req = await db.one("UPDATE raffles SET winner_id=$1 WHERE raffle.id=$2 RETURNING *",[winner.id, id])

//         console.log(req)
//         return winner;
//     } catch(err) {
//         return err;
//     }
// };

// console.log(getWinner(1))

// module.exports={
//     getWinner
// };