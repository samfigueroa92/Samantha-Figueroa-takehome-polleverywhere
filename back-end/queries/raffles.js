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

const createRaffle = async (raffle) => {
    const { name, secret_token } = raffle;
 
    try {
        const newRaffle = await db.one('INSERT INTO raffles (name, secret_token, creation_date) VALUES ($1, $2, NOW()) RETURNING *', [name, secret_token]);
        return newRaffle;
    } catch (err) {
        console.log("ERROR")
        return err;
    };
};

module.exports = {
    getAllRaffles,
    getRaffle,
    createRaffle,
};