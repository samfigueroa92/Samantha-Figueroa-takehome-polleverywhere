//styling
import "./RafflesList.css"

//components
import SingleRaffle from "./SingleRaffle";

const RafflesList = ({ raffles }) => {
    return (
        <div className="RafflesList">
            {raffles.map((raffle, index) => <SingleRaffle key={raffle.id} raffle={raffle} index={index}/>)}
        </div>
    );
};

export default RafflesList;