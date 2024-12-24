import HajjPackagesDetails from "../../components/HajjPackagesDetails/HajjPackagesDetails";
import UmrahGroupService from "../../components/UmrahGroupService/UmrahGroupService";
import UmrahHeroSection from "../../components/UmrahHeroSection/UmrahHeroSection";
import UmrahPerformRewards from "../../components/UmrahPerformRewards/UmrahPerformRewards";
import UmrahVisaRequirements from "../../components/UmrahVisaRequirements/UmrahVisaRequirements";

const UmrahPackages = () => {
  return (
    <section className=" h-auto mt-28">
      <UmrahHeroSection />
      <HajjPackagesDetails />
      <UmrahGroupService/>
      <UmrahVisaRequirements/>
      <UmrahPerformRewards/>
    </section>
  );
};

export default UmrahPackages;
