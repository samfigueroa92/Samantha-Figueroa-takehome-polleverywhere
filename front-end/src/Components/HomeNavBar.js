//styling
import "./HomeNavBar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

import logo from "../images/logo.png";

const HomeNavBar = () => {
  return (
    <div className="HomeNavigation">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar alt="logo" src="https://www.belmont.k12.ma.us/bps/Portals/9/xBlog/uploads/2023/2/13/raffle.png" sx={{ width: 65, height: 65, marginRight:"15px" }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Raffle Wizard
            </Typography>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Raffle Wizard
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick="" sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default HomeNavBar;
