import Apointment from "../Appointment/Apointment";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ChooseUs></ChooseUs>
      <Apointment></Apointment>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
