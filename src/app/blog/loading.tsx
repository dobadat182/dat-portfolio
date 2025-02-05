"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="flex h-screen items-center justify-center bg-white dark:bg-zinc-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }} // Hiệu ứng fade out
          transition={{ duration: 0.5 }}
        >
          <motion.div className="flex space-x-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="h-4 w-4 rounded-full bg-blue-500"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
