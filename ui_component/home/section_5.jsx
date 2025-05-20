import Container from "@/common_component/container";
import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
const reviews = [
  {
    img: "/assets/crypto/bnb.svg",
  },
  {
    img: "/assets/crypto/usdt.svg",
  },
  {
    img: "/assets/crypto/btc.svg",
  },
];

const secondRow = reviews.slice(reviews.length / 2);
const Section5 = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 mt-40">
        <div className="col-span-12 md:col-span-6">
          <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
            <Marquee pauseOnHover vertical className="[--duration:5s]">
              {secondRow.map((review, idx) => (
                <ReviewCard
                  key={idx}
                  {...review}
                  bg={"linear-gradient(180deg,#65556626 41%,#5c285e99 147%)"}
                  borderColor={"rgba(174, 47, 194, .25)"}
                />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover vertical className="[--duration:5s]">
              {secondRow.map((review, idx) => (
                <ReviewCard
                  key={idx}
                  {...review}
                  bg={"linear-gradient(180deg,#0000,#4a4173 180%)"}
                  borderColor={"rgba(100, 16, 227, .3)"}
                />
              ))}
            </Marquee>
            <Marquee pauseOnHover vertical className="[--duration:5s]">
              {secondRow.map((review, idx) => (
                <ReviewCard
                  key={idx}
                  {...review}
                  bg={"linear-gradient(180deg,#65556626 41%,#5c285e99 147%)"}
                  borderColor={"rgba(174, 47, 194, .25)"}
                />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover vertical className="[--duration:5s]">
              {secondRow.map((review, idx) => (
                <ReviewCard
                  key={idx}
                  {...review}
                  bg={"linear-gradient(180deg,#0000,#4a4173 180%)"}
                  borderColor={"rgba(100, 16, 227, .3)"}
                />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 "></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4"></div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 flex items-center justify-center mt-20 md:mt-0">
          <p className="text-white text-3xl md:text-6xl font-bold md:w-[80%]">
            60 Blockchains Data
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Section5;

const ReviewCard = ({ img, bg, borderColor }) => {
  return (
    <div
      className={cn(
        "relative h-28 w-28 flex items-center justify-center  cursor-pointer overflow-hidden rounded-xl border"
      )}
      style={{
        background: bg,
        borderColor: borderColor,
      }}
    >
      <img className="rounded-full" width="32" height="32" alt="" src={img} />
    </div>
  );
};
