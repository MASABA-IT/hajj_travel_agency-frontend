import ShariaCoContent from "../../components/ShariaCoContent/ShariaCoContent";
import ShariaConsultHero from "../../components/ShariaConsultHero/ShariaConsultHero";
import PageFaq from "../../share/PageFaq/PageFaq";
import TravelsArea from "../../share/TravelsArea/TravelsArea";

const ShariaConsultantManage = () => {
  return (
    <section className="h-auto mt-28">
      <ShariaConsultHero />
      <ShariaCoContent />
      <TravelsArea pageName="management" />
      <PageFaq pageName="management" />
    </section>
  );
};

export default ShariaConsultantManage;
