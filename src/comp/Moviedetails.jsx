import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Moviestate } from "./Moviestate";
// animation
import { motion } from "framer-motion";
import { Animation } from "./animation/Animaton";

const Moviedetails = () => {
  const history = useLocation();
  console.log(history);
  const url = history.pathname;
  const [movies, setmovies] = useState(Moviestate);
  const [movie, setmovie] = useState(null);

  // useEffect--------------------------------------------
  useEffect(() => {
    const currentmovie = movies.find((statemoive) => statemoive.url === url); // Use find instead of filter
    setmovie(currentmovie);
    console.log("im mounted");
  }, [url, movies]);
  console.log(movie);

  return (
    <>
      {movie && (
        <Details  variants={Animation}
        initial="hidden"
        animate="show"
        exit="exit">
          <Headline>
            
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="img" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <AWard
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <Imagedisplay>
            <img src={movie.secImg} alt="" />
          </Imagedisplay>
        </Details>
      )}
    </>
  );
};
const Imagedisplay=styled.div`
    min-height: 50vh;
    img{
        width:100%;
        height: 100%;
        object-fit: cover;
    }
`
const Details = styled(motion.div)`
  color: white;
  
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Styledawards=styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
        font-weight: bold;
    }
    .line{
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
    }
`
const Awards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 80vh;
  margin: 5rem 10rem;
  @media(max-width:1500px ){
        display: block;
        margin: 2rem 2rem;
        text-align: center;

    }
`;
// awrad comp----------------------
const AWard = ({ title, description }) => {
  return (
    <Styledawards>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </Styledawards>
  );
};

export default Moviedetails;
