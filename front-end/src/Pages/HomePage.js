//styling
import "./HomePage.css";

//components
import NewRaffleForm from "../Components/NewRaffleForm";
import RafflesList from "../Components/RafflesList";
import Loading from "../Components/Loading";

const HomePage = ({ raffles, loading }) => {
  return (
    <div className="HomePage">
      {loading ? <Loading /> : (
        <>
          <h1> Welcome to Raffle Wizard!</h1>
          <NewRaffleForm />
          <RafflesList raffles={raffles} />
        </>
      )}
    </div>
  );
};

export default HomePage;
