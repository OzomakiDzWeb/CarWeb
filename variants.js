export const fadeIn = (derection, delay) => {
  return {
    hidden: {
      y: derection === "up" ? 80 : derection === "down" ? -80 : 0,
      opacity:0,
      x: derection === "left" ? 80 : derection === "right" ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
