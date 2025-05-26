import React from "react";
import Prod1 from "../../assets/shirt1.webp";
import Prod2 from "../../assets/shirt2.avif";
import Prod3 from "../../assets/shirt3.jpg";

// Importing the FaStar icon component from react-icons library for star ratings
import { FaStar } from "react-icons/fa";

// Creating a constant array 'ProductsData' that holds product objects with details
const ProductsData = [
  {
    id: 1,
    img: Prod1,
    title: "Casual Wear",
    description:
      "This Shirt is a crisp white formal button-down with a structured and polished design. It has full sleeves with cuffed ends and a curved hem, giving it a sophisticated look that's perfect for office wear or smart casual occasions. It's paired with high-waisted denim and styled with sunglasses, adding a modern and chic touch to the outfit.",
  },
  {
    id: 2,
    img: Prod2,
    title: "Printed Shirt",
    description:
      "This Shirt is an olive green printed shirt with a slightly oversized fit, giving it a relaxed and effortless appearance. It features full sleeves and a minimalistic design that works well for everyday wear. The untucked style makes it suitable for pairing with jeans or casual trousers for a street-style inspired look.",
  },
  {
    id: 3,
    img: Prod3,
    title: "Women Shirt",
    description:
      "This Shirt is a green, black, and white plaid shirt that offers a relaxed and cozy vibe. Made of a soft, flannel-like fabric, it is styled open over a beige inner top, creating a laid-back casual look. The pairing with light-wash high-waisted jeans enhances the comfortable and trendy feel of the outfit",
  },
];

// Creating the main functional component called TopProducts
const TopProducts = () => {
  return (
    <div>
      {/* Container for the whole component */}
      <div className="container">

        {/* Header Section */}
        <div className="text-left mb-24">
          {/* Small label */}
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          {/* Main title */}
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          {/* Subtext describing the section */}
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Explore our latest collection of premium quality shirts with perfect blend of style and comfort.
          </p>
        </div>

        {/* Body Section to show the products in a grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {/* Mapping through ProductsData array to render each product card */}
          {ProductsData.map((data) => (
            <div
              key={data.id} // Adding a unique key for each rendered item
              data-aos="zoom-in" // AOS animation effect
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* Image Section */}
              <div className="h-[100px]">
                <img
                  src={data.img} // Displaying product image
                  alt="" // Image alt left blank for now (can be updated)
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>

              {/* Product Details Section */}
              <div className="p-4 text-center">
                {/* Star Rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-teal-800" />
                  <FaStar className="text-teal-800" />
                  <FaStar className="text-teal-800" />
                  <FaStar className="text-teal-800" />
                  {/* You can add a fifth star or half-star if needed */}
                </div>

                {/* Product title */}
                <h1 className="text-xl font-bold">{data.title}</h1>

                {/* Product description (limited to 2 lines with line-clamp) */}
                <p className="text-gray-700 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>

                {/* Order button with hover effect */}
                <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Exporting the TopProducts component so it can be imported and used in other files
export default TopProducts;
