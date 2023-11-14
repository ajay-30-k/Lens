import React from "react";
import Aboutus from "./pages/Aboutus";
import Service from "./pages/Service";
import Faq from "./pages/Faq";
import { motion } from "framer-motion";
import { Animation } from "./animation/Animaton";

const About = () => {
  return (
    <motion.div variants={Animation} initial="hidden" animate="show">
      <Aboutus />
      <Service />
      <Faq />
    </motion.div>
  );
};
export default About;
