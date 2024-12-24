import HajjApply from "../../components/HajjApply/HajjApply";
import HajjHeroContent from "../../components/HajjHeroContent/HajjHeroContent";
import HajjPreRegInfo from "../../components/HajjPreRegInfo/HajjPreRegInfo";
import HajjVisaReq from "../../components/HajjVisaReq/HajjVisaReq";
import OurFaq from "../../components/OurFaq/OurFaq";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";

const Hajj = () => {
  return (
    <div className=" h-auto mt-28">
      <HajjHeroContent />
      <HajjPreRegInfo />
      <HajjVisaReq />
      <HajjPreRegInfo />
      <HajjApply />
      <TravelHelpSupport />
      <OurFaq />
    </div>
  );
};

export default Hajj;
