import Container from "@/common_component/container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Section81 = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
        },
      });
      tl.from(".first", {
        duration: 0.5,
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
      })
        .from(".second", {
          duration: 0.5,
          xPercent: 100,
          opacity: 0,
          stagger: 0.1,
        })
        .from(".third", {
          duration: 0.5,
          yPercent: 100,
          opacity: 0,
          stagger: 0.1,
        });
    },
    { dependencies: [] }
  );

  return (
    <Container>
      <div
        className=" md:mt-40 text-white w-full flex flex-col mb-20 md:mb-0"
        ref={containerRef}
      >
        <div className="w-full flex items-center justify-center flex-col gap-2 ">
          <h2 className="text-5xl font-semibold text-center">
            Join the community
          </h2>
        </div>
        <div className="grid grid-cols-12 w-full mt-28 gap-6">
          <div className="col-span-12 md:col-span-4  min-h-56 rounded-3xl overflow-hidden first">
            <img
              src="/assets/home/section81/811.svg"
              alt="1"
              className="h-56 w-full object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-4  min-h-56 rounded-3xl overflow-hidden relative flex justify-center items-center border border-white/20 first">
            <img
              src="/assets/home/section81/812.svg"
              alt="1"
              className="h-56 absolute right-0"
            />
            <div className="text-center">
              <p className="font-semibold text-4xl">10+</p>
              <p className="font-light text-xl">Offline Events</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4  min-h-56 rounded-3xl overflow-hidden first">
            <img
              src="/assets/home/section81/813.svg"
              alt="1"
              className="h-56 w-full object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-3  min-h-56 rounded-3xl overflow-hidden relative second">
            <img
              src="/assets/home/section81/814.svg"
              alt="1"
              className="h-56 w-full  object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-3  min-h-56 rounded-3xl overflow-hidden relative flex items-center justify-center second border border-white/20 ">
            <img
              src="/assets/home/section81/815.svg"
              alt="1"
              className="h-56 w-full absolute -bottom-20 right-32 "
            />
            <div className="text-center">
              <p className="font-semibold text-4xl">100k+</p>
              <p className="font-light text-xl">Testnet Intraction</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3  min-h-56 rounded-3xl overflow-hidden second">
            <img
              src="/assets/home/section81/816.svg"
              alt="1"
              className="h-56 w-full  object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-3  min-h-56 rounded-3xl overflow-hidden relative flex items-center justify-center second">
            <img
              src="/assets/home/section81/817.svg"
              alt="1"
              className="h-56 w-full opacity-40 absolute"
            />
            <div className="text-center relative z-10">
              <p className="font-semibold text-4xl">100k+</p>
              <p className="font-light text-xl">Testnet Intraction</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3  min-h-56 rounded-3xl overflow-hidden third">
            <img
              src="/assets/home/section81/818.svg"
              alt="1"
              className="h-56 w-full object-cover "
            />
          </div>
          <div className="col-span-12 md:col-span-3  min-h-56 rounded-3xl overflow-hidden third">
            <img
              src="/assets/home/section81/819.svg"
              alt="1"
              className="h-56 w-full  object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-6  min-h-56 rounded-3xl overflow-hidden third">
            <img
              src="/assets/home/section81/820.svg"
              alt="1"
              className="h-56 w-full  object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section81;
