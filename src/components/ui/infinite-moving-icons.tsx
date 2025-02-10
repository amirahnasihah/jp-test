"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

import React, { useEffect, useState } from "react";

export const InfiniteMovingIcons = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  className,
  onComplete,
}: {
  items: {
    src: string;
    alt: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  onComplete?: () => void;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      getDirection();
      getSpeed();
      setStart(true);
      onComplete?.();
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "5s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative overflow-hidden w-full max-w-sm mx-auto block md:hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-0",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 md:basis-1/2 lg:basis-1/3"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={120}
              height={120}
              className="h-[100px] w-[100px] sm:w-[120px] mx-auto"
            />
          </div>
        ))}
        {items.map((item, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 md:basis-1/2 lg:basis-1/3"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={120}
              height={120}
              className="h-[100px] w-[100px] sm:w-[120px] mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
