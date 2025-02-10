"use client";

import * as React from "react";
import Image from "next/image";
import { icons } from "@/data/svg-icons";

export function CarouselIcons() {
  return (
    <div className="relative overflow-hidden w-full max-w-md mx-auto">
      <div className="flex animate-infinite-scroll">
        {[...icons, ...icons].map((icon, index) => (
          <div
            key={index}
            className="flex-shrink-0 p-1 md:basis-1/2 lg:basis-1/3"
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={120}
              height={120}
              className="h-[100px] w-[100px] sm:w-[120px] mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
