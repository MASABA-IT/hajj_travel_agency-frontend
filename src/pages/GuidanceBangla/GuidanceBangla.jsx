import GuidanceBanglaHero from "../../components/GuidanceBanglaHero/GuidanceBanglaHero";
import ContentImg from "../../components/ReComponent/ContentImg/ContentImg";
import ImgContent from "../../components/ReComponent/ImgContent/ImgContent";
import ComponentChange from "../../share/ComponentChange/ComponentChange";

const GuidanceBangla = () => {
  return (
    <section className="h-auto mt-28">
      <GuidanceBanglaHero />
      <ContentImg page="guidance" section="Bangla" itemKey="process" />
      <ComponentChange />
      <ImgContent page="guidance" section="Bangla" itemKey="guide" />
      <ComponentChange />
      <ContentImg page="guidance" section="Bangla" itemKey="sai" />
      <ComponentChange />
      <ImgContent page="guidance" section="Bangla" itemKey="wajib" />
      <ComponentChange />
      <ContentImg page="guidance" section="Bangla" itemKey="obligations" />
      <ComponentChange />
      <ImgContent page="guidance" section="Bangla" itemKey="doNot" />
    </section>
  );
};

export default GuidanceBangla;
