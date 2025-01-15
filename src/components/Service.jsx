import React from 'react';

const Service = () => {
  return (
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-2xl font-bold text-purple-700">/...Services.../</h2>
        <h2 class="text-3xl font-bold text-gray-900">Our Expertise</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

          {/* <!-- Service 1: Web Design / Development --> */}
          <div class=" bg-gray-100 shadow-md p-6 rounded-lg">
            <div class="text-red-500 mb-4">
              <lord-icon
                src="https://cdn.lordicon.com/ailnzwyn.json"
                trigger="loop"
                delay="1000"
                state="morph-code"
                colors="primary:#104891,secondary:#1b1091"
                style={{ width: '50px', height: '50px' }}
              >
              </lord-icon>
            </div>
            <h3 class="text-lg font-semibold hover:text-purple-800">Web Design / Development</h3>
            <div class="w-12 h-1 bg-purple-700 mx-auto mt-2 mb-4"></div>
            <p class="mt-2 text-black">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            {/* <!-- Button added here --> */}
            <button class="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
              See Now
            </button>
          </div>

          {/* <!-- Service 2: UI/UX Design --> */}
          <div class=" bg-gray-100 shadow-md p-6 rounded-lg">
            <div class="text-purple-500 mb-4">
              <lord-icon
                src="https://cdn.lordicon.com/vvkusrbh.json"
                trigger="loop"
                delay="2000"
                colors="primary:#104891,secondary:#1b1091"
                style={{ width: '50px', height: '50px' }}>
              </lord-icon>
            </div>
            <h3 class="text-lg font-semibold">UI/UX Design</h3>
            <div class="w-12 h-1 bg-purple-700 mx-auto mt-2 mb-4"></div>
            <p class="mt-2 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            {/* <!-- Button added here --> */}
            <button class="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
              See Now
            </button>
          </div>

          {/* <!-- Service 3: ADS Run --> */}
          <div class=" bg-gray-100 shadow-md p-6 rounded-lg">
            <div class="text-purple-500 mb-4">

              <lord-icon
                src="https://cdn.lordicon.com/pfvaixkr.json"
                trigger="loop"
                delay="1000"
                colors="primary:#2516c7,secondary:#3080e8"
                style={{ width: '50px', height: '50px' }}

              >
              </lord-icon>

            </div>
            <h3 class="text-lg font-semibold">ADS Run</h3>
            <div class="w-12 h-1 bg-purple-700 mx-auto mt-2 mb-4"></div>
            <p class="mt-2 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            {/* <!-- Button added here --> */}
            <button class="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
              See Now
            </button>
          </div>

          {/* <!-- Service 4: App Development --> */}
          <div class=" bg-gray-100 shadow-md p-6 rounded-lg">
            <div class="text-purple-500 mb-4">
              <lord-icon
                src="https://cdn.lordicon.com/srupsmbe.json"
                trigger="loop"
                delay="2000"
                colors="primary:#104891,secondary:#1b1091"
                style={{ width: '50px', height: '50px' }}>
              </lord-icon>
            </div>
            <h3 class="text-lg font-semibold">App Development</h3>
            <div class="w-12 h-1 bg-purple-700 mx-auto mt-2 mb-4"></div>
            <p class="mt-2 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            {/* <!-- Button added here --> */}
            <button class="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
              See Now
            </button>
          </div>

          {/* <!-- Service 5: Whatsapp Marketing --> */}
          <div class=" bg-gray-100 shadow-md p-6 rounded-lg">
            <div class="text-purple-500 mb-4">
              {/* <svg class="w-10 h-10 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
              {/* <!-- Add SVG icon for Whatsapp Marketing --> */}

              {/* <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /> */}
              {/* <path d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118" stroke="currentColor" stroke-width="1.5" /> */}
              {/* </svg> */}
              <lord-icon
                src="https://cdn.lordicon.com/axewyqun.json"
                trigger="loop"
                delay="2000"
                state="hover-roll"
                colors="primary:#2516c7,secondary:#3080e8"
              style={{width:'50px',height:'50px'}}
              >

              </lord-icon>

            </div>
            <h3 class="text-lg font-semibold">Whatsapp Marketing</h3>
            <div class="w-12 h-1 bg-purple-700 mx-auto mt-2 mb-4"></div>
            <p class="mt-2 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            {/* <!-- Button added here --> */}
            <button class="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
              See Now
            </button>
          </div>

          {/* <!-- Service 6: Email Marketing --> */}
          <div class=" bg-gray-100 shadow-md p-6 rounded-lg">
            <div class="text-purple-500 mb-4">
              <lord-icon
                src="https://cdn.lordicon.com/vpbspaec.json"
                trigger="loop"
                delay="1500"
                state="in-assembly"
                colors="primary:#104891,secondary:#1b1091"
                style={{ width: '50px', height: '50px' }}
              >
              </lord-icon>
            </div>
            <h3 class="text-lg font-semibold">Email Marketing</h3>
            <div class="w-12 h-1 bg-purple-700 mx-auto mt-2 mb-4"></div>
            <p class="mt-2 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            {/* <!-- Button added here --> */}
            <button class="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
              See Now
            </button>
          </div>

        </div>
      </div>
    </div >

  );
}

export default Service;
