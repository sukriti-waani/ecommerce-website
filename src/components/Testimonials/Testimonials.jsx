import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Aarav Agrawal",
    text: "Absolutely amazing service! The quality and attention to detail exceeded my expectations. Highly recommend to anyone looking for reliability and style.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vIYQRGYERoAZ0byZHcAXptiutBF3qcVyMW8UAcqB_BWM4d9zyO9jtOh25zqcg2_EIg8&usqp=CAU",
  },
  {
    id: 2,
    name: "Kabir Khan",
    text: "The experience was seamless from start to finish. Friendly staff and fast delivery made it all the better. Will definitely return again!",
    img: "https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=612x612&w=0&k=20&c=Xrwp5ePvm6RjixgAjJo-OAw9oXkLt_HcmT3bdlLZUdw=",
  },
  {
    id: 3,
    name: "Vedant Kumar",
    text: "Great quality and exceptional service. I’m really happy with my purchase and would highly recommend this to anyone looking for trendy fashion.",
    img: "https://www.shutterstock.com/image-photo/happy-positive-indian-arabian-curlyhaired-260nw-2146554791.jpg",
  },
  {
    id: 4,
    name: "Ishika Kumari",
    text: "Customer support was top-notch. They resolved my queries quickly and professionally. I truly felt valued as a customer.",
    img: "https://media.istockphoto.com/id/629077354/photo/self-acceptance-goes-a-long-way-to-being-happy.jpg?s=612x612&w=0&k=20&c=XpmWw2GodU8bX89n9BBaef0aFHNg_TZecklxCa-KtwU=",
  },
  {
    id: 5,
    name: "Ishaan Anand",
    text: "I've never received so many compliments on an outfit before! The designs are unique and the fit is perfect. Thank you for making me feel confident.",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*yKX-JDve35qQAI2OKHjHlw.jpeg",
  },
  {
    id: 6,
    name: "Rishav Raj",
    text: "This was my first purchase and I’m genuinely impressed. The material, color, and fit were all perfect. I'll be ordering again soon.",
    img: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L21vdGFybzdfcGhvdG9fb2ZfaGFuZHNvbWVfc21pbGluZ195b3VuZ19tYW5faW5fYmx1ZV9zaGlydF9hbmRfZ19kOTM2ZTNiZS1iOGVhLTRkZjEtYTBiOS1hNWYzMjE5M2Y0ZjAucG5n.png",
  },
  {
    id: 7,
    name: "Gunjan Gupta",
    text: "Beautiful packaging, timely delivery, and premium quality. This brand truly understands what the customer wants!",
    img: "https://www.shutterstock.com/image-photo/portrait-joyful-indian-woman-white-600nw-2433253791.jpg",
  },
];


const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          {/* Small top text */}
          <p data-aos="fade-up" className="text-sm text-primary">
            What are customers saying
          </p>

          {/* Main heading */}
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>

          {/* Supporting paragraph */}
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Hear directly from our users about their experiences, satisfaction, and the impact we've made in their journey. Real stories, real feedback.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="tex-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-blacj/20 text-9xl font-serif absolute top-0 right-0">
                    ''
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
