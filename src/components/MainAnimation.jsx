// // src/components/MainAnimation.jsx
// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import "./MainAnimation.css"; // import for additional custom styling if needed

// // Register MotionPathPlugin
// gsap.registerPlugin(MotionPathPlugin);

// const MainAnimation = () => {
//   useEffect(() => {
//     gsap.set(".m1_stage", { x: "50%", opacity: 1 });

//     const tl = gsap.timeline({ defaults: { duration: 45 } });

//     tl.from(".main1", { duration: 1, autoAlpha: 0, ease: "power1.inOut" }, 0)
//       .fromTo(".m1_cGroup", { opacity: 0 }, { duration: 0.3, opacity: 1, stagger: -0.1 }, 0)
//       .from(".m1_cGroup", { duration: 2.5, scale: -0.3, transformOrigin: "50% 50%", stagger: -0.05, ease: "elastic" }, 0)
//       .fromTo(".m1Bg", { opacity: 0 }, { duration: 1, opacity: 1, ease: "power2.inOut" }, 0.2)
//       .add("orbs", 1.2);

//     const handleMouseMove = (e) => {
//       gsap.to(".m1_cGroup", {
//         duration: 1,
//         x: (i) => (e.clientX / window.innerWidth) / (i + 1) * 150,
//         y: (i) => i * -20 * (e.clientY / window.innerHeight),
//         rotation: Math.random() * 0.1,
//         overwrite: "auto",
//       });
//       gsap.to(".c1_solid, .c1_line", {
//         duration: 1,
//         attr: { opacity: 1.1 - 0.75 * (e.clientY / window.innerHeight) },
//       });
//       gsap.to(".m1OrbBlank", { duration: 1, opacity: 0.2 + 0.55 * (e.clientY / window.innerHeight) });
//     };

//     const handleClick = () => {
//       if (gsap.getProperty(".m1_cGroup", "scale") !== 1) return;
//       gsap.fromTo(".m1_cGroup", { transformOrigin: "50% 50%", scale: 1 }, { duration: 0.7, scale: 0.9, ease: "back.in(10)", yoyo: true, repeat: 1 });
//     };

//     document.querySelector(".main1").addEventListener("mousemove", handleMouseMove);
//     document.querySelector(".main1").addEventListener("click", handleClick);

//     return () => {
//       document.querySelector(".main1").removeEventListener("mousemove", handleMouseMove);
//       document.querySelector(".main1").removeEventListener("click", handleClick);
//     };
//   }, []);

//   return (
//     <div className="main1 relative w-full h-screen bg-black overflow-hidden">
//       <div className="m1_stage absolute w-full h-full flex justify-center items-center opacity-0">
//         {/* Add orb and background elements with Tailwind styling */}
//         <div className="m1Bg absolute inset-0"></div>
//         <div className="m1_cGroup flex flex-col items-center space-y-4">
//           {/* Orb elements */}
//           <div className="orb1 bg-blue-500 rounded-full w-10 h-10"></div>
//           <div className="orb2 bg-red-500 rounded-full w-12 h-12"></div>
//           <div className="orb3 bg-green-500 rounded-full w-8 h-8"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainAnimation;
// src/components/AnimatedCard.jsx

import React from 'react';

function Process() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary ">
      <ul className="w-full px-4 md:inline-block lg:flex lg:justify-between text-center">
        <li className="process-item relative px-8 py-4 transition-all duration-300 ease-in-out hover:bg-gray-100">
          <span className="block text-black text-9xl text-purple-500 stroke-primary transition-all duration-300 ease-in-out transform hover:translate-y-1 font-roboto font-bold">1</span>
          <span className="block mt-8 text-purple-700 font-roboto font-bold text-xl uppercase tracking-wide">Analysis &amp; Strategy</span>
          <span className="block mt-4 text-lg text-secondary-dark font-josefin leading-relaxed">We thoroughly analyze your problem and develop a tailored strategy.</span>
        </li>

        <li className="process-item relative px-8 py-4 transition-all duration-300 ease-in-out hover:bg-gray-100">
          <span className="block text-9xl text-purple-500 t stroke-primary transition-all duration-300 ease-in-out transform hover:translate-y-1 font-roboto font-bold">2</span>
          <span className="block mt-8 text-purple-700 font-roboto font-bold text-xl uppercase tracking-wide">Make an Offer</span>
          <span className="block mt-4 text-lg text-secondary-dark font-josefin leading-relaxed">We present a detailed proposal and offer based on our strategy.</span>
        </li>

        <li className="process-item relative px-8 py-4 transition-all duration-300 ease-in-out hover:bg-gray-100">
          <span className="block text-9xl text-purple-500 stroke-primary transition-all duration-300 ease-in-out transform hover:translate-y-1 font-roboto font-bold">3</span>
          <span className="block mt-8 text-purple-700 font-roboto font-bold text-xl uppercase tracking-wide">Development</span>
          <span className="block mt-4 text-lg text-secondary-dark font-josefin leading-relaxed">We proceed with development, focusing on delivering quality results.</span>
        </li>

        <li className="process-item relative px-8 py-4 transition-all duration-300 ease-in-out hover:bg-gray-100">
          <span className="block text-9xl text-purple-500 stroke-primary transition-all duration-300 ease-in-out transform hover:translate-y-1 font-roboto font-bold">4</span>
          <span className="block mt-8 text-purple-700 font-roboto font-bold text-xl uppercase tracking-wide">Finalize</span>
          <span className="block mt-4 text-lg text-secondary-dark font-josefin leading-relaxed">We complete the process, ensuring everything meets expectations.</span>
        </li>
      </ul>
    </div>
  );
}

export default Process;


