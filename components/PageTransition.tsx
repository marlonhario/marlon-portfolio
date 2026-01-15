"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const PageTransition = ({ children }: { children: React.ReactNode }) => {

  return (
    <AnimatePresence >
      <div className="px-8 pb-12 2xl:px-24">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
