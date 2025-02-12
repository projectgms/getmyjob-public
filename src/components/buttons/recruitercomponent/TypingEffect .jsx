import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingEffect = ({ text, delay = 50, loopDelay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);

        // Reset text after a delay to loop again
        setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
        }, loopDelay); // Delay before restarting typing
      }
    }, delay);

    return () => clearInterval(interval);
  }, [index, text, delay, loopDelay]);

  return <motion.span className="inline-block">{displayedText}</motion.span>;
};

export default TypingEffect;
