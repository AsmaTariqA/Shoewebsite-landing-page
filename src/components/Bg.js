import React from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import shoeImg from "./blahhh.png";
import { useGSAP } from "@gsap/react";
import "./Bg.css";

const Bg = () => {
  // Initialize the timeline
  useGSAP(() => {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  // Define the animations
  tl.from('.big-heading', { opacity: 0, y: -50, duration: 1 })
    .from('.circle', { opacity: 0, scale: 0, duration: 0.6})
    .from(".circle2", { scale: 0, opacity: 0, duration: 1 })
    .from(".image", { y: 100, opacity: 0, duration: 1 })
    .from(".social-links", { y: 100, opacity: 0, duration: 1 })
    .from(".bottom-text", { x: 100, opacity: 0, duration: 1 })
  })
  return (
    <>
      <div id='home'>
        <div className="big-heading"><h1>SHOE<span style={{ color: "#3a87cf", WebkitTextStroke: "transparent" }}>S</span></h1></div>

        <div className="circle"></div>
        <div className="circle2"></div>

        <div className="image">
          <img src={shoeImg} className="img" alt="Shoe" />
        </div>
        <div className='social-links'>
          <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
        </div>
        <div className="bottom-text">
          <p>THE COMFORT MATTERS</p>
        </div>
      </div>
    </>
  );
};

export default Bg;




