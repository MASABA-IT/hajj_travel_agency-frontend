import FacilitiesHeroContent from "../../components/FacilitiesHeroContent/FacilitiesHeroContent";
import HajjPreRegInfo from "../../components/HajjPreRegInfo/HajjPreRegInfo";
import HajjVisaReq from "../../components/HajjVisaReq/HajjVisaReq";
import OurFaq from "../../components/OurFaq/OurFaq";

const Facilities = () => {
  return (
    <div className=" h-auto mt-28">
       <FacilitiesHeroContent/>
       <HajjPreRegInfo />
      <HajjVisaReq />
      <HajjPreRegInfo />
 
      <OurFaq/>
    </div>
  );
};

export default Facilities;
