import MangementContentGallery from "../../components/MangementContentGallery/MangementContentGallery";
import UmrahGuidesHero from "../../components/UmrahGuidesHero/UmrahGuidesHero";
import PageFaq from "../../share/PageFaq/PageFaq";
import TravelsArea from "../../share/TravelsArea/TravelsArea";

const UmrahGuidesManage = () => {
  return (
    <section className="h-auto mt-28">
      <UmrahGuidesHero />
      <MangementContentGallery />
      <TravelsArea pageName="management" />
      <PageFaq pageName="management" />
    </section>
  );
};

export default UmrahGuidesManage;
