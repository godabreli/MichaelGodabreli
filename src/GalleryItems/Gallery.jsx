import React, { useEffect } from "react";

const Gallery = (props) => {
  useEffect(() => {
    const container = document.getElementById("galleryDiv");
    const script = document.createElement("script");
    script.src = "https://liebevollbelichtet.de/embed/embedGallery.js.iife.js";
    script.dataset.galleryName = props.galleryName;
    script.dataset.mode = "bright";
    container.appendChild(script);

    return () => {
      script.remove();
    };
  }, [props.galleryName]);
  return <div key={props.galleryName} id="galleryDiv"></div>;
};

export default Gallery;
