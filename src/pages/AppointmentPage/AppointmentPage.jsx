import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import AppointmentHero from "../../components/AppointmentHero/AppointmentHero";
import AppointmentService from "../../components/AppointmentService/AppointmentService";

const AppointmentPage = () => {
  return (
    <section className=" h-auto mt-28">
      <AppointmentHero />
      <AppointmentService/>
      <AppointmentForm/>
    </section>
  );
};

export default AppointmentPage;
