import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import NavigationLinks from "../Navigation/NavigationLinks";
import MobileNavBar from "../Navigation/MobileNavBar";
import Gallery from "../GalleryItems/Gallery";
import Videos from "../GalleryItems/Videos";
import VideoPlayer from "../GalleryItems/VideoPlayer";
import ErrowLeftSVG from "../Components/ErrowLeftSVG";

import "./Portfolio.css";

const videos = [
  "produkt-video-001",
  "produkt-video-002",
  "produkt-video-003",
  "produkt-video-004",
  "produkt-video-005",
  "produkt-video-006",
  "produkt-video-007",
  "produkt-video-008",
  "produkt-video-009",
  "produkt-video-010",
  "produkt-video-011",
  "produkt-video-012",
  "produkt-video-013",
  "produkt-video-014",
  "produkt-video-015",
  "produkt-video-016",
  "produkt-video-017",
];

const Portfolio = (props) => {
  const [galleryName, setGalleryName] = useState("godabreli-fashion");
  const [title, setTitle] = useState("Fashion");
  const [showVideos, setShowVideos] = useState(false);
  const [showGallery, setShowGallery] = useState(true);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [index, setIndex] = useState();
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const scrollcontainerRef = useRef(null);

  useEffect(() => {
    const container = scrollcontainerRef.current;

    const onScroll = () => {
      setShowScrollToTop(container.scrollTop > 1000);
    };

    if (container) container.addEventListener("scroll", onScroll);
    return () => {
      if (container) container.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    const container = scrollcontainerRef.current;

    if (container) container.scrollTo({ top: 0, behavior: "smooth" });
  };

  //////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const container = scrollcontainerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setContainerSize({ width, height });
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  /////////////////////////////////////////////////////////////////////

  return (
    <motion.div
      initial={{ y: 1500 }}
      animate={{ y: 0 }}
      exit={{ y: 1500 }}
      transition={{ type: "tween", duration: 0.3 }}
      className="portfolioWrapper"
    >
      <AnimatePresence>
        {showVideoPlayer && (
          <VideoPlayer
            index={index}
            setShowVideoPlayer={setShowVideoPlayer}
            videos={videos}
          />
        )}
        {showMobileNavbar && (
          <MobileNavBar
            setGalleryName={setGalleryName}
            setTitle={setTitle}
            setShowGallery={setShowGallery}
            setShowVideos={setShowVideos}
            setShowMobileNavbar={setShowMobileNavbar}
          />
        )}
      </AnimatePresence>
      <div className="portfolioGrid">
        <div className="backArrow">
          <span onClick={() => props.setShowPortfolio(false)}>
            <ErrowLeftSVG collor="rgba(0,0,0,1)" />
          </span>
        </div>
        <div className="portfolioTitle">{title}</div>
        <div className="burgerMenue" onClick={() => setShowMobileNavbar(true)}>
          ☰
        </div>
        <div className="sidebar">
          <NavigationLinks
            setGalleryName={setGalleryName}
            setTitle={setTitle}
            setShowGallery={setShowGallery}
            setShowVideos={setShowVideos}
          />
        </div>
        <div className="portfolioImages" ref={scrollcontainerRef}>
          <AnimatePresence>
            {showScrollToTop && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="scrollToDivTop"
                onClick={scrollToTop}
                style={{
                  marginLeft: containerSize.width - 60,
                  marginTop: containerSize.height - 70,
                }}
              >
                <ErrowLeftSVG collor="rgba(255,255,255,1)" />
              </motion.div>
            )}
          </AnimatePresence>

          {showGallery && <Gallery galleryName={galleryName} />}
          {showVideos && (
            <Videos
              setIndex={setIndex}
              setShowVideoPlayer={setShowVideoPlayer}
              videos={videos}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
