//styling
import "./HomePage.css"

//components
// import HomeNavigation from "../Components/HomeNavigation";
import NewRaffleForm from "../Components/NewRaffleForm";
import RafflesList from "../Components/RafflesList";

const HomePage = ({ raffles }) => {
    return (
        <div className="HomePage">
            <h1> Welcome to Raffle Wizard!</h1>
            {/* <HomeNavigation /> */}
            <NewRaffleForm />
            <RafflesList raffles={raffles}/>
        </div>
    );
};

export default HomePage;