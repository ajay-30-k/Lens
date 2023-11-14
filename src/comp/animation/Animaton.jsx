export const Animation = {
  hidden: {
    opacity: 0,
    y: 300,
    transition: { duration: 0.5,  },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "afterChildren",
      staggerChildren: 0.2,
    },
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
export const Titleanimi = {
  hidden: { y: 200 },
  show: { y: 0, transition: { duration: 1, ease: "easeOut" } },
};
export const Fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { ease: "easeOut", duration: 2 } },
};
export const Photoani = {
  hidden: { scale: 1.7 },
  show: { scale: 1, transition: { ease: "easeInOut", duration: 0.75 } },
};
export const Wavean = {
  hidden: {
    opacity: 0,
    y: 300,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 1,
    },
    transition: { duration: 1, ease: "easeOut" },
  },
};
export const Lineanimi = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: { duration: 2, ease: "easeOut" },
  },
};
// frame animation---------------------
export const Slider = {
  hidden: { x: "-130%",  },
  show: { x: "100%", 
  transition: {
    ease: "easeOut",
    duration: 2.5,
  } },
  
};
export const Slidercon={
  
  hidden:{opacity:1},
  show:{
    opacity:1,
    transition:{staggerChildern:1,ease:"easeOut"}
  }
}
