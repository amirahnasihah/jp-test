import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { countries } from "@/data/country-flag";
import { FollowerPointerCard } from "./ui/following-pointer";

export default function AboutUs() {
  return (
    <section className="relative pt-28 pb-[150px] md:pb-[178px]">
      <div className="container mx-auto px-5 mt-[200px] max-sm:mt-[140px] grid grid-cols-1 sm:grid-cols-[1fr,auto] gap-x-[100px] gap-[40px]">
        <div className="flex flex-col gap-8">
          <h2 className="font-semibold text-[20px] md:text-[24px] xl:text-[32px] leading-[120%]">
            Who we are
          </h2>
          <div className="flex flex-col gap-[30px]">
            <p className="font-semibold xl:text-[40px] md:text-[30px] text-[24px] tracking-normal leading-[120%]">
              With offices in Tokyo, Osaka, and Southeast Asia and Europe, we
              leverage strong local relations to plan and produce numerous
              promotions and events for public sector and Japanese companies.
            </p>
            <p className="font-regular text-[14px] md:text-[18px] xl:text-[24px] leading-[180%] tracking-[5%] font-japanese">
              私たちは東京、大阪、海外は東南アジアとフランスに拠点を展開しています。日系企業、政府機関、自治体、各種団体などの海外における広告、マーケティングプロモーション、各種イベントを企画から実施運営までトータルにサポートします。
            </p>
            <div className="flex flex-wrap gap-4 md:gap-5 items-center justify-center md:justify-start">
              {countries.map(({ code, name }) => (
                <Image
                  key={code}
                  src={`https://flagcdn.com/w80/${code.toLowerCase()}.png`}
                  alt={`${name} flag`}
                  width={40}
                  height={30}
                  quality={100}
                  className="w-[34px] md:w-[44px] h-[22px] md:h-[30px]"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end justify-end">
          <FollowerPointerCard title="AABについて">
            <Link
              href="#"
              className="flex flex-col items-end justify-end gap-1 w-fit"
            >
              <p className="text-[40px] md:text-[42px] xl:text-[56px] leading-[100%] font-semibold tracking-[-2%]">
                About Us
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
    </section>
  );
}
