import React from "react";
import { motion } from "motion/react";

import ErrowLeftSVG from "../Components/ErrowLeftSVG";

import "./Contact.css";

function Contact(props) {
  return (
    <motion.div
      className="contactWrapper"
      initial={{ y: 1500 }}
      animate={{ y: 0 }}
      exit={{ y: 1500 }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      <div className="gobackErrow" onClick={() => props.setShowContact(false)}>
        <ErrowLeftSVG collor="rgb(0,0,0)" />
      </div>

      <div className="contactData">
        <h2>Michael Godabreli</h2>
        Engerstr. 25
        <br />
        40235 Düsseldorf
        <br />
        E-Mail: godabreli@gmail.com
        <br />
        Mob: +49 179 4839729
      </div>
    </motion.div>
  );
}

export default Contact;
