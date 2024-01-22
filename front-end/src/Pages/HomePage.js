//styling
import "./HomePage.css"

//components
import NewRaffleForm from "../Components/NewRaffleForm";
import RafflesList from "../Components/RafflesList";

const HomePage = ({ raffles }) => {
    return (
        <div className="HomePage">
            <h1> Welcome to Raffle Wizard!</h1>
            <NewRaffleForm />
            <RafflesList raffles={raffles}/>
        </div>
    );
};

export default HomePage;