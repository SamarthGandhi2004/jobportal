import React from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

function Loading() {
  const text = ["Job", "4", "U"];

  return (
    <div className="flex items-center justify-center h-screen w-full bg-[#189d2c]">
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2.5, // Slower animation duration
            delay: i * 0.5, // Increased delay for slower sequential animation
          }}
          key={i}
          className={`font-sans text-white font-bold tracking-tight ${
            el === "4" ? "text-[250px] relative -top-10 mx-2" : "text-[280px] mx-2"
          }`}
        >
          {el}
        </motion.span>
      ))}
    </div>
  );
}

export default Loading;
