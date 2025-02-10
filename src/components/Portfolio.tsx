import Link from "next/link";
import { Button } from "./ui/button";
import ScrollingLogos from "./ui/scrolling-logos";
import { logos } from "@/data/logos";
import { FollowerPointerCard } from "./ui/following-pointer";

export default function Portfolio() {
  return (
    <section className="pt-[80px] md:pt-[150px] bg-white flex flex-col">
      <div className="container mx-auto px-4 pb-[50px] md:pb-[100px]">
        <div className="flex flex-col gap-[20px] md:gap-[70px]">
          <div className="flex flex-col gap-5 md:gap-[30px]">
            <p className="font-semibold text-[20px] md:text-[24px] xl:text-[32px] leading-[120%]">
              Our Work
            </p>
            <h2 className="font-semibold text-[32px] md:text-[60px] xl:text-[80px] tracking-normal leading-[120%] max-w-[1350px]">
              We have extensive experience in overseas promotion, working with
              public institutions and leading Japanese companies.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-[30px] items-end md:items-center justify-between">
            <p className="font-regular text-[18px] md:text-[24px] xl:text-[32px] leading-[180%] tracking-[5%] md:max-w-[500px] lg:max-w-full">
              対象国や市場の特性に合わせて柔軟に最適な対応が可能です。 
            </p>

            <div className="flex flex-col items-end justify-end mt-0">
              <FollowerPointerCard title="実績一覧">
                <Link
                  href="#"
                  className="flex flex-col items-end justify-end gap-1 w-fit"
                >
                  <p className="text-[40px] md:text-[42px] xl:text-[56px] leading-[100%] font-semibold tracking-[-2%]">
                    Show All
                  </p>

                  <Button
                    variant="link"
                    className="h-auto p-0 flex items-center gap-1.5 text-black hover:no-underline"
                  >
                    <div className="w-[30px] h-[1px] bg-black" />
                    <span className="text-xs">more</span>
                  </Button>
                </Link>
              </FollowerPointerCard>
            </div>
          </div>
        </div>
      </div>

      <ScrollingLogos data={logos} />
    </section>
  );
}
