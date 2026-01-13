'use client';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export default function ScrollAnimation({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={twMerge("", className)}
    >
      {children}
    </motion.div>
  );
}
