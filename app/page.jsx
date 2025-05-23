"use client";
import Carousel from "@/ui_component/home/carousel";
import HeroSection from "@/ui_component/home/hero_section";
import Section1 from "@/ui_component/home/section_1";
import Section2 from "@/ui_component/home/section_2";
import Section3 from "@/ui_component/home/section_3";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section4 from "@/ui_component/home/section_4";
import Section5 from "@/ui_component/home/section_5";
import Section6 from "@/ui_component/home/section_6";
import Section7 from "@/ui_component/home/section_7";
import Section8 from "@/ui_component/home/section_8";
import Section9 from "@/ui_component/home/section_9";
import Section10 from "@/ui_component/home/section_10";
import Section11 from "@/ui_component/home/section_11";
import Section81 from "@/ui_component/home/section_8.1";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function MainHome() {
  return (
    <div className="relative container mx-auto flex items-center justify-center flex-col">
      <HeroSection />
      <Carousel />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section81 />
      <Section9 />
      <Section10 />
      <Section11 />
    </div>
  );
}
