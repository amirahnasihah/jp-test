"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Position {
  x: number;
  y: number;
}

export const FollowerPointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    // Calculate position relative to the component
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={cn("relative", className)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="pointer-events-none absolute z-50"
            style={{
              left: position.x,
              top: position.y,
              translateX: "-70%",
              translateY: "-60%",
            }}
          >
            <div className="relative w-[240px] h-[240px]">
              <motion.div
                className="absolute inset-0 rounded-full border border-black bg-white/80 backdrop-blur-[8px]"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-[13px] leading-[100%] font-regular tracking-[5%]">
                {title || "View More"}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};
