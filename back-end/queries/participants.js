const db = require('../db/dbConfig');

const getAllParticipants = async (id) => {
    try {
        const allParticipants = await db.any('SELECT * FROM participants WHERE participants.raffle=$1', id);
        return allParticipants;
    } catch(err) {
        return err;
    };
};

const getParticipant = async (id) => {
    try{
        const participant = await db.one('SELECT * FROM participants WHERE id=$1', id);
        return participant;
    } catch (err) {
        return err;
    };
};

// const createParticipant = async (participant) => {
//     const { name, capacity, floor } = participant;
//     try {
//         const newParticipant = await db.one('INSERT INTO participants (name, capacity, floor) VALUES ($1, $2, $3) RETURNING *', [name, capacity, floor]);
//         return newParticipant;
//     } catch (err) {
//         return err;
//     };
// };

module.exports = {
    getAllParticipants,
    getParticipant,
    // createParticipant,
};