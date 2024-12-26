import AboutUs from "../../components/AboutUs/AboutUs";
import SecurityAndSafetyInfo from "../../components/SecurityAndSafetyInfo/SecurityAndSafetyInfo";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";
const AboutUsPage = () => {
  return (
    <section className=" h-auto mt-18">
      <SecurityAndSafetyInfo />
      <TravelHelpSupport />
      <AboutUs />
    </section>
  );
};

export default AboutUsPage;
