import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import { makeStyles } from "@material-ui/core"
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles({
  icon: {
    color: "#54B435",
    padding: "0 5px",
  },
  text: {
    color: "#54B435",
    fontFamily: "Pacifio",
    cursor: "pointer",
  },
  logoDiv: {
    display: "flex",
    padding: "10px",
  },
  mainDiv: {
    display: "flex",
    color: "#fff",
    opacity: "0.8",
    background: "#282A3A",
    height: "5rem",
    width: "100%",
    position: "fixed",
    zIndex: "1",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainDiv}>
      <Box className={classes.logoDiv}>
        <WhatsAppIcon fontSize="large" className={classes.icon} />
        <Typography variant="h5" className={classes.text}>
          chat&nbsp;IO
        </Typography>
      </Box>
      <Box style={{ display: "flex", position: "relative", left: "70%" }}>
        <Typography style={{ padding: "1rem 2rem 0 0", cursor: "pointer" }}>
          Get Started
        </Typography>
        <Typography style={{ padding: "1rem 2rem 0 0", cursor: "pointer" }}>
          Features
        </Typography>
        <Typography style={{ padding: "1rem 2rem 0 0", cursor: "pointer" }}>
          Contact Us
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
