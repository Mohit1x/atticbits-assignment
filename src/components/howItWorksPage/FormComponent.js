import { Paytone_One } from "next/font/google";
import "../../styles/how-it-works/FormComponent.css";
const paytone = Paytone_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const FormComponent = () => {
  return (
    <div className="main-form-container">
      <h1>HOW IT WORKS</h1>
      <div className="form-content">
        <div className="form-text">
          <h1 className={`${paytone.className}`}>Create an account</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <button>START HERE</button>
        </div>
        <div className="main-form">
          <h1 className={`${paytone.className}`}>JOIN TODAY FOR FREE!</h1>
          <div className="form-inputs">
            <input placeholder="Username" />
            <input placeholder="Enter Your Email" />
            <input placeholder="Password" />
            <input placeholder="Confirm Password" />
            <button>DONE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
