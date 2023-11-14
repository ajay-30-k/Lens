import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const Nav = () => {
  const {pathname}=useLocation()
  return (
    <StyNav>
      <a id="logo" href="#">LENS</a>
      <ul>
        <li>
          <Link to={"/"}>About us</Link>
          <Line transition={{duration:0.7}} initial={{width:"0%"}} animate={{width:pathname==='/'? '50%':'0%'}}/>
          </li>
          <li>
          <Link to={"/Ourwork"}>Our work</Link>
          <Line transition={{duration:0.7}} initial={{width:"0%"}} animate={{width:pathname==='/Ourwork'? '50%':'0%'}}/>
          </li>
          <li>
          <Link to={"/Contactus"}>Contact us</Link>
          <Line transition={{duration:0.7}} initial={{width:"0%"}} animate={{width:pathname==='/Contactus'? '50%':'0%'}}/>
          </li>
       
      </ul>
    </StyNav>
  );
};
const StyNav = styled.nav`
  display: flex;
  margin: auto;
  justify-content: space-between;
  min-height: 10vh;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  a{
    color: white;
    text-decoration: none;
  }
  ul{
   display: flex;
    list-style: none;
    
  }
  li{
    padding-left: 10rem;
    position: relative;
  }

  @media(max-width:1300px ){
      flex-direction: column;
      padding: 2rem 1rem ;
      #logo{
        display: inline-block;
        margin: 1rem;
      }
      ul{
        justify-content: space-around;
        padding: 2rem;
        width: 100%;
        li{
          padding:0
        }
      }

    }
  #logo{
    font-size: 1.5rem;
    font-weight: lighter;
  }
  
`;
const Line=styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 5%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media(max-width:1300px ){
    left: 0%;
  }
`
export default Nav;
