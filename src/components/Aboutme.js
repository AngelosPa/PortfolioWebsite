import AOS from "aos";
import Menu from "./innercomponents/Menu";
import Techno from "./innercomponents/Techno";
import "aos/dist/aos.css"; // You can also use <link> for styles
import React, { useState, useEffect } from "react";

function Aboutme() {
  //usetate to understand how much the user scrolled
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset
  const [scroller, setScroller] = useState(0);
  //window.pageYOffset returns the number of pixels the document is currently scrolled along the vertical(y) axis
  const handleScroll = () => {
    // console.log(window.pageYOffset);
    // console.log(window.innerHeight);
    //to stop scrolling
    if (window.pageYOffset <= 440) {
      setScroller(window.pageYOffset);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  //useeffect to initialize it as soon as the component mounts!!
  useEffect(() => {
    //we need to stop it when the component gets unmounted otherwise we left this listener active and slow down our things
    if (window.pageYOffset >= window.innerHeight) {
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [window.pageYOffset]);
  //console.log(scroller);

  return (
    <div
      className="about-me"
      // style={{ opacity: `${scroller * 2}%` }}
      style={{ opacity: `${scroller / 3}%` }}
    >
      <div>
        <p>
          Angelo is an aspiring newcomer developer currently based in Leipzig,
          Germany. He entered in 2019 into the world of web engineering as a
          student of the DCI (Digital Career Institute). After some years of
          traveling across Europe and collecting experiences he discovered his
          passion for programming, creating UI effects, animations and
          developing unique, dynamic user experiences as well digital drawing
          and 3d effects.
        </p>
      </div>
      {/*  style={{ transform: `translateY(-${scroller * 0.5}px)` }} */}
      <div className="parent-div-for-technologies-and-menu">
        <Techno scroller={scroller} />
        <Menu scroller={scroller} />
      </div>
    </div>
  );
}

export default Aboutme;

{
  /* <div
data-aos="fade-up"
data-aos-offset="200"
data-aos-delay="50"
data-aos-duration="1000"
data-aos-easing="ease-in-out"
data-aos-mirror="true"
data-aos-once="false"
data-aos-anchor-placement="top-center"
>
</div> */
}
