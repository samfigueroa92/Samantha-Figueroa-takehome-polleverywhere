//import
import { useState } from "react";
//styling
import "./SingleParticipant.css";
import NumbersIcon from "@mui/icons-material/Numbers";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

//components
import BasicModal from "../BasicModal/BasicModal";

const SingleParticipant = ({ participant, index }) => {
  const { id, first_name, last_name, email, phone } = participant;

  let truncatedEmail
  if(email.length > 18){
    truncatedEmail = email.slice(0,18) + "...";
  }

  return (
    <div className="SingleParticipant" >
      <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)", textAlign:"center" }}
      >
        <Card elevation={20} sx={{width: 400, height:450,":hover": {
                boxShadow: "10px 10px #D3D3CB",
                backgroundColor: index % 2 === 0 ? "#FFA500" : "#FFB52E"
              },}}>
          <CardContent sx={{padding: 6}}>
          <Avatar alt={`${first_name} ${last_name}`} src="" sx={{ width: 100, height: 100, margin:"0 auto 25px auto" }} />
            <Typography sx={{ fontSize: 30, paddingTop: 5 }} color="text.primary" gutterBottom>
            {`${first_name} ${last_name}`}
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize: 25 }} color="text.secondary">
            <NumbersIcon fontSize="18px"/> {id}
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize: 25 }} color="text.secondary">
            {(email.length > 16) ?
            <div className="SingleParticipant-Modal">
            <EmailIcon fontSize="18px"/> 
            <BasicModal truncated={truncatedEmail} info={email}/>
            </div> 
            : 
            <>
            <EmailIcon fontSize="18px"/> 
            {email}
            </>
            }
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize: 25 }} color="text.secondary">
            <LocalPhoneIcon fontSize="18px" /> {phone ? phone : "--"}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default SingleParticipant;