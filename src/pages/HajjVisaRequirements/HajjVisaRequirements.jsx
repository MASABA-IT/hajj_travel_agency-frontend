import HajjvisaReqFrom from "../../components/HajjvisaReqFrom/HajjvisaReqFrom";
import HajjVisaReqHero from "../../components/HajjVisaReqHero/HajjVisaReqHero";
import OurFaq from "../../components/OurFaq/OurFaq";
import ContentImg from "../../components/ReComponent/ContentImg/ContentImg";
import ImgContent from "../../components/ReComponent/ImgContent/ImgContent";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";
import ComponentChange from "../../share/ComponentChange/ComponentChange";

const HajjVisaRequirements = () => {
  return (
    <section className="h-auto mt-28">
      <HajjVisaReqHero />
      <ContentImg page="hajj" section="HajjVisaReq" itemKey="visaReq" />
      <HajjvisaReqFrom />
      <ImgContent page="hajj" section="HajjVisaReq" itemKey="HajjVisaApply" />
      <ComponentChange />
      <ContentImg page="hajj" section="HajjVisaReq" itemKey="visaReq" />
      <ComponentChange />
      <ImgContent
        page="hajj"
        section="HajjVisaReq"
        itemKey="EligibilityCriteria"
      />
      <ComponentChange />
      <ContentImg page="hajj" section="HajjVisaReq" itemKey="HealthBenefits" />
      <ComponentChange />
      <ImgContent page="hajj" section="HajjVisaReq" itemKey="HajjTips" />
      <TravelHelpSupport/>
      <OurFaq/>
    </section>
  );
};

export default HajjVisaRequirements;
