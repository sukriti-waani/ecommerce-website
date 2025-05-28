import React from "react";
import footerLogo from "../../assets/Logo1.png";
import Banner from "../../assets/footer-pattern.avif";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

// Background style
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white mb-20">
      <div className="container mx-auto px-4">
        <div data-aos="zoom-in" className="grid md:grid-cols-2 pb-20 pt-10 gap-8">
          {/* Company Info */}
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 mb-4">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Fashique
            </h1>
            <p>
              At Fashique, we blend creativity with style to bring you the
              latest trends in fashion. Discover quality, comfort, and
              elegance—crafted to make you stand out every day.
            </p>
          </div>

          {/* Links & Contact in One Line */}
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            {/* Important Links */}
            <div>
              <h2 className="text-xl font-bold mb-3">Important Links</h2>
              <ul className="flex flex-col gap-2 text-gray-200">
                {FooterLinks.map((link) => (
                  <li
                    key={link.title}
                    className="hover:text-primary hover:translate-x-1 duration-300"
                  >
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-xl font-bold mb-3">Quick Links</h2>
              <ul className="flex flex-col gap-2 text-gray-200">
                {FooterLinks.map((link) => (
                  <li
                    key={`${link.title}-quick`}
                    className="hover:text-primary hover:translate-x-1 duration-300"
                  >
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-xl font-bold mb-3">Contact Us</h2>
              <div className="flex items-center gap-3 mb-2">
                <FaLocationArrow />
                <p>Bangalore, Maharashtra</p>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <a href="#"><FaInstagram className="text-2xl" /></a>
                <a href="#"><FaFacebook className="text-2xl" /></a>
                <a href="#"><FaLinkedin className="text-2xl" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
