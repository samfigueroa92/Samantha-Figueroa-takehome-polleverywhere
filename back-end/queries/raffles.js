const db = require('../db/dbConfig');

const getAllRaffles = async () => {
    try {
        const allRaffles = await db.any('SELECT * FROM raffles');
        return allRaffles;
    } catch(err) {
        return err;
    };
};

const getRaffle = async (id) => {
    try{
        const raffle = await db.one('SELECT * FROM raffles WHERE id=$1', id);
        return raffle;
    } catch (err) {
        return err;
    };
};

// const createRaffle = async (raffle) => {
//     const { name, capacity, floor } = raffle;
//     try {
//         const newRaffle = await db.one('INSERT INTO raffles (name, capacity, floor) VALUES ($1, $2, $3) RETURNING *', [name, capacity, floor]);
//         return newRaffle;
//     } catch (err) {
//         return err;
//     };
// };

module.exports = {
    getAllRaffles,
    getRaffle,
    // createRaffle,
};