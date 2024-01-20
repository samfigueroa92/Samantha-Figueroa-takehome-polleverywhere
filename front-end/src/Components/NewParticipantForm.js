const NewParticipantForm = () => {
  return (
    <div className="NewParticipantForm">
        <form>
          <h2>Register to participate in the raffle:</h2>
          <label>
            First Name*
            <input />
          </label>
          <label>
            Last Name*
            <input />
          </label>
          <label>
            Email*
            <input />
          </label>
          <label>
            Phone
            <input />
          </label>
          <div>
            <button>Submit</button>
            <button>Reset</button>
          </div>
        </form>
    </div>
  );
};

export default NewParticipantForm;