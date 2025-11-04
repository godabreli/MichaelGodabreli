import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./DownloadGallery.css";

const DownloadGallery = () => {
  const { galleryName } = useParams();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const container = document.getElementById("downloadGallery");
    const script = document.createElement("script");
    script.src = "https://liebevollbelichtet.de/embed/embedGallery.js.iife.js";
    script.dataset.galleryName = galleryName;
    script.dataset.mode = "bright";
    container.appendChild(script);

    // 👂 Event Listener für das Custom Event
    const handleGalleryLoaded = (e) => {
      if (e.detail.galleryName === galleryName) {
        setLoaded(true);
      }
    };

    const logoutHandler = (e) => {
      if (e.detail.galleryLogout) {
        setLoaded(false);
      }
    };

    window.addEventListener("galleryLoaded", handleGalleryLoaded);
    window.addEventListener("galleryLogout", logoutHandler);

    return () => {
      window.removeEventListener("galleryLoaded", handleGalleryLoaded);
      window.removeEventListener("galleryLogout", logoutHandler);
      script.remove();
    };
  }, [galleryName]);

  return (
    <div className="downloadGalleryWrapper">
      {loaded && <div className="galleryTitle">{galleryName}</div>}
      <div id="downloadGallery"></div>
    </div>
  );
};

export default DownloadGallery;
