import React, { useEffect } from "react";
import "./SparkEffect.css"; // Assuming you have this CSS in a separate file

const SparkEffect = () => {
  useEffect(() => {
    const spark = (event) => {
      let i = document.createElement("i");

      // Set the position of the element based on the mouse event
      i.style.left = event.pageX + "px";
      i.style.top = event.pageY + "px";

      // Randomly scale the element
      i.style.transform = `scale(${Math.random() * 2 + 1})`;

      // Set random transition values
      i.style.setProperty("--x", getRandomTransitionValue());
      i.style.setProperty("--y", getRandomTransitionValue());

      document.body.appendChild(i);

      // Remove the element after 2 seconds
      setTimeout(() => {
        document.body.removeChild(i);
      }, 2000);
    };

    const getRandomTransitionValue = () => {
      // Generate a random value between -200 and 200 pixels
      return `${Math.random() * 400 - 200}px`;
    };

    // Add event listener to track mouse movements and create spark effect
    document.addEventListener("mousemove", spark);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousemove", spark);
    };
  }, []);

  return (
   <div></div>
  );
};

export default SparkEffect;
