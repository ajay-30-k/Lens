import React from "react";
import { motion } from "framer-motion";
import home1 from "../img/home1.png";
import { Titleanimi,Fade ,Photoani } from "../animation/Animaton";
import Wave from "../Wave";
import { About, Describtion, Hide, Image } from "../Style";

const Aboutus = () => {
  return (
    <About>
      <Describtion>
        <motion.div>
          <Hide>
            <motion.h2 variants={Titleanimi}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={Titleanimi}>
              your <span>dream</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={Titleanimi}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={Fade}>
          Contact us for any photograpy and videograpy ideas that you have. We
          have professional with amazing skills.
        </motion.p>
        <motion.button variants={Fade}>Contact us</motion.button>
      </Describtion>
      <Image >
        <motion.img variants={Photoani} src={home1} alt="home" />
      </Image>
      <Wave  />
    </About>
  );
};

export default Aboutus;
