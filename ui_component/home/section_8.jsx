import Container from "@/common_component/container";
import { Timeline } from "@/components/ui/timeline";
import React from "react";

const data = [
  {
    title: "Trusted by Innovators to Lead the Web3 Revolution",
    subtitle: "See how real-time blockchain data empowers businesses.",
    sideCard: [
      {
        img: "https://framerusercontent.com/images/cy4wavbyt81gvoWNZYNvS2mmo8.png?scale-down-to=1024",
        desc: "The real-time insights from this platform have transformed the way our company approaches blockchain analytics. We’ve saved countless hours and boosted our decision-making capabilities.",
        name: "Michael Carter",
        designation: "Chief Technology Officer",
      },
      {
        img: "https://framerusercontent.com/images/cy4wavbyt81gvoWNZYNvS2mmo8.png?scale-down-to=1024",
        desc: "The real-time insights from this platform have transformed the way our company approaches blockchain analytics. We’ve saved countless hours and boosted our decision-making capabilities.",
        name: "Michael Carter",
        designation: "Chief Technology Officer",
      },
      {
        img: "https://framerusercontent.com/images/cy4wavbyt81gvoWNZYNvS2mmo8.png?scale-down-to=1024",
        desc: "The real-time insights from this platform have transformed the way our company approaches blockchain analytics. We’ve saved countless hours and boosted our decision-making capabilities.",
        name: "Michael Carter",
        designation: "Chief Technology Officer",
      },
      {
        img: "https://framerusercontent.com/images/cy4wavbyt81gvoWNZYNvS2mmo8.png?scale-down-to=1024",
        desc: "The real-time insights from this platform have transformed the way our company approaches blockchain analytics. We’ve saved countless hours and boosted our decision-making capabilities.",
        name: "Michael Carter",
        designation: "Chief Technology Officer",
      },
      {
        img: "https://framerusercontent.com/images/cy4wavbyt81gvoWNZYNvS2mmo8.png?scale-down-to=1024",
        desc: "The real-time insights from this platform have transformed the way our company approaches blockchain analytics. We’ve saved countless hours and boosted our decision-making capabilities.",
        name: "Michael Carter",
        designation: "Chief Technology Officer",
      },
    ],
  },
];

const Section8 = () => {
  return (
    <Container>
      <div className="relative w-full overflow-clip mt-40">
        <Timeline data={data} />
      </div>
    </Container>
  );
};

export default Section8;
