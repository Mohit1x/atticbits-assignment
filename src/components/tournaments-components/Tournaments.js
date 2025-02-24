import { homeTournamentsCardDetails } from "@/utils/libs";
import "../../styles/Tournaments.css";
import TournamentsCard from "./TournamentsCard";

const Tournaments = () => {
  const info = homeTournamentsCardDetails;

  return (
    <div className="home-tournaments-container">
      <h1>TOURNAMENTS :</h1>
      <div className="home-tournaments-cards">
        {info.map((info, index) => (
          <TournamentsCard key={index} info={info} />
        ))}
      </div>
    </div>
  );
};

export default Tournaments;
