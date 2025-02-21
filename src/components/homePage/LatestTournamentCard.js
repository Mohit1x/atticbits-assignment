import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "500", display: "swap" });

const LatestTournamentCard = () => {
  return (
    <div className="card-container">
      <img src="/images/latest-tournament-img.png" />
      <div className="details-text-container">
        <h3 className={`${roboto.className}`}>BATTELGROUNDS MOBILE INDIA PC</h3>
        <p className={`${roboto.className}`}>Classic / Erangel Map</p>
        <p className={`${roboto.className}`}>Start Date - 7/08/24</p>
        <p className={`${roboto.className}`}>Timing - 10:00 PM</p>
        <button className={`${roboto.className}`}>Registered</button>
      </div>
    </div>
  );
};

export default LatestTournamentCard;
