const TopTeamsCard = ({ info }) => {
  return (
    <div className="top-teams-card-container" key={info.key}>
      <img src={info.url} />
      <div className="top-teams-texts">
        <div className="titles">
          <h1
            className={`${info.theme === "green" ? "green" : ""} 
            ${info.theme == "orange" ? "orange" : ""} 
            ${info.theme == "blue" ? "blue" : ""} 
            ${info.theme == "gray" ? "gray" : ""} name`}
          >
            {info.name}
          </h1>
          <h2>{info.title}</h2>
        </div>
        <p>{info.text}</p>
      </div>
    </div>
  );
};

export default TopTeamsCard;
