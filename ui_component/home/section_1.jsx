"use client";

import Container from "@/common_component/container";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const Section1 = () => {
  const containerRef = useRef();
  const heading = useRef();
  const title = useRef();
  const subTitle = useRef();
  const videoBox = useRef();
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
        },
      });
      tl.from(heading.current, { duration: 0.5, yPercent: 100, opacity: 0 })
        .from(title.current, { duration: 0.5, yPercent: 100, opacity: 0 })
        .from(subTitle.current, { duration: 0.5, yPercent: 100, opacity: 0 })
        .from(
          videoBox.current,
          { duration: 1, xPercent: 100, opacity: 0 },
          "-=1"
        );
    },
    { dependencies: [] }
  );
  return (
    <Container>
      <div className="grid grid-cols-6 overflow-hidden" ref={containerRef}>
        <div className="col-span-6 md:col-span-3 relative flex items-center justify-center">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
          <div className="flex flex-col gap-4 items-center md:items-start relative z-10">
            {/* <h6
              className={`text-regal-purple font-medium text-xl`}
              ref={heading}
            >
              Connect
            </h6> */}
            <h4
              className="text-white text-5xl font-bold text-center md:text-start split"
              ref={title}
            >
              Fast, low-cost, and final.
            </h4>
            <p
              className="text-white/80 w-full md:w-[80%] text-center md:text-start split"
              ref={subTitle}
            >
              Transactions confirmed in seconds. Fees that stay low. Through
              bull and bear.
            </p>
            <Link
              scroll
              href={"/section/fast"}
              className="cursor-pointer px-4 py-2 rounded-md border-[1px] text-black font-medium group bg-[#e0dedd] w-32"
            >
              <div className="relative overflow-hidden flex items-center justify-center">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-sm font-medium">
                  Learn More
                </p>
                <p className="absolute top-7 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-sm font-medium">
                  Learn More
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 justify-center items-center ">
          <video
            playsInline
            preload="auto"
            autoPlay
            muted
            loop
            className="h-[500px] w-full"
            ref={videoBox}
          >
            <source src="/assets/home/sect1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </Container>
  );
};

export default Section1;
