"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";


const Typewriter = ({
  text,
  texts,
  speed = 50,
  eraseSpeed = 30,
  delay = 0,
  pause = 1000,
  className = "",
  ...props
}) => {
  const phrases = useMemo(() => texts || (text ? [text] : []), [texts, text]);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;
    let timeout;
    const currentPhrase = phrases[phraseIndex];

    if (!isErasing && charIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (!isErasing && charIndex === currentPhrase.length) {
      timeout = setTimeout(() => setIsErasing(true), pause);
    } else if (isErasing && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, eraseSpeed);
    } else if (isErasing && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsErasing(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isErasing, phraseIndex, phrases, speed, eraseSpeed, pause]);

  useEffect(() => {
    setCharIndex(0);
    setDisplayedText("");
    setIsErasing(false);
  }, [phraseIndex, phrases]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...props}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </motion.span>
  );
};

export default Typewriter;
