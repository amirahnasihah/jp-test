import Image from "next/image";
import Marquee from "./marquee";

interface Logo {
  name: string;
  image: string;
}

interface LogosProps {
  data: Logo[];
}

function LogoCard({ logo: { image, name } }: { logo: Logo }) {
  return (
    <div className="mx-6 flex items-center justify-center" key={name}>
      <Image
        src={image}
        alt={name}
        className="h-[25px] md:h-[35px] w-auto object-contain"
        width={180}
        height={35}
        style={{ maxWidth: "none" }}
      />
    </div>
  );
}

export default function ScrollingLogos({ data }: LogosProps) {
  // Divide the data into three parts
  const part1 = data.slice(0, Math.ceil(data.length / 3));
  const part2 = data.slice(
    Math.ceil(data.length / 3),
    Math.ceil((data.length * 2) / 3)
  );
  const part3 = data.slice(Math.ceil((data.length * 2) / 3));

  return (
    <div className="w-full flex flex-col gap-[15px] md:gap-[30px] items-center justify-center">
      <Marquee className="[--duration:70s]" applyMask={false}>
        {part1.map((logo) => (
          <LogoCard key={logo.name} logo={logo} />
        ))}
      </Marquee>

      <Marquee reverse className="[--duration:70s]" applyMask={false}>
        {part2.map((logo) => (
          <LogoCard key={logo.name} logo={logo} />
        ))}
      </Marquee>

      <Marquee className="[--duration:70s]" applyMask={false}>
        {part3.map((logo) => (
          <LogoCard key={logo.name} logo={logo} />
        ))}
      </Marquee>
    </div>
  );
}
