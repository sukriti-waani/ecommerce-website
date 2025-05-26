// npm i react-slick
// npm i slick-carousel    (for slider in terminal)

import React from "react";
import Image1 from "../../assets/women.png";
import Image2 from "../../assets/people.png";
import Image3 from "../../assets/sale.png";

import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "✨ Feel Good, Look Great – For Less!",
    description:
      "Your wardrobe deserves an upgrade! Explore trendsetting styles with up to 50% OFF on all women's wear. Limited stock, unlimited style!",
  },
  {
    id: 2,
    img: Image2,
    title: "Everything Must Go – Up to 60% OFF!",
    description:
      "Don’t miss out on the ultimate shopping spree! Fresh fits, seasonal styles, and your favorite brands are all on massive discounts. Grab it before it’s gone!",
  },
  {
    id: 3,
    img: Image3,
    title: "💥 Shop the Sale. Love the Savings.",
    description:
      "Unbeatable Prices. Unmatched Style. Unmissable Deals. Fashion meets affordability – now with up to 40–60% OFF. Refresh your closet without breaking the bank. Shop now and slay every look!",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-900 dark:text-white duration-200">
      {/* Background Pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 z-0"></div>

      {/* Hero Section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text Content Section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h2
                    data-aos="Zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-maroon py-2 px-4 rounded-full">
                      Order Now
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <img
                      data-aos="Zoom-in"
                      data-aos-once="true"
                      src={data.img}
                      alt={data.title}
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
