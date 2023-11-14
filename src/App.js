import React from "react";
import About from "./comp/About";
import Globalstyle from "./comp/Globalstyle";
import { Route,Routes,useLocation} from "react-router-dom";
import Nav from "./comp/Nav";
import Contactus from "./comp/Contactus";
import Ourwork from "./comp/Ourwork";

import Moviedetails from "./comp/Moviedetails";
// animation ------------
import { AnimatePresence } from "framer-motion";
function App() {
  const location=useLocation()
  return (
    <div className="App">
      <Globalstyle />
      <Nav />
      <AnimatePresence mode="wait">
      <Routes location={location}key={location.pathname}>
        
      <Route path="/"  element={<About />} />
        
        <Route path="/Ourwork"element={ <Ourwork />}></Route>
        <Route path="/Ourwork/:id" element={<Moviedetails />}></Route>
        <Route path="/Contactus" element={<Contactus/>}></Route>
        
      </Routes>
      </AnimatePresence>
       
      
      
    </div>
  );
}

export default App;
