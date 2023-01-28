import AboutUs from "./components/About Us";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OverView from "./components/Overview/Overview";
import WhachVedio from "./components/WatchVedio/WhachVedio";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs/>
      <OverView/>
      <WhachVedio/>
    </div>
  )
}
