*/Home.jsx*/
import Hero from "../components/Layout/Hero";
const Home = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
import heroImg from "../../assets/rj.webp";


*/Hero.jsx*/
const Hero = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <img 
        src={heroImg} 
        alt="Quickora" 
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />
      
      {/* Overlay for Text */}

      {/* Shop Now Button Positioned Above XXXXXXXXX */}
      <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2">
        <Link to="#" className="bg-white text-black px-6 py-3 rounded-md text-lg font-semibold shadow-lg">
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
