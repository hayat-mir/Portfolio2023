import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const charVariants = {
  hidden: { opacity: 1, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0, type: "spring", stiffness: 120 },
  },
  exit: { opacity: 0, y: 20, rotate: 0 }, // Add an exit animation to reset the rotation
  dropAndRotate: {
    opacity: 1,
    y: 100, // Move the character down
    rotate: 360, // Rotate the character by 360 degrees
    transition: { duration: 4 },
  },

  returnToNormal: {
    opacity: 1,
    y: "0", // Return to the normal position
    rotate: 0,

    // Reset rotation
    transition: { duration: 0.5 },

    y: 0,
  },
};

const wordVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0 } },
};

function AnimationName() {
  const text = "HAYAT M.";

  const [shouldRotate, setShouldRotate] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // After the initial animation, trigger rotation and drop
    setTimeout(() => {
      setShouldRotate(true);

      // Start the dropAndRotate animation
      controls.start("dropAndRotate").then(() => {
        // After dropAndRotate, return to normal position
        controls.start("returnToNormal");
      });
    }, (text.length - 1) * 0.1 * 600); // Delay should match the total animation duration
  }, []);

  return (
    <div>
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="600" height="80">
        {text.split("").map((char, index) => (
          <motion.text
            key={index}
            x={index * 40} // Adjust the x position for each character
            y="80" // Adjusted to keep the text visible initially
            fontSize="40"
            fill="transparent"
            stroke="black"
            fill="black"
            strokeWidth="6"
            variants={charVariants}
            initial="hidden"
            animate={shouldRotate ? "exit" : "visible"} // Rotate after initial animation
            exit="exit" // Ensure exit animation resets the rotation
            custom={index}
            animate={controls}
          >
            {char}
          </motion.text>
        ))}
      </motion.svg>
    </div>
  );
}

export default AnimationName;
