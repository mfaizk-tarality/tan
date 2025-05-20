import Container from "@/common_component/container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { FaBeer } from "react-icons/fa";

const cardData = [
  {
    title: "Real-Time Insights",
    subtitle:
      "Access blockchain data in real-time to make timely and informed decisions.",
    Icon: FaBeer,
  },
  {
    title: "Data Integrity",
    subtitle:
      "Trust in validated and consistent data for all your blockchain needs.",
    Icon: FaBeer,
  },
  {
    title: "Developer-Friendly",
    subtitle:
      "Enjoy robust APIs and tools for seamless integration and customization.",
    Icon: FaBeer,
  },
  {
    title: "Cross-Network Coverage",
    subtitle:
      "Support for 60+ networks ensures comprehensive blockchain analytics.",
    Icon: FaBeer,
  },
  {
    title: "Scalable Solutions",
    subtitle:
      "Seamlessly scale with our adaptable infrastructure for growing demands.",
    Icon: FaBeer,
  },
  {
    title: "Enhanced Security",
    subtitle:
      "Protect sensitive blockchain data with top-tier encryption and protocols.",
    Icon: FaBeer,
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
          Effortlessly Accessing Real-Time Insights from Blockchain
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
