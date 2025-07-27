import Cocktails from "@/components/Cocktails";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => {
  return (
    <main className="h-[100vh]">
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  );
};

export default Home;
