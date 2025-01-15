import React from 'react'

const Main = () => {
  return (
    <>
  
    <div class="absolute inset-0 -z-10 h-full w-full  bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
   <div className="flex flex-col md:flex-row justify-between items-center p-8  max-w-7xl mx-auto">
    {/* Left Side: Text */}
    <div className="md:w-1/2 px-4">
      <h1 className="md:text-4xl text-2xl font-bold text-gray-900">
        Great <span className="text-purple-500">software</span> is
        <br />
        <span className="text-gray-900">built by great</span> <span className="text-purple-500">teams</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        We help build and manage a team of world-class developers to bring your vision to life.
      </p>
      <button className="mt-6 px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800">
        Let's get started!
      </button>
    </div>

    {/* Right Side: Illustration */}
    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center px-4">
      <div className="flex justify-center w-full">
        <img
          // src="././src/assets/Hero-Wrapper__image--center.png"
          src="././src/assets/Data extraction.gif"
          alt="Developer illustration"
          style={{ width: '440px', height: 'auto' }}
          className="sm:w-80 md:w-96 "
         
        />
      </div>
    </div>
  </div>




  </>);
  }

export default Main