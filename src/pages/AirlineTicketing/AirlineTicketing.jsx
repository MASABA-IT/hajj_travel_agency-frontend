import AirlineHero from "../../components/AirlineHero/AirlineHero";
import OurFaq from "../../components/OurFaq/OurFaq";
import ContentImg from "../../components/ReComponent/ContentImg/ContentImg";
import ImgContent from "../../components/ReComponent/ImgContent/ImgContent";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";
import ComponentChange from "../../share/ComponentChange/ComponentChange";

const AirlineTicketing = () => {
  return (
    <section className="h-auto mt-28">
      <AirlineHero />
      <ImgContent
        page="facilities"
        section="AirlineTicket"
        itemKey="cheapest"
      />
      <ComponentChange />
      <ContentImg
        page="facilities"
        section="AirlineTicket"
        itemKey="ticketBooking"
      />
      <ComponentChange />
      <ImgContent
        page="facilities"
        section="AirlineTicket"
        itemKey="ticketDeals"
      />
      <ComponentChange />
      <ContentImg
        page="facilities"
        section="AirlineTicket"
        itemKey="ticketPrice"
      />
      <TravelHelpSupport/>
      <OurFaq/>
    </section>
  );
};

export default AirlineTicketing;
