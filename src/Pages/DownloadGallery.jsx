import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./DownloadGallery.css";

const DownloadGallery = () => {
  const { galleryName } = useParams();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const container = document.getElementById("downloadGallery");
    if (!container) return;

    const script = document.createElement("script");
    script.id = "embed-gallery-script";
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
      <div className="michaelGodabreli">
        <span>Michael Godabreli</span>

        <span> Photography</span>
      </div>
      <div className="homeButton">
        <Link to={"/"}> HOME </Link>
      </div>
      {loaded && <div className="galleryTitle">{galleryName}</div>}
      <div id="downloadGallery"></div>
    </div>
  );
};

export default DownloadGallery;
