import React from "react";
import Header from "./Header";
import { makeStyles } from "@mui/styles";
import Mid from "./Mid";
import { Divider } from "@mui/material";
import Footer from "./Footer";

const useStyles = makeStyles({
  home: {
    backgroundColor: "#18122B",
  },
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Header />
      <Mid />
      <Divider />
      <Footer />
    </div>
  );
};

export default HomePage;
