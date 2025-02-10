import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { FollowerPointerCard } from "./ui/following-pointer";
import { services } from "@/data/services";
import { LinkPreview } from "./ui/link-preview";

export default function Services() {
  return (
    <section className="pt-[80px] pb-[100px] md:py-[150px] bg-gray-50">
      <div className="container mx-auto px-5 flex flex-col gap-[100px] md:gap-[200px]">
        <div className="flex flex-col gap-5 md:gap-[55px]">
          <div className="flex flex-col gap-[20px] md:gap-[30px]">
            <p className="font-semibold text-[20px] md:text-[24px] xl:text-[32px] leading-[120%]">
              Our service menu
            </p>
            <h2 className="font-semibold text-[32px] md:text-[60px] xl:text-[80px] tracking-normal leading-[120%]">
              Our promotions are tailored to the unique characteristics of each
              target country and market.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-[30px] items-end md:items-center justify-between">
            <p className="font-regular text-[18px] md:text-[24px] xl:text-[32px] leading-[180%] tracking-[5%] md:max-w-[500px] lg:max-w-full">
              対象国や市場の特性に合わせて柔軟に最適な対応が可能です。 
            </p>

            <div className="flex flex-col items-end justify-end mt-0">
              <FollowerPointerCard title="サービス一覧">
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

        <div className="space-y-16">
          {["Promotion", "Produce"].map((category) => (
            <div
              key={category}
              className="flex flex-col md:flex-row relative gap-[50px] md:gap-[0px]"
            >
              <h3 className="font-semibold text-[52px] md:text-[24px] xl:text-[32px] leading-[120%] tracking-[0%] w-[154px] flex-shrink-0">
                {category}
              </h3>

              <div className="grid grid-cols-1 gap-[50px] md:gap-[80px] flex-grow md:pt-[40px] md:-ml-[10px]">
                {services
                  .filter((service) => service.category === category)
                  .map((service, index) => (
                    <LinkPreview
                      key={index}
                      url="#"
                      subtitle={service.subtitle}
                      imageSrc={service.image}
                      isStatic
                      className="font-bold "
                    >
                      <div className="flex items-center gap-[10px] md:gap-5 py-[14px] rounded-lg transition-colors">
                        <div className="size-[60px] md:size-[120px] flex-shrink-0">
                          <Image
                            src={service.icon}
                            alt={service.title}
                            width={120}
                            height={120}
                          />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                          <h4 className="font-semibold text-[24px] md:text-[36px] xl:text-[48px] leading-[120%] tracking-[-2%] hover:text-white hover:[-webkit-text-stroke:1px_#000000] outline-text">
                            {service.title}
                          </h4>
                          <p className="font-regular text-[12px] md:text-[18px] xl:text-[24px] leading-[100%] tracking-[5%] font-noto-sans">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </LinkPreview>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
