import React from "react";
import clock from "../img/clock.svg";
import dia from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import styled from "styled-components";
import { About, Describtion, Hide, Image } from "../Style";
import { useInView } from "framer-motion";
import { useAnimation } from "framer-motion";

const Service = () => {
 
  
  

 
  return (
    <Services>
      <Describtion>
        <h2>
          High <span>quality</span>Services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet. </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={dia} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet. </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet. </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet. </p>
          </Card>
        </Cards>
      </Describtion>
      <Image>
        <img src={home2} />
      </Image>
    </Services>
  );
};
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media(max-width:1300px ){
        justify-content: center;

    }
`;
const Card = styled.div`
  .icon {
    display: flex;
    align-items: center;
    img {
      height: 3rem;
    }
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
export default Service;
