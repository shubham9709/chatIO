import * as React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Typography } from "@mui/material";
import fullchat1 from "../images/fullchat1.png";
import fullchat2 from "../images/fullchat2.png";
import whatsappChat from "../images/whatsappChat.jpeg";
import whats2 from "../images/whats2.jpeg";
import { Box } from "@mui/system";

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

export const Midsection = () => {
  return (
    <div>
      <FadeInWhenVisible>
        <div>
          <motion.img
            src={fullchat1}
            alt="fullchat1"
            style={{ width: "92%", padding: "10% 5% 0 5%" }}
          />
          <div
            style={{
              marginTop: "100px",
              padding: "40",
              display: "inline-block",
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              style={{
                color: "#fff",
                opacity: 0.7,
                fontSize: "2rem",
                textAlign: "center",
                fontSize: "40px",
              }}
            >
              With private messaging, you can be yourself, speak
              <br />
              freely and feel close to the most important people in your life no
              <br />
              matter where they are.
            </Typography>
          </div>
          <img
            src={fullchat2}
            alt="fullchat2"
            style={{ width: "92%", padding: "10% 5% 0 5%" }}
          />
        </div>
      </FadeInWhenVisible>
      <div style={{ display: "flex", padding: "10%" }}>
        <motion.div
          style={{
            color: "#fff",
            display: "inline-block",
            width: "40%",
            padding: "15% 15%  0 8%",
            opacity: 0.8,
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Typography
            variant="h3"
            style={{ fontSize: "60px", lineHeight: "3rem" }}
          >
            Be in touch with
            <br /> your groups
          </Typography>
          <Typography style={{ fontSize: "20px", paddingTop: "7%" }}>
            Whether it's planning an outing with friends or simply staying on
            top of your family chats, group conversations should feel
            effortless.
          </Typography>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <img
            src={whatsappChat}
            style={{ width: "60%", borderRadius: "30px" }}
          />
        </motion.div>
      </div>
      <div style={{ display: "flex", padding: "10%" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <img
            src={whatsappChat}
            style={{ width: "60%", borderRadius: "30px" }}
          />
        </motion.div>
        <motion.div
          style={{
            color: "#fff",
            display: "inline-block",
            width: "40%",
            padding: "15% 15%  0 8%",
            opacity: 0.8,
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Typography
            variant="h3"
            style={{ fontSize: "60px", lineHeight: "3rem" }}
          >
            Be expressive
          </Typography>
          <Typography style={{ fontSize: "20px", paddingTop: "7%" }}>
            Speak your truth boldly, with passion and conviction, and let your{" "}
            authentic self shine through.
          </Typography>
        </motion.div>
      </div>
    </div>
  );
};
export default Midsection;
