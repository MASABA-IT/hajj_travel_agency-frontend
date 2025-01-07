import FlagshipAgencyHero from "../../components/FlagshipAgencyHero/FlagshipAgencyHero";
import ContentImg from "../../components/ReComponent/ContentImg/ContentImg";
import ImgContent from "../../components/ReComponent/ImgContent/ImgContent";
import ComponentChange from "../../share/ComponentChange/ComponentChange";
import PageFaq from "../../share/PageFaq/PageFaq";
import TravelsArea from "../../share/TravelsArea/TravelsArea";

const FlagshipAgency = () => {
  return (
    <section className="h-auto mt-28">
      <FlagshipAgencyHero />
      <ImgContent
        page="management"
        section="flagshipAgency"
        itemKey="significance"
      />
      <ComponentChange />
      <ContentImg
        page="management"
        section="flagshipAgency"
        itemKey="umrahServices"
      />
      <ComponentChange />
      <ImgContent
        page="management"
        section="flagshipAgency"
        itemKey="reasons"
      />
      <ComponentChange />
      <ContentImg
        page="management"
        section="flagshipAgency"
        itemKey="planning"
      />
      <TravelsArea pageName="management" />
      <PageFaq pageName="management" />
    </section>
  );
};

export default FlagshipAgency;
