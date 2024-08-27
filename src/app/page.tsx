import Image from "next/image";
import HomeScreen from "./components/homeScreen/homeScreen";
import SocialMedia from "./components/socialMedia/socialMedia";
import About from "./about/page";
import LearnMore from "./components/learnMore/learnMore";
import Commitments from "./commitments/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main>
      <HomeScreen/>
      <SocialMedia/>
      <About/>
      <LearnMore/>
      <Commitments/>
      <Contact/>
    </main>
  );
}
