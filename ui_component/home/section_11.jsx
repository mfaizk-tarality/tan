import Container from "@/common_component/container";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import React from "react";

const Section11 = () => {
  return (
    <Container>
      <div className={"relative flex justify-center items-center h-80  mt-40"}>
        <div
          className="flex items-center justify-center absolute z-20"
          style={{
            mask: "radial-gradient(34% 50% at 45.4% 47%, rgba(0, 0, 0, 0) 18.1869%, rgb(0, 0, 0) 100%)",
          }}
        >
          <div className="h-80 w-0 md:w-5xl  rounded-xl  relative overflow-hidden md:border border-white/40   my-20 flex items-start justify-start">
            <img src="/assets/home/bg-dot.png" alt="" className="absolute" />
            <img
              src="/assets/home/sect11.avif"
              alt=""
              className="bg-blue-800 absolute right-0 w-2xl"
            />
          </div>
        </div>
        <div className="absolute z-50 h-full flex text-white justify-center w-full mdw-5xl ">
          <div className="w-full h-full flex justify-center items-center absolute flex-col text-center gap-4">
            <h2 className="text-5xl font-semibold">
              Empower Your Web3 <br /> Journey
            </h2>
            <p>
              Join Nodi to access real-time blockchain data and unlock new{" "}
              <br />
              opportunities in the Web3 era.
            </p>
            <button className="cursor-pointer px-4 py-2 rounded-md border-[1px] text-black font-medium group bg-[#e0dedd] w-52">
              <div className="relative overflow-hidden flex items-center justify-center">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-sm font-medium">
                  Get Started
                </p>
                <p className="absolute top-7 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-sm font-medium">
                  Get Started
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section11;
