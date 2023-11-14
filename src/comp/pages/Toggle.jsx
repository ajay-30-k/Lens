import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <motion.div layout onClick={() => setToggle(!toggle)}>
      <StyledH4 layout >{title}</StyledH4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div >
  );
};

const StyledH4 = styled(motion.h4)`
  color: white;
`;

export default Toggle;
