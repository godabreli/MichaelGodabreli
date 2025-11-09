import React, { useEffect } from "react";

const Gallery = (props) => {
  useEffect(() => {
    const container = document.getElementById("galleryDiv");
    if (!container) return;

    const oldScript = document.getElementById("embed-gallery-script");
    if (oldScript) {
      oldScript.remove();
    }

    const script = document.createElement("script");

    script.id = "embed-gallery-script";

    script.src = "https://liebevollbelichtet.de/embed/embedGallery.js.iife.js";
    script.dataset.galleryName = props.galleryName;
    script.dataset.mode = "bright";
    container.appendChild(script);

    return () => {
      // remove ONLY the gallery root, not the entire script
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [props.galleryName]);

  return <div key={props.galleryName} id="galleryDiv"></div>;
};

export default Gallery;
