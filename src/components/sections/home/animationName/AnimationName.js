import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function AnimationName() {
  const text = "HAYAT M.";

  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStep(1);
    }, 500); // Step 1: Characters appear

    const timer2 = setTimeout(() => {
      setStep(2);
    }, 3200); // Step 2: Characters disappear and rotate

    const timer3 = setTimeout(() => {
      setStep(3);
    }, 6400); // Step 3: Characters reappear and remain still

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div>
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="600" height="90">
        {text.split("").map((char, index) => (
          <motion.text
            key={index}
            x={index * 44}
            y="80"
            fontSize="40"
            fontFamily="Lucida Console"
            fill="transparent"
            stroke="#2F4F4F"
            strokeWidth="3"
            initial={{ opacity: 0, y: -200, rotate: 0 }}
            animate={
              step === 1
                ? { opacity: 1, y: 0, rotate: 0 }
                : step === 2
                ? { opacity: 0, y: -50, rotate: 520 }
                : { opacity: 1, y: 0, rotate: 0 }
            }
            transition={{ delay: index * 0.5 }}
          >
            {char}
          </motion.text>
        ))}
      </motion.svg>
    </div>
  );
}

export default AnimationName;
