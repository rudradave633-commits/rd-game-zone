import HeroSection from "../components/HeroSection";
import AboutSection from "../components/About";
import RingCarousel from "~/components/RingCarousel";
import Pricing from "~/components/Pricing";
import Booking from "~/components/Booking";
import GTAOnlinePolicy from "~/components/GTAOnlinePolicy";
import GameGuidelines from "~/components/GameGuidelines";
import GameLibraryHome from "~/components/GameLibraryHome";
import Experience from "~/components/Experience";
import EsportsTicker from "~/components/EsportsTicker";
import Footer from "~/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EsportsTicker />
      <AboutSection />
      <RingCarousel />
      <Pricing />
      <Booking />
      <GTAOnlinePolicy />
      <GameGuidelines />
      <GameLibraryHome />
      <Experience />
      <Footer />
    </>
  );
}