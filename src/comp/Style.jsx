import { motion } from "framer-motion";
import styled from "styled-components";
// style
 export  const About = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: white;
  @media(max-width:1300px ){
        display: block;
        padding: 2rem 2rem;
        text-align: center;

    }

`;
export  const Describtion = styled.div`
z-index: 2;
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media(max-width:1300px ){
        
        padding:0;
        button{
          margin: 2rem 0rem 5rem 0rem;
        }
        

    }
`;
export  const Image = styled(motion.div)`
  flex: 1;
  z-index: 2;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export   const Hide=styled.div`
  overflow: hidden;
 
`