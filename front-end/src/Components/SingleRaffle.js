//styling
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const SingleRaffle = ({ raffle }) => {
  const { name, creation_date } = raffle;

  return (
    <div className="SingleRaffle">
      <a href={`/raffles/${raffle.id}`}>
        <Box
          component="span"
          sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
        >
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 25 }}
                color="text.primary"
                gutterBottom
              >
                {name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Created on: {creation_date}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Winner ID: No Winner
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Raffled on: Date raffle ended
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </a>
    </div>
  );
};

export default SingleRaffle;
