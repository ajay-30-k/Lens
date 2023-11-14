import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import athe from "./img/athlete-small.png";
import goodt from "./img/goodtimes-small.png";
import racesm from "./img/theracer-small.png";
// animation---------
import { motion } from "framer-motion";
import {
  Slidercon,
  Animation,
  Fade,
  Slider,
  Photoani,
  Lineanimi,
} from "./animation/Animaton";

const Ourwork = () => {
  return (
    <Work
      variants={Animation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Movie>
        <motion.h2 variants={Fade}>The Athlete</motion.h2>
        <motion.div variants={Lineanimi} className="line"></motion.div>
        <Link to={"/Ourwork/the-athlete"}>
          <Hide>
            <motion.img variants={Photoani} src={athe} alt="pic" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2>The Racer</motion.h2>
        <motion.div variants={Lineanimi} className="line"></motion.div>
        <Link to={"/Ourwork/the-racer"}>
          <Hide>
            <motion.img variants={Photoani} src={racesm} alt="pic" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={Fade}>Good Times</motion.h2>
        <motion.div variants={Lineanimi} className="line"></motion.div>
        <Link to={"/Ourwork/good-times"}>
          <Hide>
            <motion.img variants={Photoani} src={goodt} alt="pic" />
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
};
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media(max-width:1300px ){
        padding: 2rem 2rem;
        object-fit: scale-down;

    }
    
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
      @media(max-width:1500px ){
       img{object-fit: cover;
      object-position:center} 
      }
      
    }
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
// color div animation works-------------------

export default Ourwork;
