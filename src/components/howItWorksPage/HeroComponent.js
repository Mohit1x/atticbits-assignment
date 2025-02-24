import { Paytone_One } from "next/font/google";
import "../../styles/how-it-works/HeroComponent.css";
const paytone = Paytone_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const HeroComponent = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="hero-text">
          <h1 className={`${paytone.className}`}>
            GATHER YOUR TEAM, ENTER THE TOURNAMENTS AND WIN BIG!
          </h1>
          <button>START HERE</button>
        </div>
        <div>
          <img src={"images/hero-left.png"} />
        </div>
      </div>
      <div className="hero-right">
        <img src={"images/hero-right.png"} />
      </div>
    </div>
  );
};

export default HeroComponent;
