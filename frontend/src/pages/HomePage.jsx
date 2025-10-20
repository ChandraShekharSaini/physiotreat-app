import React from "react";
import NavBar from "../components/NavBar";
import NavBarTwo from "../components/NavBarTwo";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import HomeComponeneOne from "../HomeComponents/HomeComponentOne";

const slideImages = [
  {
    url: "/slideshow1.png",
  },
  {
    url: "/slideshow2.png",
  },
 
];

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* Fixed Navbar */}
      <NavBar />
      <NavBarTwo />

      {/* Slideshow Section */}
      <div className="slide-container z-0">
        <Slide
          duration={3000}
          transitionDuration={800}
          infinite
          arrows
          autoplay
          easing="ease"
        >
          {slideImages.map((slide, index) => (
            <div key={index} className="each-slide">
              <div
                style={{
                  backgroundImage: `url(${slide.url})`,
                }}
                className="h-[500px] sm:h-[400px] md:h-[550px] lg:h-[600px]
                           bg-cover bg-center flex items-center justify-center"
              ></div>
            </div>
          ))}
        </Slide>
      </div>

    <HomeComponeneOne/>
    
    </div>
  );
};

export default HomePage;
