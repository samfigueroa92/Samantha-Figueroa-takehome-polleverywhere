const db = require('../db/dbConfig');

const getAllRaffles = async () => {
    console.log(db)
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
        return err;
    };
};

const editRaffle = async (raffle, id) => {
    const { winner_id } = raffle;
    console.log(winner_id)

    try {
      console.log("Editing raffle with id of " + id);
      const updatedRaffle = await db.one(
        "UPDATE raffles SET raffled_date=NOW(), winner_id=$1 WHERE id=$2 RETURNING *",
        [
          winner_id,
          id,
        ]
      );
      return updatedRaffle;
    } catch (error) {
      return error;
    }
  };

module.exports = {
    getAllRaffles,
    getRaffle,
    createRaffle,
    editRaffle
};