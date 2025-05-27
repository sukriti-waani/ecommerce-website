import React from "react";
import Img1 from "../../assets/women1.webp";
import Img2 from "../../assets/women2.jpg";
import Img3 from "../../assets/women3.jpg";
import Img4 from "../../assets/women4.jpg";
import Img5 from "../../assets/women5.webp";
// Importing the star icon from react-icons library
import { FaStar } from "react-icons/fa6";

// Array containing data for each product
const ProductsData = [
  {
    id: 1, // Unique key for React rendering
    img: Img1, // Image source
    title: "Women Ethnic", // Product title
    rating: 4.8, // Product rating
    color: "Yellow", // Product color
    aosDelay: "0", // Animation delay using AOS
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Pink",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.4,
    color: "Black",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.3,
    color: "White",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashion Western Tops",
    rating: 4.6,
    color: "Blue",
    aosDelay: "800",
  },
];

// Functional component that returns the product section UI
const Products = () => {
  return (
    // Margin top and bottom
    <div className="mt-14 mb-12">
      {/* Wrapper div with padding and centering */}
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          {/* Small top text */}
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>

          {/* Main heading */}
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>

          {/* Supporting paragraph */}
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Discover our best-selling styles, carefully selected for
            fashion-forward individuals like you. Elevate your wardrobe with
            trendy picks at unbeatable prices.
          </p>
        </div>

        {/* Grid section to display product cards */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-6">
            {/* Loop through each product item */}
            {ProductsData.map((data) => (
              <div
                // AOS animation applied here with delay
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id} // Unique key for each item
                className="space-y-3 text-center" // Vertical spacing and centering text
              >
                {/* Product image */}
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md mx-auto"
                />

                {/* Product title */}
                <h3 className="font-semibold">{data.title}</h3>

                {/* Product color */}
                <p className="text-sm text-gray-600">{data.color}</p>

                {/* Rating section with star icon */}
                <div className="flex justify-center items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
            ))}
          </div>
          {/* View all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the component to be used elsewhere
export default Products;
