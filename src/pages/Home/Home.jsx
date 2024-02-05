import AboutUs from "./home/AboutUs";
import Hero from "./home/Hero";
import PopularMenu from "./home/PopularMenu/PopularMenu";
import Testimonials from "./home/Testimonials/Testimonials";
import AppInfo from "./home/appInfo/AppInfo";

function Home() {
  return (
    <div className="w-full">
      <Hero />
      <AboutUs />
      <PopularMenu />
      <Testimonials />
      <AppInfo />
    </div>
  );
}

export default Home;
