// import BenefitContentFive from "../../components/BenefitContentFive/BenefitContentFive";
// import BenefitContentFour from "../../components/BenefitContentFour/BenefitContentFour";
// import BenefitContentSix from "../../components/BenefitContentSix/BenefitContentSix";
// import BenefitUmrahContentThree from "../../components/BenefitUmrahContentThree/BenefitUmrahContentThree";
// import BenefitUmrahContentTwo from "../../components/BenefitUmrahContentTwo/BenefitUmrahContentTwo";
import BenefitUmrahHero from "../../components/BenefitUmrahHero/BenefitUmrahHero";

import OurFaq from "../../components/OurFaq/OurFaq";
import ContentImg from "../../components/ReComponent/ContentImg/ContentImg";
import ImgContent from "../../components/ReComponent/ImgContent/ImgContent";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";
import ComponentChange from "../../share/ComponentChange/ComponentChange";

const BenefitOfUmrah = () => {
  return (
    <section className="  mt-28 h-auto ">
      <BenefitUmrahHero />
      {/* Content  */}
      <ContentImg page="umrah" section="Benefits" itemKey="benefit" />
      <ComponentChange />
      {/* journey */}
      <ImgContent page="umrah" section="Benefits" itemKey="umrahJourney" />
      <ComponentChange />
      {/* personal */}
      <ContentImg page="umrah" section="Benefits" itemKey="personalBenefit" />
      <ComponentChange />
      {/* social */}
      <ImgContent page="umrah" section="Benefits" itemKey="socialBenefit" />
      <ComponentChange />
      {/* Health benefits */}
      <ContentImg page="umrah" section="Benefits" itemKey="healthBenefit" />
      <ComponentChange />
      {/* benefitAndRewards */}
      <ImgContent page="umrah" section="Benefits" itemKey="benefitAndRewards" />

      <TravelHelpSupport />
      <OurFaq />
    </section>
  );
};

export default BenefitOfUmrah;
