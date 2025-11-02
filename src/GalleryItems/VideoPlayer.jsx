import React from "react";
import { motion } from "motion/react";
import "./VideoPlayer.css";

import XButtonSvg from "../Components/XButtonSvg";

const VideoPlayer = (props) => {
  const videoWidth = () => {
    if (window.innerWidth < 768) return window.innerWidth * 0.88;
    if (window.innerWidth > 768 && (props.index === 9 || props.index === 14))
      return 380;

    return 900;
  };
  return (
    <motion.div
      initial={{ y: 2000 }}
      animate={{ y: 0 }}
      exit={{ y: 2000 }}
      transition={{ type: "tween", duration: 0.3 }}
      className="vodeoPlayerWrapper"
    >
      <div
        className="closeVideoPlayerButton"
        onClick={() => props.setShowVideoPlayer(false)}
      >
        <XButtonSvg color={"#1d1d1b"} />
      </div>
      <video
        src={`videos/${props.videos[props.index]}.mp4`}
        width={videoWidth()}
        autoPlay
        loop
      />
    </motion.div>
  );
};

export default VideoPlayer;
