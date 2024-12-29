import GuidanceGoal from "../../components/GuidanceGoal/GuidanceGoal";
import GuidanceHeroContent from "../../components/GuidanceHeroContent/GuidanceHeroContent";
import GuidancePrepares from "../../components/GuidancePrepare/GuidancePrepare";

import GuidanceSteps from "../../components/GuidanceStep/GuidanceStep";
import OurFaq from "../../components/OurFaq/OurFaq";

import ContentImg from "../../components/ReComponent/ContentImg/ContentImg";
import ImgContent from "../../components/ReComponent/ImgContent/ImgContent";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";
import ComponentChange from "../../share/ComponentChange/ComponentChange";

const Guidance = () => {
  return (
    <section className=" h-auto mt-28">
      <GuidanceHeroContent />

      <ContentImg page="guidance" section="English" itemKey="process" />
      <ComponentChange />
      <ImgContent page="guidance" section="English" itemKey="guide" />
      <ComponentChange />
      <ContentImg
        page="guidance"
        section="English"
        itemKey="spiritualJourney"
      />
      <ComponentChange />
      <ImgContent page="guidance" section="English" itemKey="journey" />
      <TravelHelpSupport />
      <OurFaq />
    </section>
  );
};

export default Guidance;
