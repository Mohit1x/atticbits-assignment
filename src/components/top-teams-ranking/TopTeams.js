import { topTeamsRankDetails } from "@/utils/libs";
import "../../styles/TopTeams.css";
import TopTeamsCard from "./TopTeamsCard";

const TopTeams = ({ isHowItsWorks }) => {
  const cardDetails = topTeamsRankDetails;
  return (
    <div className={`top-teams-container ${isHowItsWorks ? "gap-twice" : ""}`}>
      <h1>TOP TEAMS RANK :</h1>
      <div className="all-top-teams-cards">
        {cardDetails.map((info) => (
          <TopTeamsCard key={info.name} info={info} />
        ))}
      </div>
    </div>
  );
};

export default TopTeams;
