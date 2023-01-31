import AboutUs from "./components/AboutUs";
import CreativeSpeaker from "./components/CreativeSpeaker";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OurPrograms from "./components/OurPrograms";
import OverView from "./components/Overview";
import RegisterHere from "./components/RegisterHere";
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
    </div>
  )
}
