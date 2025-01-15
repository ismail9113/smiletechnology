import React from 'react'

const Contact = () => {
  return (
    <div className=" min-h-screen flex justify-center items-center p-5">
      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden w-full max-w-[900px]">
        {/* Contact Form Section */}
        <div className="md:w-3/5 p-8 sm:p-10 bg-gray-100">
          <h3 className="text-purple-500 text-lg font-bold mb-2">Get In Touch</h3>
          <h1 className="text-xl sm:text-2xl font-bold mb-6">Hey! Let's Talk</h1>
          <form className="space-y-4 sm:space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 text-base sm:text-lg border border-gray-300 rounded-lg focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 text-base sm:text-lg border border-gray-300 rounded-lg focus:outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full px-4 py-2 text-base sm:text-lg border border-gray-300 rounded-lg focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-4 py-2 text-base sm:text-lg border border-gray-300 rounded-lg focus:outline-none h-28 sm:h-32 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className=" hover:bg-purple-700 w-full m-auto px-8 py-3 mx-0  text-gray-50 text-lg  bg-purple-600 rounded-full cursor-pointer focus:outline-none"
            >
              Send Now
            </button>


          </form>
        </div>

        {/* Contact Info Section */}
        <div className="md:w-2/5 bg-gray-100 p-8 sm:p-10">
          <ul className="space-y-4 sm:space-y-6">
            <li>
              <p className="text-lg sm:text-xl font-bold text-purple-500 flex items-center gap-1">Call Anytime
                <lord-icon
                  src="https://cdn.lordicon.com/qfwytnhb.json"
                  trigger="loop"
                  delay="2000"
                  colors="primary:#2516c7,secondary:#cb5eee"
                  style={{width:"20px", height:'20px'}}>
                </lord-icon>
              </p>
              <p className="text-base sm:text-lg">+91 9113407724</p>
              <p className="text-base sm:text-lg">+91 9939240750</p>
            </li>
            <li>
              <p className="text-lg sm:text-xl font-bold text-purple-500 flex  items-center gap-1">Send Email
                <lord-icon
                 src="https://cdn.lordicon.com/ukwexxlc.json"
                 trigger="loop"
                 delay="2000"
                 colors="primary:#2516c7,secondary:#cb5eee"
                  style={{ width: '25px', height: '25px' }}
                  className="flex justify-center items-center"
                >
                </lord-icon>
              </p>
              <p className="text-base sm:text-lg">connect@itfirms.com</p>
              <p className="text-base sm:text-lg">hello@itfirms.com</p>
            </li>
            <li>
              <p className="text-lg sm:text-xl font-bold text-purple-500 flex items-center gap-0">

                Visit Us
                <lord-icon
                   src="https://cdn.lordicon.com/cjhlqtae.json"
                   trigger="loop"
                   delay="2000"
                   colors="primary:#2516c7,secondary:#cb5eee"
                  style={{ width: '20px;', height: '20px' }}
                >
                </lord-icon>
              </p>
              <p className="text-base sm:text-lg">
                Jivanpur , Dumka, Jharkhand, India
              </p>
            </li>
          </ul>
          <div className="mt-8 sm:mt-10">
            <p className="text-lg sm:text-xl font-bold">Follow us</p>
            <div className="flex space-x-4 mt-2">
              {/* LinkedIn SVG */}
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-full h-full text-blue-600"
                >
                  <path d="M22.23 0H1.77C.792 0 0 .77 0 1.72v20.56C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.72V1.72C24 .77 23.208 0 22.23 0zM7.06 20.452H3.56V9.048h3.5v11.404zM5.31 7.44a2.027 2.027 0 110-4.055 2.027 2.027 0 010 4.055zm15.143 13.01h-3.504v-5.614c0-1.341-.027-3.07-1.872-3.07-1.872 0-2.16 1.462-2.16 2.973v5.711H9.426V9.048h3.36v1.557h.048c.468-.886 1.611-1.818 3.315-1.818 3.54 0 4.19 2.33 4.19 5.358v6.307z" />
                </svg> */}

                <lord-icon
                  src="https://cdn.lordicon.com/dsdlqjde.json"
                  trigger="in"
                  delay="1500"
                  state="in-reveal"
                  colors="primary:#4030e8,secondary:#1663c7"
                // style="width:250px;height:250px"
                >
                </lord-icon>
              </a>

              {/* Instagram SVG */}
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10">


                <lord-icon
                  src="https://cdn.lordicon.com/ewswvzmw.json"
                  trigger="hover"
                  state="hover-rotate"
                  colors="primary:#e8308c,secondary:#ee66aa"
                  // style="width:250px;height:250px"
                  className="w-full h-full text-pink-600"
                >
                </lord-icon>
              </a>

              {/* Facebook SVG */}
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-full h-full text-blue-800"
                >
                  <path d="M22.676 0H1.324C.594 0 0 .594 0 1.324v21.351C0 23.405.594 24 1.324 24H12.81v-9.294H9.692V10.5h3.118V8.078c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.503 0-1.795.715-1.795 1.763V10.5h3.587l-.467 4.206h-3.12V24h6.116C23.406 24 24 23.405 24 22.676V1.324C24 .594 23.406 0 22.676 0z" />
                </svg> */}
                <lord-icon
                  src="https://cdn.lordicon.com/bfoumeno.json"
                  trigger="morph"
                  state="morph-circle"
                  colors="primary:#4030e8,secondary:#4030e8"
                // style="width:250px;height:250px"
                >
                </lord-icon>
              </a>

              {/* Twitter SVG */}
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-full h-full text-blue-400"
                >
                  <path d="M23.954 4.569c-.885.394-1.83.658-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.949.564-2.003.974-3.127 1.195-.896-.959-2.173-1.559-3.591-1.559-2.72 0-4.924 2.204-4.924 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.735-.666 1.584-.666 2.49 0 1.72.87 3.23 2.188 4.117-.807-.026-1.566-.248-2.229-.616v.062c0 2.404 1.714 4.41 3.977 4.868-.418.11-.86.171-1.316.171-.321 0-.635-.03-.94-.086.637 1.98 2.482 3.419 4.672 3.459-1.71 1.342-3.868 2.143-6.213 2.143-.403 0-.8-.024-1.19-.07 2.213 1.418 4.839 2.245 7.66 2.245 9.18 0 14.2-7.611 14.2-14.206 0-.216-.004-.432-.014-.648.976-.703 1.825-1.583 2.496-2.584z" />
                </svg> */}
                <lord-icon
                  src="https://cdn.lordicon.com/yizwahhw.json"
                  trigger="hover"
                  colors="primary:#4030e8,secondary:#3080e8"
                // style="width:250px;height:250px"
                >
                </lord-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Contact