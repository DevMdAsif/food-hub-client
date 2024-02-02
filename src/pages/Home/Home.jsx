import AboutUs from "./home/AboutUs";
import Hero from "./home/Hero";
import Testimonials from "./home/Testimonials/Testimonials";
import Menu from "./home/menu/Menu";

function Home() {
  return (
    <div className="w-full">
      <Hero />
      <AboutUs />
      <Menu />
      <Testimonials />
    </div>
  );
}

export default Home;
