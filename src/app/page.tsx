import BestSeller from "@/components/Home/BestSeller";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero"
import HomeSlider from "@/components/Home/HomeSlider";
import Packs from "@/components/Home/Packs";
import Testimonials from "@/components/Home/Testimonials";
import Footer from "@/components/common/Footer";
import Image from "next/image";

export default function Home() {
  return (<>
  <div className="">
    <Hero/>
    <HomeSlider />
    <Categories />
    <BestSeller />
    <Packs />
    <Testimonials />
  </div>
    

  </>);
}
