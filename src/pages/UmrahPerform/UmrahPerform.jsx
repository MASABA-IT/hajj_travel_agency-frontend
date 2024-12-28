import OurFaq from "../../components/OurFaq/OurFaq";
import PerformUmrahHero from "../../components/PerformUmrahHero/PerformUmrahHero";
import ContentImg from "../../components/ReComponent/ContentImg/ContentImg";
import ImgContent from "../../components/ReComponent/ImgContent/ImgContent";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";
import ComponentChange from "../../share/ComponentChange/ComponentChange";

const UmrahPerform = () => {
  return (
    <section className="h-auto mt-28">
      <PerformUmrahHero />
      <ContentImg page="umrah" section="Perform" itemKey="performStep" />
      <ComponentChange />
      {/* UmrahPerformRewards  */}
      <ImgContent page="umrah" section="Perform" itemKey="performGuide" />
      <ContentImg page="umrah" section="Perform" itemKey="performStep" />
      <ComponentChange />
      {/* UmrahPerformRewards  */}
      <ImgContent page="umrah" section="Perform" itemKey="performGuide" />
      <ContentImg page="umrah" section="Perform" itemKey="performStep" />
      <ComponentChange />
      {/* UmrahPerformRewards  */}
      <ImgContent page="umrah" section="Perform" itemKey="performGuide" />
      <TravelHelpSupport />
      <OurFaq />
    </section>
  );
};

export default UmrahPerform;
