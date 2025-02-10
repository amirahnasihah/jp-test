"use client";
import { useState } from "react";

export default function ShowAllButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-[42px] font-bold">Show All</div>

      {/* Circle overlay */}
      <div
        className={`
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[200px] h-[200px] rounded-full border border-black
          flex items-center justify-center
          transition-opacity duration-300
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
      >
        <span className="text-lg">サービス一覧</span>
      </div>
    </div>
  );
}
