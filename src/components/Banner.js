import { Paytone_One } from "next/font/google";
import "../styles/Banner.css";

const paytone = Paytone_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Banner = ({ details }) => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="banner-text">
          <div className="text">
            <h1 className={`${paytone.className}`}>{details.title}</h1>
            <p>{details.text}</p>
          </div>
          <button>{details.tag}</button>
        </div>
        <img src={details.url} />
      </div>
    </div>
  );
};

export default Banner;
