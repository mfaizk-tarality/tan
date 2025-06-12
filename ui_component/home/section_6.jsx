import Container from "@/common_component/container";
import { useGSAP } from "@gsap/react";
import {
  IconAssembly,
  IconBrandCohost,
  IconBrandFeedly,
  IconDeviceTabletCode,
  IconHierarchy,
  IconTimeDuration0,
} from "@tabler/icons-react";
import gsap from "gsap";
import React, { useRef } from "react";
import { FaBeer } from "react-icons/fa";

const cardData = [
  {
    title: "EVM compatible",
    subtitle: "Your code works here. No extra hoops, no headaches.",
    Icon: IconAssembly,
  },
  {
    title: "Dev-first tooling",
    subtitle:
      "From docs to dashboards, everything’s built for clarity and speed.",
    Icon: IconDeviceTabletCode,
  },
  {
    title: "Community-led",
    subtitle: "Shaped by its builders, validators, and users.",
    Icon: IconBrandCohost,
  },
  {
    title: "BPoS Consensus",
    subtitle: "Our Block Per Reward model aligns incentives with uptime.",
    Icon: IconBrandFeedly,
  },
  {
    title: "Trust, by default",
    subtitle: "Secure, audited, and made for peace of mind.",
    Icon: IconTimeDuration0,
  },
  {
    title: "Nothing to hide",
    subtitle: "Transparent tokenomics. Public governance. Always accountable.",
    Icon: IconHierarchy,
  },
];

const Section6 = () => {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from(".sect6Card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
      },
      yPercent: 500,
      opacity: 1,
      stagger: 0.1,
    });
  });

  return (
    <Container className={"overflow-hidden bg-transparent"}>
      <div
        className="w-full flex items-center justify-center mt-40"
        ref={containerRef}
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-white text-center md:w-[50%]">
          Built Different. Built for Builders.
        </h2>
      </div>
      <div className="grid grid-cols-12 w-full gap-4 mt-20">
        {cardData?.map((item, idx) => {
          return (
            <div
              className="col-span-12 md:col-span-4 min-h-52 border border-[#352b3b]/50 rounded-xl p-6 flex flex-col gap-2 sect6Card "
              key={idx}
              style={{
                background:
                  "linear-gradient(164deg, rgba(8, 8, 8, 0.04) 0%, rgba(87, 30, 94, 0.35) 100%)",
              }}
            >
              <div
                style={{
                  boxShadow: "inset 0px 0px 10px -3px  rgb(232, 121, 249)",
                }}
                className="h-10 w-10 flex items-center justify-center rounded-lg"
              >
                <item.Icon size={20} color="#f0abfc" />
              </div>
              <p className="text-white mt-4">{item?.title}</p>
              <p className="text-white/50">{item?.subtitle}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Section6;
