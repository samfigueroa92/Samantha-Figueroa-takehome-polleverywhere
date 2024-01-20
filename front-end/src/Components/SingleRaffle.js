const SingleRaffle = ({ raffle }) => {
  console.log(raffle);
  return (
    <div className="SingleRaffle">
      <a href={`/raffles/${raffle.id}`}>
        <p>{raffle.name}</p>
        <p>Created on: {raffle.creation_date}</p>
        <p>Winner ID: </p>
        <p>Raffled on: </p>
      </a>
    </div>
  );
};

export default SingleRaffle;
