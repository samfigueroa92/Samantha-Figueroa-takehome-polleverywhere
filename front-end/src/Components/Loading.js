//dependencies
import { useState, useEffect } from "react";

//styling
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Loading.css";

const Loading = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="Loading">
      <h1>Loading...</h1>
      <Box sx={{ position: "relative", display: "inline-flex", paddingTop:5, color: "#1976d2", ":hover": { color: "orange" } }}>
        <CircularProgress variant="determinate" value={progress} size="10rem" color='inherit'/>
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary" fontSize={40} paddingTop={5}>
            {`${Math.round(progress)}%`}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Loading;
