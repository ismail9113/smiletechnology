import React, { useState } from 'react';
// import myPhoto from './photo/WhatsApp Image 2024-10-18 at 22.27.45_bdf030ed.jpg';
import myPhoto from './photo/smiletechnology.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu

  return (
    <header className="bg-white bg-opacity-5 text-black shadow-lg">
      <div className="container mx-auto flex justify-between items-center h-24 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center justify-center">
          <img
            className="h-16 "
            // src="https://i.ibb.co/6Yxs70d/2021-10-26-23h27-03.png"
            src={myPhoto}
            alt="Logo"
          />
          <span className="ml-4 uppercase font-black text-black">
            smile
            <br />
           technology
          </span>
        </a>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex md:contents font-semibold text-base lg:text-lg">
          <ul className="flex items-center">
            <li className="flex items-center space-x-2 p-5 xl:p-8">
              <lord-icon
                src="https://cdn.lordicon.com/jeuxydnh.json"
                trigger="morph"
                state="morph-mantion"
                colors="primary:#7e22ce,secondary:#a855f7"
                style={{ cursor: 'pointer', width: '20px', height: '20px' }}>
              </lord-icon>

              <a href="/" className="relative text-black  no-underline hover:text-purple-500 link-style">
                Home
              </a>
            </li>

            <li className="flex items-center space-x-2 p-5 xl:p-8">
              <lord-icon
                src="https://cdn.lordicon.com/fqbvgezn.json"
                trigger="hover"
                colors="primary:#7e22ce,secondary:#a855f7"
                style={{ cursor: 'pointer', width: '20px', height: '20px' }}
              >
              </lord-icon>
              <a href="#services" className="relative text-black  no-underline hover:text-purple-500 link-style">

                Services
              </a>
            </li>

            <li className="flex items-center space-x-2 p-5 xl:p-8">
              <lord-icon
                src="https://cdn.lordicon.com/gvtjlyjf.json"
                trigger="morph"
                colors="primary:#7e22ce,secondary:#a855f7"
                style={{ cursor: 'pointer', width: '20px', height: '20px' }}>
              </lord-icon>
              <a href="#projects" className="relative text-black  no-underline hover:text-purple-500 hover:decoration-purple-600 link-style"
              // style={{ text-decoration-color: '#7e22ce' }}
              >

                Projects
              </a>
            </li>

            <li className="flex items-center space-x-2 p-5 xl:p-8">
              <lord-icon
                src="https://cdn.lordicon.com/xmaezqzk.json"
                trigger="loop"
                state="loop-flutter"
                colors="primary:#7e22ce,secondary:#a855f7"
                style={{ cursor: 'pointer', width: '20px', height: '20px' }}
              >
              </lord-icon>
              <a href="#blog" className="relative text-black  no-underline hover:text-purple-500 link-style">
                Blog
              </a>
            </li>

            <li className="flex items-center space-x-2 p-5 xl:p-8">
              <lord-icon
                src="https://cdn.lordicon.com/srupsmbe.json"
                trigger="in"
                delay="1500"
                state="in-reveal"
                colors="primary:#7e22ce,secondary:#a855f7"
                style={{ cursor: 'pointer', width: '20px', height: '20px' }}>
              </lord-icon>
              <a href="#Portfolio" className="relative text-black  no-underline hover:text-purple-500 link-style">
                Portfolio
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact Button with Gradient Background (Hidden on Mobile) */}
        <a
          href="#contact"
          className="hidden md:block rounded-full font-bold px-8 py-2 text-white "
          style={{
            backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
          }}
        >
          Get in Touch
        </a>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`${isOpen ? 'translate-x-0' : 'translate-x-full'
          } fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden absolute`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-black">
            &times; {/* Close icon */}
          </button>
        </div>
        <nav className="flex flex-col mt-4 ">
          <a href="/" className="p-4 hover:bg-gray-100 hover:text-blue-500 relative transition-all duration-300 ease-in-out">
            Home
            <span className="block h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out absolute bottom-0 left-0 hover:w-full"></span>
          </a>
          <a href="#about" className="p-4 hover:bg-gray-100 hover:text-blue-500 relative transition-all duration-300 ease-in-out">
            About
            <span className="block h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out absolute bottom-0 left-0 hover:w-full"></span>
          </a>
          <a href="#projects" className="p-4 hover:bg-gray-100 hover:text-blue-500 relative transition-all duration-300 ease-in-out">
            Projects
            <span className="block h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out absolute bottom-0 left-0 hover:w-full"></span>
          </a>
          <a href="#services" className="p-4 hover:bg-gray-100 hover:text-blue-500 relative transition-all duration-300 ease-in-out">
            Services
            <span className="block h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out absolute bottom-0 left-0 hover:w-full"></span>
          </a>
          <a href="#blog" className="p-4 hover:bg-gray-100 hover:text-blue-500 relative transition-all duration-300 ease-in-out">
            Blog
            <span className="block h-0.5 w-0 bg-blue-500 transition-all duration-300 ease-in-out absolute bottom-0 left-0 hover:w-full"></span>
          </a>
        </nav>


        {/* Centered Contact Button in Mobile Menu */}
        <div className="flex justify-center mt-4">
          <a
            href="#contact"
            className="rounded-full font-bold px-8 py-2 text-white"
            style={{
              backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
