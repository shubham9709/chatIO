import React, { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import { makeStyles } from "@material-ui/core"
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import Login from "../Login";
import { motion } from "framer-motion";

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
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <Box className={classes.mainDiv}>
      <motion.Box className={classes.logoDiv} whileHover={{ scale: 1.1 }}>
        <WhatsAppIcon fontSize="large" className={classes.icon} />
        <Typography variant="h5" className={classes.text}>
          chat&nbsp;IO
        </Typography>
      </motion.Box>
      <Box style={{ display: "flex", position: "relative", left: "65%" }}>
        <Typography style={{ padding: "1rem 2rem 0 0", cursor: "pointer" }}>
          Get Started
        </Typography>
        <Typography style={{ padding: "1rem 2rem 0 0", cursor: "pointer" }}>
          Features
        </Typography>
        <Typography style={{ padding: "1rem 2rem 0 0", cursor: "pointer" }}>
          Contact Us
        </Typography>
        <Typography
          style={{ padding: "1rem 2rem 0 0", cursor: "pointer" }}
          onClick={handleClick}
        >
          Log In
        </Typography>
      </Box>
      {open && <Login open={open} setOpen={setOpen} />}
    </Box>
  );
};

export default Header;
