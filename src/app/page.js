import GamesSection from "@/components/homePage/GamesSection";
import HomeHero from "@/components/homePage/HomeHero";
import LatestTournament from "@/components/homePage/LatestTournament";
import LiveTournament from "@/components/homePage/live-tornament-components/LiveTournament";
import RegisterNowBanner from "@/components/homePage/RegisterNowBanner";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <GamesSection />
      <LatestTournament />
      <RegisterNowBanner />
      <LiveTournament />
    </div>
  );
}
