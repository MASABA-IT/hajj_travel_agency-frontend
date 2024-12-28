import HajjPackageHero from "../../components/HajjPackageHero/HajjPackageHero";
import HajjPackagePriceView from "../../components/HajjPackagePriceView/HajjPackagePriceView";
import HajjPackagesDetails from "../../components/HajjPackagesDetails/HajjPackagesDetails";
import OurFaq from "../../components/OurFaq/OurFaq";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";

const HajjPackage = () => {
  return (
    <section className="h-auto mt-28">
      <HajjPackageHero />
      <HajjPackagePriceView />
      <HajjPackagesDetails />
      <TravelHelpSupport/>
      <OurFaq/>
    </section>
  );
};

export default HajjPackage;
