//styling
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./SingleRaffle.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CelebrationIcon from '@mui/icons-material/Celebration';
// import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import logo from '../images/raffle_logo.png';

//utils
import { convertDate } from "../utils/dateConverter";

const SingleRaffle = ({ raffle, index }) => {
  const { name, creation_date, raffled_date, winner_id } = raffle;

  return (
    <div className="SingleRaffle">
      <a href={`/raffles/${raffle.id}`}>
        <Box
          component="span"
          sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
        >
          <Card className="SingleRaffle-Card"
            elevation={20}
            sx={{
              width: 400,
              height: 450,
              ":hover": {
                boxShadow: "10px 10px #D3D3CB",
                backgroundColor: index % 2 === 0 ? "#FFA500" : "#FFB52E"
              },
            }}
          >
            <CardContent>
            <img src={logo} alt="logo" />
              <Typography
                sx={{ fontSize: 30, paddingBottom: 5, textAlign:"center" }}
                color="text.primary"
                gutterBottom
                className="SingleRaffle-Card-Title"
              >
              {name}
              </Typography>
              <Typography sx={{ mb: 1.5, fontSize:20 }} color="text.secondary">
                <b><CalendarMonthIcon/> Created On:</b> {convertDate(creation_date)}
              </Typography>
              <Typography sx={{ mb: 1.5, fontSize:20 }} color="text.secondary">
                <b><EmojiEventsIcon /> Winner ID:</b> {winner_id ? winner_id : "No winner"}
              </Typography>
              <Typography sx={{ mb: 1.5, fontSize:20 }} color="text.secondary">
                <b><CelebrationIcon /> Raffled On:</b> {raffled_date ? convertDate(raffled_date) : "Not raffled yet."}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </a>
    </div>
  );
};

export default SingleRaffle;
