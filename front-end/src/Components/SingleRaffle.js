//styling
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./SingleRaffle.css";

//utils
import { convertDate } from "../utils/dateConverter";

const SingleRaffle = ({ raffle }) => {
  const { name, creation_date, raffled_on, winner_id } = raffle;

  return (
    <div className="SingleRaffle">
      <a href={`/raffles/${raffle.id}`}>
        <Box
          component="span"
          sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
        >
          <Card
            elevation={12}
            sx={{
              width: 300,
              height: 300,
              ":hover": {
                boxShadow: "10px 10px #6495ED",
              },
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 25 }}
                color="text.primary"
                gutterBottom
              >
                {name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Created on: {convertDate(creation_date)}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Winner ID: {winner_id ? winner_id : "No winner"}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Raffled on: {raffled_on ? convertDate(raffled_on) : "Not raffled yet."}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </a>
    </div>
  );
};

export default SingleRaffle;
