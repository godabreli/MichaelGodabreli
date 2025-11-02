import React from "react";

import "./Videos.css";

const Videos = (props) => {
  return (
    <div className="videosWrapper">
      {props.videos.map((image, i) => (
        <div className="thumbnail" key={i}>
          <img
            className="thumbnailImg"
            src={`videos/thumbnails/${image}.jpg`}
            onClick={() => {
              props.setIndex(i);
              props.setShowVideoPlayer(true);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Videos;
