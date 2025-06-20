import dynamic from "next/dynamic";
import Container from "@/common_component/container";
import { useGSAP } from "@gsap/react";
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const Section4 = () => {
  const containerRef = useRef();
  const videoBox = useRef();
  const lottie1Ref = useRef();
  const lottie2Ref = useRef();

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      onEnter: () => {
        lottie1Ref.current?.play();
        lottie2Ref.current?.play();
      },
    });
  }, []);

  return (
    <Container>
      <div
        className="mt-20 flex items-center justify-center flex-col"
        ref={containerRef}
      >
        <h2 className="text-white text-5xl font-semibold md:w-[50%] text-center">
          Power, without the price.
        </h2>
        <div className="grid grid-cols-12 w-full md:gap-10 gap-4 mt-20 ">
          <div className="col-span-12 md:col-span-5 relative border border-white/20 overflow-hidden flex items-end p-8 rounded-xl h-[384px] ">
            <video
              playsInline
              preload="auto"
              autoPlay
              muted
              loop
              className="absolute bottom-0 right-0 object-cover h-[450px]"
              ref={videoBox}
            >
              <source src="/assets/home/sec4-1.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10">
              <p className="text-white text-xl font-medium">
                Fixed, Predictable Supply{" "}
              </p>
              <p className="text-white/50">
                TAN’s supply is capped at 30 billion token, ensuring that no
                inflationary pressures can ever devalue the token over time.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7  border border-white/20 overflow-hidden flex items-end justify-end rounded-xl relative h-[384px]">
            <Player
              lottieRef={(data) => (lottie1Ref.current = data)}
              src={require("../../assets/animate/sect4-ani1.json")}
              keepLastFrame={true}
              speed={4}
              className="relative z-0 h-[384px] md:h-auto"
            ></Player>

            <div
              style={{
                background:
                  "linear-gradient(180deg,rgb(74, 74, 74, 0) 33%,rgb(162, 28, 175) 104%)",
              }}
              className="w-full h-full absolute flex items-end p-8"
            >
              <div className="relative z-10">
                <p className="text-white text-xl font-medium">
                  Block-Per-Reward Consensus{" "}
                </p>
                <p className="text-white/50">
                  Validators earn rewards based on the blocks they propose,
                  rather than the stake they hold.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7  border border-white/20 overflow-hidden flex items-end justify-end rounded-xl relative h-[384px]">
            <Player
              lottieRef={(data) => (lottie2Ref.current = data)}
              src={require("../../assets/animate/sect4-ani2.json")}
              keepLastFrame={true}
              speed={4}
              className="relative z-0 h-[384px] -right-10 md:h-auto"
            ></Player>

            <div
              style={{
                background:
                  "linear-gradient(180deg,rgb(74, 74, 74, 0) 33%,rgb(162, 28, 175) 104%)",
              }}
              className="w-full h-full absolute flex items-end p-8"
            >
              <div className="relative z-10">
                <p className="text-white text-xl font-medium">
                  Inflation Protection Model
                </p>
                <p className="text-white/50">
                  Burn mechanisms reduce supply, control inflation, and drive
                  sustainable value.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 relative border border-white/20 overflow-hidden flex items-end p-8 rounded-xl h-[384px] ">
            <video
              playsInline
              preload="auto"
              autoPlay
              muted
              loop
              className="absolute bottom-0 right-0 object-cover h-[450px]"
              ref={videoBox}
            >
              <source src="/assets/home/sec4-2.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10">
              <p className="text-white text-xl font-medium">
                Real Yield, Not Just Inflationary Rewards
              </p>
              <p className="text-white/50">
                Rewards are sustainable, earned through actual network activity
                and gas fees burning, not endless token minting.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section4;
