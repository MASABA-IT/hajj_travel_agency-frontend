import BusinessAssociateGallery from "../../components/BusinessAssociateGallery/BusinessAssociateGallery";
import BusinessAssociateHero from "../../components/BusinessAssociateHero/BusinessAssociateHero";
import PageFaq from "../../share/PageFaq/PageFaq";
import TravelsArea from "../../share/TravelsArea/TravelsArea";

const BusinessAssociateManage = () => {
  return (
    <section className="h-auto mt-28">
      <BusinessAssociateHero />
      <BusinessAssociateGallery />
      <TravelsArea pageName="management" />
      <PageFaq pageName="management" />
    </section>
  );
};

export default BusinessAssociateManage;
