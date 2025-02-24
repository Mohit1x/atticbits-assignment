import { getStartedBannerDetails } from "@/utils/libs";
import Banner from "../Banner";

const GetStartedBanner = () => {
  const details = getStartedBannerDetails;
  return (
    <div>
      <Banner details={details} />
    </div>
  );
};

export default GetStartedBanner;
