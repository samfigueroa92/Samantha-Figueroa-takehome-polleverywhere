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

const createParticipant = async (participant, id) => {
    const { first_name, last_name, email, phone, img } = participant;
    try {
        const newParticipant = await db.one('INSERT INTO participants (raffle, first_name, last_name, email, phone, img, registration_date) VALUES ($1, $2, $3, $4, $5, $6, NOW()) RETURNING *', [id, first_name, last_name, email, phone, img]);
        return newParticipant;
    } catch (err) {
        return err;
    };
};

module.exports = {
    getAllParticipants,
    getParticipant,
    createParticipant,
};