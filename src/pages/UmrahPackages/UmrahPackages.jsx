import { Outlet } from "react-router-dom";
import HajjPackagesDetails from "../../components/HajjPackagesDetails/HajjPackagesDetails";
import OurFaq from "../../components/OurFaq/OurFaq";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";
import UmrahGroupService from "../../components/UmrahGroupService/UmrahGroupService";
import UmrahHeroSection from "../../components/UmrahHeroSection/UmrahHeroSection";
import UmrahPerformRewards from "../../components/UmrahPerformRewards/UmrahPerformRewards";
import UmrahVisaRequirements from "../../components/UmrahVisaRequirements/UmrahVisaRequirements";
import caliography from "../../assets/imgs/Caliography.png";
import visaImg from "../../assets/imgs/visa.png";

const umrahVisaData = {
  heading: "Umrah visa requirements ",
  paragraph:
    "As a Bangladeshi citizen, you will need to fulfill certain requirements to obtain a beautiful Umrah journey. Here are the key requirements:",
  image: visaImg,
  backgroundImage: caliography,
  listItems: [
    "Valid passport (must be valid for 6 months from the date of travel)",
    "Recent passport-sized photographs",
    "Vaccination certificate",
    "Copy of NID / Smart card",
    "Birth certificate copy (for children)",
    "Marriage certificate copy (for couples)",
  ],
  buttonText: "Apply For Visa",
};

const UmrahPackages = () => {
  return (
    <section className=" h-auto mt-28">
      <UmrahHeroSection />
      <HajjPackagesDetails />
      <UmrahGroupService />
      <UmrahVisaRequirements data={umrahVisaData} />
      <div className="max-w-[1400px] mx-auto h-[3px] bg-gray-300"></div>
      <UmrahPerformRewards />
      <TravelHelpSupport />
      <OurFaq />
      <Outlet />
    </section>
  );
};

export default UmrahPackages;
