import TopTeams from "../top-teams-ranking/TopTeams";
import "../../styles/how-it-works/TournamentsDetails.css";
import { howItWorkstournamentsDetails } from "@/utils/libs";
import TournamentsCard from "../tournaments-components/TournamentsCard";

const TournamentsDetails = () => {
  const info = howItWorkstournamentsDetails;

  return (
    <div className="tournaments-details-main-container">
      <div className="tournaments-main-container">
        <div className="home-tournaments-container">
          <h1>TOURNAMENTS :</h1>
          <div className="home-tournaments-cards">
            {info.map((info, index) => (
              <TournamentsCard key={index} info={info} isHowItWorks={true} />
            ))}
          </div>
        </div>
      </div>
      <div className="top-tems-tournaments-detail-container">
        <TopTeams isHowItWorks={true} />
      </div>
    </div>
  );
};

export default TournamentsDetails;
