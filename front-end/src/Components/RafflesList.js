//components
import SingleRaffle from "./SingleRaffle";

const RafflesList = ({ raffles }) => {
    return (
        <div className="RafflesList">
            {raffles.map(raffle => <SingleRaffle key={raffle.id} raffle={raffle} />)}
        </div>
    );
};

export default RafflesList;