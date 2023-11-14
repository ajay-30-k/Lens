import React from "react";
import styled from "styled-components";
import { About } from "../Style";
import Toggle from "./Toggle";
import { AnimateSharedLayout,LayoutGroup } from "framer-motion";

const Faq = () => {
  return (
    <FAQ>
      <div>
      <h2>
        Any question? <span>FAQ</span>
      </h2>
      <LayoutGroup>
      <Toggle title="How do i start?">
      <div  className="question">
        
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            a.
          </p>
        </div>
      </div>
      </Toggle>
      <Toggle title="Daily schedule.">
      <div  className="question">
        
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            a.
          </p>
        </div>
        </div>
        </Toggle>
        <Toggle title="What product do you offer.">
        <div  className="question">
          <h4></h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              a.
            </p>
          </div>
          
        </div>
        </Toggle>
        </LayoutGroup>
      </div>
    </FAQ>
  );
};
const FAQ = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    width: 100%;
    margin: 2rem 0rem;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default Faq;
