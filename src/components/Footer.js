import { Inter } from "next/font/google";
import "../styles/Footer.css";

const inter = Inter({ subsets: ["latin"], weight: ["700"], display: "swap" });

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="footer-heading">
          <img src="/images/footer-logo.png" alt="Logo" />
          <h1 className={`${inter.className} footer-title`}>VIRTUALITY</h1>
        </div>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="footer-main">
        <h2>Lorem Ipsum</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="footer-main">
        <h2>Lorem Ipsum</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="footer-main">
        <h2>Lorem Ipsum</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
    </div>
  );
};

export default Footer;
