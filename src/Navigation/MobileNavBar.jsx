import React from "react";
import { motion } from "motion/react";

import "./MobileNavBar.css";

import NavigationLinks from "./NavigationLinks";
import XButtonSvg from "../Components/XButtonSvg";

const MobileNavBar = (props) => {
  return (
    <motion.div
      initial={{ x: 920 }}
      animate={{ x: 0 }}
      exit={{ x: 920 }}
      transition={{ type: "tween", duration: 0.5 }}
      className="mobileNavBarWrapper"
    >
      <div
        className="closeMobileNavbar"
        onClick={() => props.setShowMobileNavbar(false)}
      >
        <XButtonSvg color={"#1d1d1b"} />
      </div>
      <NavigationLinks {...props} />
    </motion.div>
  );
};

export default MobileNavBar;
