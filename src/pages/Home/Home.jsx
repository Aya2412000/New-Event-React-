import AboutUs from "./components/AboutUs";
import AccordionComponent from "./components/AccordionComponent/AccordionComponent";
import ContactUs from "./components/ContactUs";
import CreativeSpeaker from "./components/CreativeSpeaker";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OurPrograms from "./components/OurPrograms";
import OurSponsors from "./components/OurSponsors";
import OverView from "./components/Overview";
import RegisterHere from "./components/RegisterHere";
import VenueComponent from "./components/Venue";
import WatchVideo from "./components/WatchVideo";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs/>
      <OverView/>
      <WatchVideo/>
      <CreativeSpeaker/>
      <OurPrograms/>
      <RegisterHere/>
      <AccordionComponent/>
      <VenueComponent/>
      <OurSponsors/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}
