import FormComponent from "@/components/howItWorksPage/FormComponent";
import HeroComponent from "@/components/howItWorksPage/HeroComponent";
import TournamentsDetails from "@/components/howItWorksPage/TournamentsDetails";

export default function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <HeroComponent />
      <FormComponent />
      <TournamentsDetails />
    </div>
  );
}
