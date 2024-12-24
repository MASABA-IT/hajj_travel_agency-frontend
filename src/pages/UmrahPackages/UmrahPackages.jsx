import HajjPackagesDetails from "../../components/HajjPackagesDetails/HajjPackagesDetails";
import OurFaq from "../../components/OurFaq/OurFaq";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";
import UmrahGroupService from "../../components/UmrahGroupService/UmrahGroupService";
import UmrahHeroSection from "../../components/UmrahHeroSection/UmrahHeroSection";
import UmrahPerformRewards from "../../components/UmrahPerformRewards/UmrahPerformRewards";
import UmrahVisaRequirements from "../../components/UmrahVisaRequirements/UmrahVisaRequirements";

const UmrahPackages = () => {
  return (
    <section className=" h-auto mt-28">
      <UmrahHeroSection />
      <HajjPackagesDetails />
      <UmrahGroupService />
      <UmrahVisaRequirements />
      <div className="max-w-[1400px] mx-auto h-[3px] bg-gray-300"></div>
      <UmrahPerformRewards />
      <TravelHelpSupport />
      <OurFaq/ >
    </section>
  );
};

export default UmrahPackages;
