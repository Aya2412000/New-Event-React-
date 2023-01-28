import AboutUs from "./components/About Us";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview/Overview";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs/>
      <Overview/>
    </div>
  )
}
