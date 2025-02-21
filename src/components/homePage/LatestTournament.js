import LatestTournamentCard from "./LatestTournamentCard";
import "../../styles/home/LatestTournament.css";

const LatestTournament = () => {
  return (
    <div className="main-container">
      <h1>Latest Tournament</h1>
      <div className="cards-container">
        <LatestTournamentCard />
        <LatestTournamentCard />
        <LatestTournamentCard />
        <LatestTournamentCard />
      </div>
    </div>
  );
};

export default LatestTournament;
