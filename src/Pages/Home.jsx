import React, { useEffect, useState } from "react";
import { motion, useAnimationControls, AnimatePresence } from "motion/react";

import Portfolio from "./Portfolio";
import Contact from "./Contact";

import "./Home.css";

const myName = ["M", "i", "c", "h", "a", "e", "l"];
const mySurname = ["G", "o", "d", "a", "b", "r", "e", "l", "i"];

function Home() {
  const controlsMichael = useAnimationControls();
  const controlsGodabreli = useAnimationControls();

  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  useEffect(() => {
    const sequence = async () => {
      await controlsMichael.start("show");
      await controlsGodabreli.start("show");
    };
    sequence();
  }, [controlsMichael, controlsGodabreli]);

  return (
    <>
      <div className="home-wrapper">
        <div className="michaelGodabreli">
          <motion.div
            variants={container}
            initial="hidden"
            animate={controlsMichael}
            className="michael"
          >
            {myName.map((letter, i) => (
              <motion.span key={i} variants={item}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            animate={controlsGodabreli}
            className="godabreli"
          >
            {mySurname.map((letter, i) => (
              <motion.span key={i} variants={item}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <div className="links">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            onClick={() => setShowPortfolio(true)}
          >
            Portfolio
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            onClick={() => setShowContact(true)}
          >
            Contact
          </motion.span>
        </div>
      </div>
      <AnimatePresence>
        {showPortfolio && <Portfolio setShowPortfolio={setShowPortfolio} />}
        {showContact && <Contact setShowContact={setShowContact} />}
      </AnimatePresence>
      <div className="footer">
        <div className="footerLinks">
          <a href="/datenschutz">Datenschutz</a>
          <a href="impressum">Impressum</a>
        </div>
        <div className="copyright">Copyright © Michael Godabreli</div>
      </div>
    </>
  );
}

export default Home;
