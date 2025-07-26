import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => {
  return <div className="h-[100vh]">home</div>;
};

export default Home;
