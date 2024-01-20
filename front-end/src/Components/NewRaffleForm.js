const NewRaffleForm = () => {
  return (
    <div className="NewRaffleForm">
      <div>New Raffle:</div>
      <div>
        <label>
          Raffle Name:*
          <input type="text" />
        </label>
        <label>
            Raffle Secret Token:*
          <input type="text" />
        </label>
      </div>
      <div>You must remember the Raffle Token because it will be asked when picking a winner.</div>
      <div>
        <button>Create New Raffle</button>
      </div>
    </div>
  );
};

export default NewRaffleForm;
