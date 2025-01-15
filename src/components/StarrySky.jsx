import React, { useState, useEffect } from 'react';

// SVG components for icons
const RocketIcon = () => (
 
  <lord-icon
    src="https://cdn.lordicon.com/ewoezmtb.json"
    trigger="loop"
    delay="1000"
    state="morph-check"
    colors="primary:#4030e8,secondary:#2516c7"
    style={{width:'40px', height:'40px'}}
    >
</lord-icon>
);

const LightbulbIcon = () => (
  <lord-icon
    src="https://cdn.lordicon.com/owasdgms.json"
    trigger="loop"
    delay="2000"
    colors="primary:#4030e8,secondary:#2516c7"
    style={{width:'40px', height:'40px'}}
    >
</lord-icon>

);

const ChartIcon = () => (
  <lord-icon
    src="https://cdn.lordicon.com/rokunbup.json"
    trigger="loop"
    delay="1500"
    state="in-reveal"
    colors="primary:#4030e8,secondary:#66a1ee"
    style={{width:'40px', height:'40px'}}>
</lord-icon>
);

const LockIcon = () => (
<lord-icon
    src="https://cdn.lordicon.com/egvxxkdh.json"
    trigger="loop"
    delay="1500"
    state="in-reveal"
    colors="primary:#4030e8,secondary:#66a1ee"
    style={{width:'40px', height:'40px'}}>
</lord-icon>
);

const CheckIcon = () => (
  
<lord-icon
    src="https://cdn.lordicon.com/wwxsaelx.json"
    trigger="loop"
    delay="2000"
    colors="primary:#4030e8,secondary:#66a1ee"
    style={{width:'40px', height:'40px'}}>
</lord-icon>
);

const WrenchIcon = () => (
  <lord-icon
    src="https://cdn.lordicon.com/ipbtscff.json"
    trigger="in"
    delay="1500"
    state="in-reveal"
    colors="primary:#4030e8,secondary:#66a1ee"
    style={{width:'40px', height:'40px'}}>
</lord-icon>
);

const StarrySky = () => {
  const data = [
    {
      title: 'Research and Planning',
      description:
        'Define the site structure (sitemap) and create wireframes for each major page.',
      icon: <RocketIcon />,
    },
    {
      title: 'Design',
      description:
        'Create design mockups for the homepage and other key pages, incorporating client branding and UX principle',
      icon: <LightbulbIcon />,
    },
    {
      title: 'Development',
      description:
        'Convert designs into a functional website.',
      icon: <ChartIcon />,
    },
    {
      title: 'Testing and Quality',
      description:
        'Conduct cross-browser testing, mobile responsiveness checks, and usability testing.',
      icon: <LockIcon />,
    },
    {
      title: 'Launch and Delivery',
      description:
        'Deploy the website to the live environment and ensure a smooth launch.',
      icon: <CheckIcon />,
    },
    {
      title: 'Post-Launch Support and Maintenance',
      description:
        'Provide maintenance services for updates, backups, and security checks as per the maintenance agreement.',
      icon: <WrenchIcon />,
    },
  ];

  // State to track if the screen is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Effect to update the layout when screen resizes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={styles.container}>
      <h1 className='text-purple-700 font-bold' style={styles.header}>/..How We Work../</h1>
      <div style={{ ...styles.cardGrid, gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)' }}>
        {data.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{item.icon}</div>
            <div style={styles.textContainer}>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    cursor: 'pointer',
    textAlign: 'center',
    padding: '2rem',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '2rem',
    // color: 'purple',
    // text: 'bold'
  },
  cardGrid: {
    display: 'grid',
    gap: '2rem',
  },
  card: {

    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    transition: 'transform 0.3s',
  },
  icon: {
    fontSize: '2rem',
    marginRight: '1rem',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#333',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#666',
  },
};

export default StarrySky;



// import { useState } from 'react';

// function App() {
//   const [fontSize, setFontSize] = useState(1); // Font size state for dynamic scaling

//   const handleRangeChange = (e) => {
//     setFontSize(e.target.value); // Update font size based on slider input
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
//       {/* Main content area with dynamic font size */}
//       <main style={{ fontSize: `${fontSize}rem` }} className="p-8">
//         <ul className="flex flex-wrap justify-center gap-8">
//           {infoData.map((item, index) => (
//             <li
//               key={index}
//               className="relative w-full max-w-lg bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
//             >
//               {/* Number circle with background effect */}
//               <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//                 <div className={`absolute -rotate-[130deg] -top-8 -left-12 w-72 h-56 bg-white rounded-full border-b-4`} />
//               </div>
//               <div className="relative z-10 text-center">
//                 {/* Large Number */}
//                 <div className={`text-[6rem] font-extrabold text-${item.color} absolute top-[-4rem] left-2`}>
//                   {item.number}
//                 </div>
//                 <div className="flex flex-col items-center mt-24">
//                   {/* Icon */}
//                   <div className={`icon-${item.icon} text-4xl text-gray-600`} />
//                   {/* Title */}
//                   <h2 className="text-2xl font-medium uppercase mt-2">{item.title}</h2>
//                   {/* Description */}
//                   <p className="text-gray-600 mt-1">{item.description}</p>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </main>

//       {/* Font size slider control */}
//       <div className="fixed bottom-0 bg-gray-300 w-full p-4 flex justify-center rounded-t-lg shadow-md">
//         <div className="flex flex-col items-center">
//           <input
//             id="range"
//             type="range"
//             min="0.6"
//             max="1.5"
//             step="0.1"
//             value={fontSize}
//             onChange={handleRangeChange}
//             className="w-full h-2 bg-black appearance-none cursor-pointer"
//           />
//           <div className="mt-2 text-xl font-medium">
//             Scale in rems: <span>{fontSize}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Data for each item (number, title, description, icon, color)
// const infoData = [
//   {
//     number: 1,
//     title: 'Develop',
//     description: 'Sagittis, audantium sem eveniet lacus pede porttitor aenean.',
//     icon: 'codepen',
//     color: 'blue-500',
//   },
//   {
//     number: 2,
//     title: 'Engage',
//     description: 'Sagittis, audantium sem eveniet lacus pede porttitor aenean.',
//     icon: 'social',
//     color: 'green-500',
//   },
//   {
//     number: 3,
//     title: 'Deliver',
//     description: 'Sagittis, audantium sem eveniet lacus pede porttitor aenean.',
//     icon: 'airplane',
//     color: 'purple-500',
//   },
//   {
//     number: 4,
//     title: 'Plan',
//     description: 'Sagittis, audantium sem eveniet lacus pede porttitor aenean.',
//     icon: 'map',
//     color: 'yellow-500',
//   },
//   {
//     number: 5,
//     title: 'Educate',
//     description: 'Sagittis, audantium sem eveniet lacus pede porttitor aenean.',
//     icon: 'bulb',
//     color: 'red-500',
//   },
// ];

// export default App;
