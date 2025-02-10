"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: string;
  subtitle?: string;
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
);

export const LinkPreview = ({
  children,
  url,
  className,
  width = 400,
  height = 400,
  quality = 50,
  layout = "fixed",
  isStatic = false,
  imageSrc = "",
  subtitle = "",
}: LinkPreviewProps) => {
  let src;
  if (!isStatic) {
    src = `#`;
  } else {
    src = imageSrc;
  }

  const [isOpen, setOpen] = React.useState(false);

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const translateX = useSpring(x, springConfig);
  const translateY = useSpring(y, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const targetRect = (event.target as HTMLElement).getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const eventOffsetY = event.clientY - targetRect.top;

    const offsetFromCenterX = (eventOffsetX - targetRect.width / 2) / 2;
    const offsetFromCenterY = (eventOffsetY - targetRect.height / 2) / 2;

    x.set(offsetFromCenterX);
    y.set(offsetFromCenterY);
  };

  return (
    <>
      {isMounted ? (
        <div className="hidden">
          <Image
            src={src}
            width={width}
            height={height}
            quality={quality}
            layout={layout}
            priority={true}
            alt="hidden image"
          />
        </div>
      ) : null}

      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open) => {
          setOpen(open);
        }}
      >
        <HoverCardPrimitive.Trigger
          onMouseMove={handleMouseMove}
          className={cn("text-black dark:text-white", className)}
          href={url}
        >
          {children}
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Content
          className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
          side="top"
          align="end"
          sideOffset={10}
          alignOffset={0}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key={url}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: {
                    duration: 0.2,
                    ease: "easeIn",
                  },
                }}
                className="shadow-xl rounded-xl"
                style={{
                  x: translateX,
                  y: translateY,
                }}
              >
                <Link
                  href={url}
                  className="block bg-white border-transparent shadow-2xl rounded-[10px] hover:border-neutral-200 dark:hover:border-neutral-800 relative"
                  style={{ fontSize: 0 }}
                >
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="relative w-[80px] h-[80px]">
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
                      <div className="absolute inset-0 flex items-center justify-center text-[13px] leading-[120%] font-regular tracking-[5%] whitespace-pre-line">
                        {subtitle}
                      </div>
                    </div>
                  </div>
                  <Image
                    src={isStatic ? imageSrc : src}
                    width={width}
                    height={height}
                    quality={quality}
                    layout={layout}
                    priority={true}
                    className="rounded-lg 2xl:w-[707px] 2xl:h-[453px]"
                    alt="preview image"
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  );
};
