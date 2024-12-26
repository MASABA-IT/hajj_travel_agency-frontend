import ConsultantsView from "../ConsultantsView/ConsultantsView";
import OurFaq from "../OurFaq/OurFaq";
import SpecialDaeHero from "../SpecialDaeHero/SpecialDaeHero";
import TravelHelpSupport from "../TravelHelpSupport/TravelHelpSupport";

const ManagementBoard = () => {
  return (
    <section className=" h-auto mt-28">
      <SpecialDaeHero />
      <ConsultantsView />
      <TravelHelpSupport />
      <OurFaq/>
    </section>
  );
};

export default ManagementBoard;
