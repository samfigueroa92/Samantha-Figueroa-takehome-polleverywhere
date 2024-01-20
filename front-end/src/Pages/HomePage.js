//navigation bar
    //Logo/Name 
    //SignIn/LogIn button
//new raffle form
    //name input
    //secret token input
    //submit button
//list of all raffles
    //name
    //date
    //winner
    //date raffle picked a winner 

//components
// import HomeNavigation from "../Components/HomeNavigation";
import NewRaffleForm from "../Components/NewRaffleForm";
import RafflesList from "../Components/RafflesList";

const HomePage = ({ raffles }) => {
    return (
        <div className="HomePage">
            {/* <HomeNavigation /> */}
            <NewRaffleForm />
            <RafflesList raffles={raffles}/>
        </div>
    );
};

export default HomePage;