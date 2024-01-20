//dependencies
import { useState } from "react";

//components
import Winner from "./Winner";

const WinnerForm = () => {
  const [winner, setWinner] = useState(false);

  return (
    <div className="WinnerForm">
      {winner ? <Winner /> : (
        <>
        <div>Pick a Winner</div>
        <div>
          <input type="text" placeholder="Secret Token" />
          <button onClick={() => setWinner(true)}>Pick a winner</button>
        </div>
        <div>
          <h3>Secret Token</h3>
          <p>The secret token used when creating the raffle must be provided.</p>
        </div>
        </>
      )}
    </div>
  );
};

export default WinnerForm;
