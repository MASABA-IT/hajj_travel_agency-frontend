import { Outlet } from "react-router-dom";
import HajjPackagesDetails from "../../components/HajjPackagesDetails/HajjPackagesDetails";
import OurFaq from "../../components/OurFaq/OurFaq";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";
import UmrahGroupService from "../../components/UmrahGroupService/UmrahGroupService";
import UmrahHeroSection from "../../components/UmrahHeroSection/UmrahHeroSection";

import ContentImg from "../../components/ReComponent/ContentImg/ContentImg";
import ImgContent from "../../components/ReComponent/ImgContent/ImgContent";

const UmrahPackages = () => {
  return (
    <section className=" h-auto mt-28">
      <UmrahHeroSection />
      <HajjPackagesDetails />
      <UmrahGroupService />
      {/* visaRequirement */}
      <ContentImg page="Package" section="requirements" />
      <div className="max-w-[1400px] mx-auto h-[3px] bg-gray-300"></div>
      {/* UmrahPerformRewards  */}
      <ImgContent page="Package" section="rewards" />
      {/* <UmrahPerformRewards /> */}
      <TravelHelpSupport />
      <OurFaq />
      <Outlet />
    </section>
  );
};

export default UmrahPackages;
