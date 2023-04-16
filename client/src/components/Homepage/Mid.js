import React from "react";
import { makeStyles } from "@mui/styles";
import chat from "../images/chat.jpeg";
import tinychat from "../images/tinychat.png";
import tinychat2 from "../images/tinychat2.png";
import tinychatchat3 from "../images/tinychatchat3.png";
import audio from "../images/audio.png";
import sticker from "../images/sticker.png";
import { motion } from "framer-motion";
import Midsection from "./Midsection1";
const useStyles = makeStyles({
  image: {
    height: "50rem",
    width: "90rem",
    padding: "1.5%",
    borderRadius: "60px 60px 60px 60px",
    position: "relative",
  },
  imageDiv: {
    padding: "5% 10% 0 10%",
  },
});
const Mid = () => {
  const classes = useStyles();
  return (
    <div className={classes.imageDiv}>
      <img src={chat} alt="chat" className={classes.image} />

      <motion.img
        src={tinychat}
        style={{
          position: "absolute",
          left: "20%",
          top: "30%",
          width: "400px",
        }}
        initial={{ y: "-10vw" }}
        animate={{
          y: "0",
        }}
        transition={{ delay: 0, duration: 0.5 }}
      />
      <motion.img
        src={tinychat2}
        style={{
          position: "absolute",
          left: "30%",
          top: "45%",
          width: "400px",
        }}
        initial={{ y: "-10vw", opacity: 0 }}
        animate={{
          y: "0",
          opacity: 1,
        }}
        transition={{ delay: 1, duration: 0.5 }}
        alt="tinychat"
      />
      <motion.img
        src={tinychatchat3}
        style={{
          position: "absolute",
          left: "4%",
          top: "35%",
          width: "400px",
        }}
        initial={{ y: "-10vw", opacity: 0 }}
        animate={{
          y: "0",
          opacity: 1,
        }}
        transition={{ delay: 0.6, duration: 0.5 }}
        alt="tinychat"
      />
      <motion.img
        src={sticker}
        style={{
          position: "absolute",
          left: "42%",
          top: "52%",
          width: "250px",
        }}
        initial={{ y: "8vw", opacity: 0 }}
        animate={{
          y: "0",
          opacity: 1,
        }}
        transition={{ delay: 1.6, duration: 0.3 }}
        alt="tinychat"
      />
      <motion.img
        src={audio}
        style={{
          position: "absolute",
          left: "20%",
          top: "68%",
          width: "400px",
        }}
        initial={{ y: "10vw", opacity: 0 }}
        animate={{
          y: "0",
          opacity: 1,
        }}
        transition={{ delay: 2, duration: 0.4 }}
        alt="tinychat"
      />
      <Midsection />
    </div>
  );
};

export default Mid;
