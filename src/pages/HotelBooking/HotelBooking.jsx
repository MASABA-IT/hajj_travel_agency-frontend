import HotelBookingHero from "../../components/HotelBookingHero/HotelBookingHero";
import HotelsBookingList from "../../components/HotelsBookingList/HotelsBookingList";
import OurFaq from "../../components/OurFaq/OurFaq";
import ContentImg from "../../components/ReComponent/ContentImg/ContentImg";
import ImgContent from "../../components/ReComponent/ImgContent/ImgContent";
import TravelHelpSupport from "../../components/TravelHelpSupport/TravelHelpSupport";
import ComponentChange from "../../share/ComponentChange/ComponentChange";

const HotelBooking = () => {
  return (
    <section className="h-auto mt-28">
      <HotelBookingHero />
      <ContentImg
        page="facilities"
        section="HotelBooking"
        itemKey="hotelProvide"
      />
      <ComponentChange />
      <ImgContent
        page="facilities"
        section="HotelBooking"
        itemKey="hotelFacilities"
      />
      <HotelsBookingList />
      <ContentImg
        page="facilities"
        section="HotelBooking"
        itemKey="facilitiesAndAmenities"
      />
      <TravelHelpSupport />
      <OurFaq />
    </section>
  );
};

export default HotelBooking;
