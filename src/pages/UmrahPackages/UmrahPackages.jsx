import { Outlet } from "react-router-dom";
import HajjPackagesDetails from "../../components/HajjPackagesDetails/HajjPackagesDetails";
import OurFaq from "../../components/OurFaq/OurFaq";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";
import UmrahGroupService from "../../components/UmrahGroupService/UmrahGroupService";
import UmrahHeroSection from "../../components/UmrahHeroSection/UmrahHeroSection";

import ContentImg from "../../components/ReComponent/ContentImg/ContentImg";
import ImgContent from "../../components/ReComponent/ImgContent/ImgContent";
import ComponentChange from "../../share/ComponentChange/ComponentChange";

const UmrahPackages = () => {
  return (
    <section className=" h-auto mt-28">
      <UmrahHeroSection />
      <HajjPackagesDetails />
      <UmrahGroupService />
      {/* visaRequirement */}
      <ContentImg page="umrah" section="Package" itemKey="requirements" />
      <ComponentChange />
      {/* UmrahPerformRewards  */}
      <ImgContent page="umrah" section="Package" itemKey="rewards" />
      {/* <UmrahPerformRewards /> */}
      <TravelHelpSupport />
      <OurFaq />
      <Outlet />
    </section>
  );
};

export default UmrahPackages;
