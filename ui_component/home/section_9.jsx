import Container from "@/common_component/container";
import { BoxReveal } from "@/components/magicui/box-reveal";
import React from "react";

const cardData = [
  {
    img: "https://framerusercontent.com/images/3xEUNcbqNElj9mq6FLYpeIy7I.jpg",
    title: "Web3 Basics",
    subtitle: "How Web3 is Revolutionizing the Digital Landscape",
    nav: () => {},
  },
  {
    img: "https://framerusercontent.com/images/3xEUNcbqNElj9mq6FLYpeIy7I.jpg",
    title: "Web3 Basics",
    subtitle: "How Web3 is Revolutionizing the Digital Landscape",
    nav: () => {},
  },
  {
    img: "https://framerusercontent.com/images/3xEUNcbqNElj9mq6FLYpeIy7I.jpg",
    title: "Web3 Basics",
    subtitle: "How Web3 is Revolutionizing the Digital Landscape",
    nav: () => {},
  },
];

const Section9 = () => {
  return (
    <Container>
      <div className=" md:mt-40 text-white">
        <div className="w-full flex items-center justify-center flex-col gap-2 ">
          <h2 className="text-5xl font-semibold">Blog</h2>
          <p className="font-semibold text-white/50">Lastest news</p>
        </div>

        <div className="grid grid-cols-12 w-full gap-8 mt-20">
          {cardData?.map((item, idx) => {
            return (
              <div
                className="col-span-12 md:col-span-4  group cursor-pointer"
                key={idx}
              >
                <BoxReveal boxColor="transparent">
                  <div className="h-56 w-full overflow-hidden border border-white/10 rounded-2xl">
                    <img
                      src={item.img}
                      alt={idx}
                      className="group-hover:scale-125 relative transition-all ease-in-out duration-300"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-regal-purple font-medium text-sm">
                      {item.title}
                    </p>
                    <p className="text-xl font-medium">{item.subtitle}</p>
                  </div>
                  <button className="cursor-pointer px-4 py-2 rounded-md border-[1px] text-white font-medium group bg-[#e0dedd]/20 backdrop-blur-3xl mt-4">
                    <div className="relative overflow-hidden">
                      <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-sm font-medium">
                        Read More
                      </p>
                      <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-sm font-medium">
                        Read More
                      </p>
                    </div>
                  </button>
                </BoxReveal>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex items-center justify-center my-20">
        <button className="cursor-pointer w-56 py-2 rounded-md border-[1px] text-white font-medium group bg-[#e0dedd]/20 backdrop-blur-3xl mt-4">
          <div className="relative overflow-hidden flex items-center justify-center">
            <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-sm font-medium">
              See all
            </p>
            <p className="absolute top-7  group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] text-sm font-medium">
              See all
            </p>
          </div>
        </button>
      </div>
    </Container>
  );
};

export default Section9;
