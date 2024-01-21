//styling
import "./NewParticipantForm.css";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const NewParticipantForm = () => {
  return (
    <div className="NewParticipantForm">
      <h2>Register to participate in the raffle:</h2>
      <form>
        <FormControl fullWidth>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              fullWidth
              required
            ></TextField>
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              required
              fullWidth
            ></TextField>
          </Stack>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required
              fullWidth
            ></TextField>
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              fullWidth
              margin="normal"
           ></TextField>
          <div className="NewParticipantForm-buttons">
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <Button variant="contained" size="large">
                Submit
              </Button>
              <Button variant="contained" size="large" type="submit">
                Reset
              </Button>
            </Stack>
          </div>
        </FormControl>
      </form>
     
    </div>
  );
};

export default NewParticipantForm;

<form>
  <label>
    *
    <input />
  </label>
  <label>
    Last Name*
    <input />
  </label>
  <label>
    Email*
    <input />
  </label>
  <label>
    Phone
    <input />
  </label>
  <div>
    <button>Submit</button>
    <button>Reset</button>
  </div>
</form>;
