import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Service from './components/Service';
import Contact from './components/Contact';
import SparkEffect from './components/SparkEffect';
import StarrySky from './components/StarrySky';
import TestimonialSlider from './components/TestimonialSlider';
import Review from  './components/Review';
import Gallery from './components/Gallery';
// import Background from './components/Background';
// import MainAnimation from './components/MainAnimation';
import WhatsAppButton from './components/WhatsAppButton';
// 




function App() {
  return (
    <>

    
    <div>
      <SparkEffect/>
    </div>
    <div >
      <WhatsAppButton/>
    </div>

    {/* <div>
      <Background/>
    </div> */}

    <div>
      <Navbar />
    </div>
      


      <div>
        <Main />
      </div>


      <div>
        <Service />
      </div>



      
      <div>
        <StarrySky/>
      </div>
      

    
    <div>
      <Gallery/>
    </div>

     


      <div>
        <Contact/>
      </div>

      {/* <div>
        <MainAnimation/>
      </div> */}


      
      
    
      
      {/* <div className="container mx-auto mt-8">
        <h1 className="text-3xl text-gray-800 font-bold">Welcome to My Website!</h1>
        <p className="mt-4 text-gray-600">This is a basic Vite and Tailwind CSS setup with a responsive navbar.</p>
      </div> */}

      <div>
        <TestimonialSlider/>
      </div>

      <div>
        <Review/>
      </div>
       

      <div>
       <Footer /> 
      </div>


      {/* <div >
      <MainAnimation />
    </div> */}

     
      
    </>
  );
}

export default App;
