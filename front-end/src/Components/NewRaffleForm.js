//styling
import "./NewRaffleForm.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';

const NewRaffleForm = () => {
  return (
    <div className="NewRaffleForm">
      <h3>Start your raffle today!</h3>
      <div className="NewRaffleForm-content">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50vw" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Raffle Name"
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Raffle Secret Token"
            variant="outlined"
            required
            fullWidth
          />
         
        </Box>
        <div className="NewRaffleForm-content-text">
            You must remember the Raffle Token because it will be asked when
            picking a winner.
          </div>
          <div className="NewRaffleForm-content-button">
          <Button variant="contained">Create new raffle</Button>
          </div>
      </div>
    </div>
  );
};

export default NewRaffleForm;
