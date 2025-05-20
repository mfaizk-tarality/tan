import Container from "@/common_component/container";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Section7 = () => {
  const containerRef = useRef();

  //   useGSAP(() => {
  //     gsap.from(".sect6Card", {
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: "top bottom",
  //       },
  //       yPercent: 500,
  //       opacity: 1,
  //       stagger: 0.1,
  //     });
  //   });
  return (
    <Container>
      <div
        className="text-white relative"
        style={{
          background:
            "radial-gradient(113% 94% at 50% 39.7%, rgb(74, 14, 78), #4a0e4e 0%,rgb(0, 0, 0), rgb(0, 0, 0) 100%)",
        }}
        ref={containerRef}
      >
        <div className="">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] -top-40"
            )}
            glow
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracki text-center pt-20 mt-10 sm:text-5xl text-white">
            Pricing Options
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-white">
            Choose the subscription plan that suits your needs
          </p>
        </div>
        <div className="mt-24 container space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="relative p-8  border border-gray-200/10 rounded-2xl shadow-sm flex flex-col bg-white/10 sect6Card">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">Free</h3>
              <p className="mt-4 flex items-baseline ">
                <span className="text-5xl font-extrabold tracking-tight ">
                  $0
                </span>
                <span className="ml-1 text-xl font-semibold text-white">
                  /month
                </span>
              </p>
              <p className="mt-6 text-white">You just want to discover</p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-white"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 text-white">10 Credits</span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 "
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">Generate video (2 credits)</span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 "
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">Quizz (1 credits) </span>
                </li>
              </ul>
            </div>
            <a
              className="bg-emerald-50 text-regal-purple hover:bg-regal-purple/50 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
              href="/auth/login"
            >
              Signup for free
            </a>
          </div>
          <div className="relative p-8  border border-[#e879f9] rounded-2xl shadow-sm flex flex-col backdrop-blur-2xl sect6Card">
            <div className="flex-1">
              <h3 className="text-xl font-semibold ">Pro</h3>
              <p className="absolute top-0 py-1.5 px-4 bg-regal-purple text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2">
                Most popular
              </p>
              <p className="mt-4 flex items-baseline ">
                <span className="text-5xl font-extrabold tracking-tight">
                  $12
                </span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 ">
                You want to learn and have a personal assistant
              </p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-regal-purple"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">30 credits</span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-regal-purple"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">
                    Powered by GPT-4 (more accurate)
                  </span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-regal-purple"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">Generate video (2 credits)</span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-regal-purple"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">Quizz (1 credits) </span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-regal-purple"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">Analytics on the quizz</span>
                </li>
              </ul>
            </div>
            <a
              className="bg-regal-purple text-white   mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
              href="/auth/login"
            >
              Signup for free
            </a>
          </div>
          <div className="relative p-8  border border-gray-200/10 rounded-2xl shadow-sm flex flex-col bg-white/10 sect6Card">
            <div className="flex-1">
              <h3 className="text-xl font-semibold ">Enterprise Plan</h3>

              <p className="mt-4 flex items-baseline ">
                <span className="text-5xl font-extrabold tracking-tight">
                  $12
                </span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 ">
                You want to learn and have a personal assistant
              </p>
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-regal-purple"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">30 credits</span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-regal-purple"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">
                    Powered by GPT-4 (more accurate)
                  </span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-regal-purple"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">Generate video (2 credits)</span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-regal-purple"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">Quizz (1 credits) </span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-regal-purple"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="ml-3 ">Analytics on the quizz</span>
                </li>
              </ul>
            </div>
            <a
              className="bg-regal-purple text-white  hover:bg-emerald-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
              href="/auth/login"
            >
              Signup for free
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section7;
