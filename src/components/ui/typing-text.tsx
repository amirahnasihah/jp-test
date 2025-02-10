"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
  onComplete?: () => void;
}

export function TypingAnimation({
  children,
  className,
  duration = 200,
  delay = 10,
  as: Component = "div",
  startOnView = false,
  onComplete,
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started || completed) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
        setCompleted(true);
        onComplete?.();
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started, completed, onComplete]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "text-6xl max-sm:text-2xl font-semibold leading-[5rem] tracking-[8%]",
        className
      )}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
}
