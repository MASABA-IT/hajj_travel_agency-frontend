import BenefitContentFive from "../../components/BenefitContentFive/BenefitContentFive";
import BenefitContentFour from "../../components/BenefitContentFour/BenefitContentFour";
import BenefitContentSix from "../../components/BenefitContentSix/BenefitContentSix";
import BenefitUmrahContentThree from "../../components/BenefitUmrahContentThree/BenefitUmrahContentThree";
import BenefitUmrahContentTwo from "../../components/BenefitUmrahContentTwo/BenefitUmrahContentTwo";
import BenefitUmrahHero from "../../components/BenefitUmrahHero/BenefitUmrahHero";

import OurFaq from "../../components/OurFaq/OurFaq";
import ContentImg from "../../components/ReComponent/ContentImg/ContentImg";
import ImgContent from "../../components/ReComponent/ImgContent/ImgContent";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";

const BenefitOfUmrah = () => {
  return (
    <section className="  mt-28 h-auto ">
      <BenefitUmrahHero />
      {/* Content  */}
      <ContentImg page="Benefits" section="benefit" />
      {/* journey */}
      <ImgContent page="Benefits" section="umrahJourney" />
      {/* personal */}
      <ContentImg page="Benefits" section="personalBenefit" />
      {/* social */}
      <ImgContent page="Benefits" section="socialBenefit" />
      {/* Health benefits */}
      <ContentImg page="Benefits" section="healthBenefit" />
      {/* benefitAndRewards */}
      <ImgContent page="Benefits" section="benefitAndRewards" />

      <TravelHelpSupport />
      <OurFaq />
    </section>
  );
};

export default BenefitOfUmrah;
