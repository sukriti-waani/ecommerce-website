import React from "react";
import BannerImg from "../../assets/banner.avif";

// Importing icons from react-icons library
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

// Functional component named Banner
const Banner = () => {
  return (
    // Outer wrapper for the banner with min height and centering
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      {/* Tailwind's container class for responsive layout */}
      <div className="container">
        {/* Grid layout: 1 column on small screens, 2 on medium and up */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* ---------- Image Section ---------- */}
          <div data-aos="zoom-in">
            {" "}
            {/* AOS animation: zoom-in effect */}
            <img
              src={BannerImg} // Source of the banner image
              alt="Winter Sale" // Alt text for accessibility
              className="max-w-[400px] h-[350px] w-full mx-auto object-cover" // Styling for size, centering, and fitting
              style={{
                filter: "drop-shadow(-10px 10px 12px rgba(0, 0, 0, 1))", // Custom drop shadow via inline style
              }}
            />
          </div>

          {/* ---------- Text Details Section ---------- */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl font-bold">
              Winter Sale up to 50% Off
            </h1>

            {/* Subtext paragraph with animation and styling */}
            <p
              data-aos="fade-up" // AOS fade-up animation
              className="text-sm text-gray-800 tracking-wide leading-5"
            >
              Embrace the season of savings with our exclusive winter deals!
              Enjoy unbeatable discounts on your favorite treats and warm
              yourself up with the best in quality, taste, and value.
            </p>

            {/* Feature icons and descriptions */}
            <div className="flex flex-col gap-4">
              {/* Feature 1: Quality Products */}
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>

              {/* Feature 2: Fast Delivery */}
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-teal-100 dark:bg-teal-700" />
                <p>Fast Delivery</p>
              </div>

              {/* Feature 3: Easy Payment Method */}
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-700" />
                <p>Easy Payment Method</p>
              </div>

              {/* Feature 4: Get Exciting Offers */}
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-100 dark:bg-blue-600" />
                <p>Get Exciting Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the Banner component as default
export default Banner;
