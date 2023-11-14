import React from "react";
import { motion } from "framer-motion";
import { Animation,Titleanimi } from "./animation/Animaton";
import styled from "styled-components";
const Contactus = () => {
  return (
    <Styledcon
      variants={Animation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      
      <Titile>
        <Hide>
          <motion.h2 variants={Titleanimi}>Get in Touch..</motion.h2>
        </Hide>
      </Titile>
      <div>
        <Social variants={Titleanimi}>
        <Circle></Circle>
        <h2>Send us a Message</h2>
        </Social>
        <Social variants={Titleanimi}>
        <Circle></Circle>
        <h2>Social media</h2>
        </Social>
        <Social variants={Titleanimi}>
        <Circle></Circle>
        <h2>Send Email</h2>
        </Social>
      </div>
    </Styledcon>
  );
};
const Styledcon=styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  background-color: white;
  @media(max-width:1500px ){
       font-size: 1rem;
        padding: 2rem;
        

    }
`
const Titile=styled.div`
  margin-bottom: 4rem;
  color: black;
`
const Hide=styled.div`
  overflow: hidden;
`
const Social=styled(motion.div)`
  display: flex;
  align-items: center;
  h2{
    margin: 2rem;
  }
`
const Circle=styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
`

export default Contactus;
