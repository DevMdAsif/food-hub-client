import AboutUs from "./home/AboutUs";
import Hero from "./home/Hero";
import Menu from "./home/menu/Menu";

function Home() {
  return (
    <div className="w-full">
      <Hero />
      <AboutUs />
      <Menu />
    </div>
  );
}

export default Home;
