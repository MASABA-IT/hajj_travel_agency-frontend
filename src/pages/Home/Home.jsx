import { MdOutlineWhatsapp } from "react-icons/md";
import AboutUs from "../../components/AboutUs/AboutUs";
import ConsultantsView from "../../components/ConsultantsView/ConsultantsView";
import CustomUmraAbout from "../../components/CustomUmraAbout/CustomUmraAbout";
import ExploreSlidePackages from "../../components/ExploreSlidePackages/ExploreSlidePackages.jsx/ExploreSlidePackages";
import HajjPackagesDetails from "../../components/HajjPackagesDetails/HajjPackagesDetails";
import HajjUmraCounts from "../../components/HajjUmraCounts/HajjUmraCounts";
import HomeHero from "../../components/HomeHero/HomeHero";
import SecurityAndSafetyInfo from "../../components/SecurityAndSafetyInfo/SecurityAndSafetyInfo";
import SendEmail from "../../components/SendEmail/SendEmail";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";
import TrustpilotReviews from "../../components/TrustpilotReviews/TrustpilotReviews";
import UmrahHajjPackages from "../../components/UmrahHajjPackages/UmrahHajjPackages";

const Home = () => {
  return (
    <div className="">
      <HomeHero />
      <SecurityAndSafetyInfo />
      <UmrahHajjPackages />
      <ExploreSlidePackages />
      <CustomUmraAbout />
      <HajjUmraCounts />
      <HajjPackagesDetails />
      <TravelHelpSupport />
      <ConsultantsView />
      <TrustpilotReviews />
      <SendEmail />
      <AboutUs />
      <span className="w-[53px] h-[53px] flex justify-center items-center rounded-full bg-green-700 fixed bottom-14 right-14 transition-transform duration-100 hover:scale-[120%] hover:cursor-pointer">
        <MdOutlineWhatsapp className="text-5xl text-white p-[3px]" />
      </span>
    </div>
  );
};

export default Home;
