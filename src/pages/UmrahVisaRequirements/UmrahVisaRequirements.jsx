import OurFaq from "../../components/OurFaq/OurFaq";
import ContentImg from "../../components/ReComponent/ContentImg/ContentImg";
import ImgContent from "../../components/ReComponent/ImgContent/ImgContent";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";
import UmrahVisaHero from "../../components/UmrahVisaHero/UmrahVisaHero";
import ComponentChange from "../../share/ComponentChange/ComponentChange";

const UmrahVisaRequirements = () => {
  return (
    <section className="h-auto mt-28">
      <UmrahVisaHero />
      <ContentImg page="umrah" section="VisaRequirements" itemKey="visaStep" />
      <ComponentChange />
      {/* UmrahPerformRewards  */}
      <ImgContent page="umrah" section="VisaRequirements" itemKey="visaGuide" />
      <ComponentChange />
      <ContentImg page="umrah" section="VisaRequirements" itemKey="visaStep" />
      <ComponentChange />
      {/* UmrahPerformRewards  */}
      <ImgContent page="umrah" section="VisaRequirements" itemKey="visaGuide" />
      <ComponentChange />
      <ContentImg page="umrah" section="VisaRequirements" itemKey="visaStep" />
      <ComponentChange />
      {/* UmrahPerformRewards  */}
      <ImgContent page="umrah" section="VisaRequirements" itemKey="visaGuide" />
      <TravelHelpSupport />
      <OurFaq />
    </section>
  );
};

export default UmrahVisaRequirements;
