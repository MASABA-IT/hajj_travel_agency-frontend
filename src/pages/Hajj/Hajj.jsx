import HajjApply from "../../components/HajjApply/HajjApply";
import HajjHeroContent from "../../components/HajjHeroContent/HajjHeroContent";
import OurFaq from "../../components/OurFaq/OurFaq";
import ContentImg from "../../components/ReComponent/ContentImg/ContentImg";
import ImgContent from "../../components/ReComponent/ImgContent/ImgContent";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";
import ComponentChange from "../../share/ComponentChange/ComponentChange";

const Hajj = () => {
  return (
    <div className=" h-auto mt-28">
      <HajjHeroContent />
      <ContentImg page="hajj" section="PreReg" itemKey="preReg" />
      <ComponentChange />

      <ImgContent page="hajj" section="PreReg" itemKey="regPro" />

      <HajjApply />
      <TravelHelpSupport />
      <OurFaq />
    </div>
  );
};

export default Hajj;
