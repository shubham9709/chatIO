import { Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div
      style={{
        color: "#fff",
        display: "flex",
        opacity: "0.5",
        padding: "0 0 2% 40%",
      }}
    >
      <Typography style={{ paddingTop: "0.5%" }}>2023 © chatIO</Typography>
      <div style={{ display: "flex", padding: "0 0 0 5rem" }}>
        <InstagramIcon style={{ fontSize: "30px", paddingRight: "2rem" }} />
        <GitHubIcon style={{ fontSize: "30px", paddingRight: "2rem" }} />
        <LinkedInIcon style={{ fontSize: "30px", paddingRight: "2rem" }} />
      </div>
    </div>
  );
};

export default Footer;

// transition: color .33s linear .5s, border-color ease-out .5s, background-color .33s linear 0s;
