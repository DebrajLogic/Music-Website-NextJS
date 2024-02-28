import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-gray-400 py-12 text-center px-2 sm:text-left">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p>
            Discover music's magic at our premier Music School, fostering talent
            and community for all skill levels.
          </p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>123 Main Street</p>
          <p>Anyville, Anytown</p>
          <p>ABC 123</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        {" "}
        &copy; {currentYear} Music School. All Rights Reserved{" "}
      </p>
    </footer>
  );
}

export default Footer;
