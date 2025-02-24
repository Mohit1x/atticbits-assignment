import "../../styles/TournamentsCard.css";

const statusColorMap = {
  PLAYING: "#6DBA00",
  UPCOMING: "#FF8800",
  FINISHED: "#FDB900",
};

const TournamentsCard = ({ info, isHowItWorks }) => {
  return (
    <div
      className={`tournaments-card-container ${
        info.tag === "Live" ? "selected" : ""
      } ${isHowItWorks ? "white-border" : ""}`}
    >
      <div className="tournaments-card-text">
        <h1 className="heading">
          {info.title} {info.tag === "Live" && <span>LIVE</span>}
        </h1>
        <p>{info.text}</p>
      </div>
      <div className="status-container">
        <img src={info.url} />
        <h2
          className="status"
          style={{ backgroundColor: statusColorMap[info.status] }}
        >
          {info.status}
        </h2>
      </div>
    </div>
  );
};

export default TournamentsCard;
