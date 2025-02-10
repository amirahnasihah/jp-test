"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CarouselIcons } from "@/components/ui/CarouselIcons";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <motion.div
        className="text-[124px] font-bold fade-in"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.div>
      <motion.div
        className="text-2xl fade-in"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Oops...
      </motion.div>
      <motion.div
        className="text-lg fade-in"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Page not found
      </motion.div>
      <motion.div
        className="fade-in"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link href="/" className="text-blue-500 underline">
          Return Home
        </Link>
      </motion.div>
      <CarouselIcons />
    </div>
  );
}
