import { regiterNowBanner } from "@/utils/libs";
import Banner from "../Banner";

const RegisterNowBanner = () => {
  const details = regiterNowBanner;
  return (
    <div>
      <Banner details={details} />
    </div>
  );
};

export default RegisterNowBanner;
