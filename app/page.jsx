import Carousel from "@/ui_component/home/carousel";
import HeroSection from "@/ui_component/home/hero_section";

export default function MainHome() {
  return (
    <div className="relative container mx-auto flex items-center justify-center flex-col">
      <HeroSection />
      <Carousel />
    </div>
  );
}
