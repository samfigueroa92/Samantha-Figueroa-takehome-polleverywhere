//components
import SingleRaffle from "./SingleRaffle";

const RafflesList = ({ raffles }) => {
    return (
        <div className="RafflesList">
            <h1>hi im the raffles list</h1>
            {raffles.map(raffle => <SingleRaffle key={raffle.id} raffle={raffle} />)}
        </div>
    );
};

export default RafflesList;