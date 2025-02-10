"use client";

import { TypingAnimation } from "@/components/ui/typing-text";
import Image from "next/image";
import { InfiniteMovingIcons } from "./ui/infinite-moving-icons";
import { icons } from "@/data/svg-icons";
import { useState } from "react";

export default function Hero() {
  const [typingComplete, setIsTypingComplete] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center py-10 sm:py-0 ">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center pt-[40px] sm:pt-0">
          {/* Japanese title */}
          <TypingAnimation
            onComplete={() => setIsTypingComplete(true)}
            className="text-center pt-[30px] pb-[30px] md:pt-[100px] xl:pb-[123px] xl:pt-[142px]"
          >
            わくわくを、世界へ。
          </TypingAnimation>

          {/* Main heading with icons */}
          <div className="relative px-4">
            {/* "Expand your reach in" text */}
            <div
              className={`text-[42px] md:text-[93px] 3xl:text-[124px] font-semibold tracking-normal text-center opacity-0 ${
                typingComplete ? "animate-[fadeIn_2s_ease_0.2s_forwards]" : ""
              } -mb-[20px] md:mb-[20px] leading-[100%]`}
            >
              Expand
              <br className="md:hidden" /> your reach in
            </div>

            {/* Icons - Desktop: absolute overlay */}
            <div className="hidden md:block md:absolute md:w-full md:top-1/2 md:left-0 md:-translate-y-1/2 md:z-10">
              <div className="flex justify-center items-center gap-[30px] w-full px-4">
                {icons.map((icon, index) => (
                  <Image
                    key={index}
                    src={icon.src}
                    className={`w-auto h-[100px] opacity-0`}
                    style={{
                      animation: typingComplete
                        ? `fadeIn 2s ease ${2.5 + index * 0.5}s forwards`
                        : "none",
                    }}
                    alt={icon.alt}
                    width={120}
                    height={120}
                  />
                ))}
              </div>
            </div>

            {/* Mobile: Moving icons */}
            <div className="block md:hidden">
              <InfiniteMovingIcons
                items={icons}
                direction="left"
                speed="fast"
                className={`opacity-0 ${
                  typingComplete ? "animate-[fadeIn_2s_ease_2.5s_forwards]" : ""
                }`}
              />
            </div>

            {/* "Asia and Europe" text */}
            <div
              className={`text-[42px] md:text-[93px] 3xl:text-[124px] font-semibold tracking-normal text-center opacity-0 ${
                typingComplete ? "animate-[fadeIn_2s_ease_1.2s_forwards]" : ""
              } -mt-[28px] md:mt-[40px] relative z-0 leading-[100%]`}
            >
              Asia and Europe.
            </div>
          </div>

          {/* Japanese description */}
          <p className="text-base sm:text-2xl text-center mt-[40px] md:mt-[150px] mx-5 font-semibold leading-[180%] tracking-[5%] whitespace-normal">
            SEAN諸国、欧州に拠点を持ち、
            <br />
            現地でのイベントやプロモーションをプランニング・プロデュースします。
          </p>

          {/* Information section */}
          <div className="bg-white border border-black rounded-full w-[calc(100%-40px)] py-1 pl-[16px] pr-[31px] sm:px-[15px] mt-[34px] px-5 max-w-[900px] drop-shadow-[0_0_20px_rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center gap-[2px] text-semibold-12 tracking-normal border-none sm:px-15 w-full text-[10px] sm:text-xs [mask-image:linear-gradient(to_right,white_80%,transparent_100%)] sm:[mask-image:none]">
                information
                <div className="w-[1px] h-[24px] bg-[#D9D9D9] mx-2 hidden sm:block" />
                <div className="overflow-hidden whitespace-nowrap">
                  <p className="text-[18px] md:text-[24px] xl:text-[14px] tracking-[10%] font-medium max-sm:animate-marquee">
                    クアラルンプールで弊社がプランニングを手掛けた盆踊り大会が行われました。
                  </p>
                </div>
              </div>
              <div className="ml-2 block sm:hidden">→</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
