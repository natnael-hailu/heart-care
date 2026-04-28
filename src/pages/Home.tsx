import Hero from "../components/Hero";
import Services from "../components/Services";
import Doctors from "../components/Doctors";
import AppointmentForm from "../components/AppointmentForm";
import type { JSX } from "react";

const Home = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Services />
      <Doctors />
      <AppointmentForm /> 
    </>
  );
};

export default Home;