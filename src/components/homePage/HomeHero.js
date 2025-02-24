import { Paytone_One, Roboto } from "next/font/google";
import "../../styles/home/HomeHero.css";
import { details } from "@/utils/libs";

const paytone = Paytone_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const roboto = Roboto({ subsets: ["latin"], weight: "500", display: "swap" });
const robotoTitle = Roboto({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

const HomeHero = () => {
  return (
    <div className="layout-container">
      <div className="text-section">
        <h1 className={`${paytone.className}`}>
          THE ULTIMATE COMPETITIVE GAMING PLATFROM
        </h1>
        <p className={`${roboto.className}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
        <div className="button-container">
          <button className={`${robotoTitle.className} find-out-btn`}>
            FIND OUT HOW IT WORKS
          </button>
          <button className={`${robotoTitle.className} register-btn`}>
            REGISTER NOW !
          </button>
        </div>
      </div>
      <div className="image-section">
        <img src="/images/car.png" />
      </div>
      <div className="game-card">
        <img src="/images/BGMI-1.png" />
        <div className="game-container">
          <div className="game-button-container">
            <button className={`${roboto.className} selected-game-btn`}>
              Selected Game
            </button>
            <button className={`${roboto.className} play-game-btn`}>
              Play Game
            </button>
          </div>
          <div className="game-text">
            <h3 className={`${robotoTitle.className}`}>
              BATTELGROUNDS MOBILE INDIA PC
            </h3>
            <p className={`${roboto.className}`}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
      <div className="info-list">
        {details.map((detail) => (
          <div key={detail.year}>
            <div className="line" />
            <div className="detail-list" key={detail.tag}>
              <h2 className={`${roboto.className}`}>{detail.tag}</h2>
              <p className={`${roboto.className}`}>{detail.text}</p>
              <h3 className={`${roboto.className}`}>{detail.year}</h3>
            </div>
          </div>
        ))}
        <div className="line" />
      </div>
    </div>
  );
};

export default HomeHero;
