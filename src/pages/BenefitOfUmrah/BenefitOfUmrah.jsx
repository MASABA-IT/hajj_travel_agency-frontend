import BenefitContentFive from "../../components/BenefitContentFive/BenefitContentFive";
import BenefitContentFour from "../../components/BenefitContentFour/BenefitContentFour";
import BenefitContentSix from "../../components/BenefitContentSix/BenefitContentSix";
import BenefitUmrahContent from "../../components/BenefitUmrahContent/BenefitUmrahContent";
import BenefitUmrahContentThree from "../../components/BenefitUmrahContentThree/BenefitUmrahContentThree";
import BenefitUmrahContentTwo from "../../components/BenefitUmrahContentTwo/BenefitUmrahContentTwo";
import BenefitUmrahHero from "../../components/BenefitUmrahHero/BenefitUmrahHero";

import OurFaq from "../../components/OurFaq/OurFaq";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";

const BenefitOfUmrah = () => {
  return (
    <section className="  mt-28 h-auto ">
      <BenefitUmrahHero />
      <BenefitUmrahContent />
      <BenefitUmrahContentTwo />
      <BenefitUmrahContentThree />
      <BenefitContentFour />
      <BenefitContentFive />
      <BenefitContentSix />
      <TravelHelpSupport />
      <OurFaq />
    </section>
  );
};

export default BenefitOfUmrah;
