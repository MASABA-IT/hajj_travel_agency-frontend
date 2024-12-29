import OurFaq from "../../components/OurFaq/OurFaq";
import ContentImg from "../../components/ReComponent/ContentImg/ContentImg";
import ImgContent from "../../components/ReComponent/ImgContent/ImgContent";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";
import UmrahTrainingHero from "../../components/UmrahTrainingHero/UmrahTrainingHero";
import ComponentChange from "../../share/ComponentChange/ComponentChange";

const UmrahTraining = () => {
  return (
    <section className="h-auto mt-28">
      <UmrahTrainingHero />
      <ImgContent
        page="facilities"
        section="UmrahTraining"
        itemKey="training"
      />
      <ComponentChange />
      <ContentImg
        page="facilities"
        section="UmrahTraining"
        itemKey="kafelaJoin"
      />
      <ComponentChange />
      <ImgContent
        page="facilities"
        section="UmrahTraining"
        itemKey="whyChoose"
      />
      <ComponentChange />
      <ContentImg
        page="facilities"
        section="UmrahTraining"
        itemKey="bdToSaudi"
      />
      <TravelHelpSupport />
      <OurFaq />
    </section>
  );
};

export default UmrahTraining;
