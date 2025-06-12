import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <video
        playsInline
        preload="auto"
        autoPlay
        muted
        loop
        className="min-h-screen min-w-[90vw] absolute top-0"
      >
        <source src="/assets/home/hero.mp4" type="video/mp4" />
      </video>
      <div className="min-h-[600px] md:min-h-screen w-full flex items-center justify-center z-10 backdrop-blur-xs flex-col gap-6 ">
        <div>
          <h1 className="text-white text-3xl md:text-6xl font-bold text-center">
            The Anti-Inflation Chain
          </h1>
          <p className="text-white text-center font-normal text-sm md:text-lg">
            TAN is a Layer-1 blockchain designed for builders and believers.
            Built for scale and scarcity, with <br /> Inflation Protection at
            the protocol level, TAN is where powerful ideas go live.
          </p>
        </div>

        <div className="flex flex-row gap-6">
          <button className="cursor-pointer px-4 py-2 rounded-md border-[1px] text-black font-medium group bg-[#e0dedd]">
            <div className="relative overflow-hidden">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-sm font-medium">
                Start Building
              </p>
              <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-sm font-medium">
                Start Building
              </p>
            </div>
          </button>
          <button className="cursor-pointer px-4 py-2 rounded-md border-[1px] text-white font-medium group bg-[#e0dedd]/20 backdrop-blur-3xl">
            <div className="relative overflow-hidden">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-sm font-medium">
                Learn More
              </p>
              <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-sm font-medium">
                Learn More
              </p>
            </div>
          </button>
        </div>
        <div className="flex w-fit md:gap-10 flex-col md:flex-row mt-8 md:mt-0">
          <div className="flex flex-row items-center justify-center md:mb-10">
            <AnimatedTooltip items={people} />
          </div>
          <p className="text-white/80 mt-2">Trusted and backed by teams at</p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
