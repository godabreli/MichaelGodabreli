import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigationlinks.css";

function NavigationLinks(props) {
  return (
    <ul className="navLinks">
      <li
        onClick={() => {
          props.setTitle("Fashion");
          props.setGalleryName("godabreli-fashion");
          props.setShowVideos(false);
          props.setShowGallery(true);
          props.setShowMobileNavbar && props.setShowMobileNavbar(false);
        }}
      >
        Fashion
      </li>
      <li
        onClick={() => {
          props.setTitle("Commercial");
          props.setGalleryName("godabreli-commercial");
          props.setShowVideos(false);
          props.setShowGallery(true);
          props.setShowMobileNavbar && props.setShowMobileNavbar(false);
        }}
      >
        Commercial
      </li>
      <li
        onClick={() => {
          props.setTitle("Kids");
          props.setGalleryName("godabreli-kids");
          props.setShowVideos(false);
          props.setShowGallery(true);
          props.setShowMobileNavbar && props.setShowMobileNavbar(false);
        }}
      >
        Kids
      </li>
      <li
        onClick={() => {
          props.setTitle("Still Life");
          props.setGalleryName("godabreli-still-life");
          props.setShowVideos(false);
          props.setShowGallery(true);
          props.setShowMobileNavbar && props.setShowMobileNavbar(false);
        }}
      >
        Still Life
      </li>
      <li
        onClick={() => {
          props.setTitle("Product Videos");
          props.setShowVideos(true);
          props.setShowGallery(false);
          props.setShowMobileNavbar && props.setShowMobileNavbar(false);
        }}
      >
        Produkt Videos
      </li>
    </ul>
  );
}

export default NavigationLinks;
