import BoardOfDirectorHero from "../../components/BoardOfDirectorHero/BoardOfDirectorHero";
import BoardOfDirectorContent from "../../components/BoardOfDirectorContent/BoardOfDirectorContent";
import TravelsArea from "../../share/TravelsArea/TravelsArea";
import PageFaq from "../../share/PageFaq/PageFaq";

const BoardOfDirectorManage = () => {
  return (
    <section className="h-auto mt-28">
      <BoardOfDirectorHero />
      <BoardOfDirectorContent />
      <TravelsArea pageName="management" />
      <PageFaq pageName="management" />
    </section>
  );
};

export default BoardOfDirectorManage;
