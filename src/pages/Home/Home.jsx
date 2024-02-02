import AboutUs from "./home/AboutUs";
import Hero from "./home/Hero";
import Testimonials from "./home/Testimonials/Testimonials";
import AppInfo from "./home/appInfo/AppInfo";
import Menu from "./home/menu/Menu";

function Home() {
  return (
    <div className="w-full">
      <Hero />
      <AboutUs />
      <Menu />
      <Testimonials />
      <AppInfo />
    </div>
  );
}

export default Home;
