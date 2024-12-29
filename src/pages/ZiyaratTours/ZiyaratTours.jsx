import OurFaq from "../../components/OurFaq/OurFaq";
import ContentImg from "../../components/ReComponent/ContentImg/ContentImg";
import ImgContent from "../../components/ReComponent/ImgContent/ImgContent";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";
import ZiyaratToursHero from "../../components/ZiyaratToursHero/ZiyaratToursHero";
import ComponentChange from "../../share/ComponentChange/ComponentChange";

const ZiyaratTours = () => {
  return (
    <section className="h-auto mt-28">
      <ZiyaratToursHero />
      <ImgContent
        page="facilities"
        section="ZiyaratTours"
        itemKey="significance"
      />
      <ComponentChange />
      <ContentImg
        page="facilities"
        section="ZiyaratTours"
        itemKey="destinationsMakkah"
      />
       <ComponentChange />
       <ImgContent   page="facilities"
        section="ZiyaratTours"
        itemKey="destinationsMedina"/>
        <TravelHelpSupport/>
        <OurFaq/>
    </section>
  );
};

export default ZiyaratTours;
