// import React, { useEffect, useState } from "react";

// const TopicScreen = ({ topic, onBack }) => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [randomNumber, setRandomNumber] = useState(5);
//   const [timeLeft, setTimeLeft] = useState(120); // Total countdown timer
//   const [shuffledImages, setShuffledImages] = useState([]);

//   const images = [
//     "https://images.pexels.com/photos/1146242/pexels-photo-1146242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     "https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg",
//     "https://images.pexels.com/photos/56865/adler-bird-bird-of-prey-raptor-56865.jpeg",
//     "https://images.pexels.com/photos/56865/adler-bird-bird-of-prey-raptor-56865.jpeg",
//     "https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg",
//     "https://images.pexels.com/photos/1223649/pexels-photo-1223649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     "https://images.unsplash.com/photo-1733860398289-6340e60d54bb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.pexels.com/photos/29773887/pexels-photo-29773887/free-photo-of-charming-getreidegasse-in-salzburg-austria.jpeg",
//     "https://images.pexels.com/photos/29749744/pexels-photo-29749744/free-photo-of-silhouette-of-woman-with-flower-in-sunlit-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     "https://images.unsplash.com/photo-1732692583215-a946ff9d69b1?q=80&w=2499&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   ];

//   // Shuffle images when the component mounts
//   useEffect(() => {
//     const shuffled = [...images].sort(() => Math.random() - 0.5);
//     setShuffledImages(shuffled);
//   }, []);

//   // Handle step changes every 20 seconds
//   useEffect(() => {
//     if (currentStep < 6) {
//       const stepTimer = setTimeout(() => {
//         setRandomNumber(Math.floor(Math.random() * 10) + 1); // Random number 1-10
//         setCurrentStep((prev) => prev + 1);
//       }, 20000);

//       return () => clearTimeout(stepTimer);
//     }
//   }, [currentStep]);

//   // Handle countdown timer
//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [timeLeft]);

//   return (
//     <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
//       {/* Random Number Display */}
//       <div
//         style={{
//           position: "absolute",
//           top: "10px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           backgroundColor: "rgba(0, 0, 0, 0.6)",
//           color: "white",
//           padding: "10px 20px",
//           borderRadius: "8px",
//           fontSize: "24px",
//           zIndex: 1000,
//         }}
//       >
//         {currentStep < 6 ? `Pitch and Intensity: ${randomNumber}` : "Wrap Up"}
//       </div>

//       {/* Timer Display */}
//       <div
//         style={{
//           position: "absolute",
//           top: "60px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           backgroundColor: "rgba(0, 0, 0, 0.6)",
//           color: "white",
//           padding: "5px 15px",
//           borderRadius: "8px",
//           fontSize: "20px",
//           zIndex: 1000,
//         }}
//       >
//         Time Remaining: {timeLeft} seconds
//       </div>

//       {/* Fullscreen Image */}
//       {currentStep < 6 ? (
//         <img
//           src={shuffledImages[currentStep]}
//           alt={`Image ${currentStep + 1}`}
//           style={{
//             height: "100%",
//             width: "100%",
//             objectFit: "cover",
//           }}
//         />
//       ) : (
//         <div
//           style={{
//             height: "100%",
//             width: "100%",
//             backgroundColor: "black",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             color: "white",
//             fontSize: "36px",
//           }}
//         >
//           Wrap Up
//         </div>
//       )}

//       {/* Back Button */}
//       <button
//         onClick={onBack}
//         style={{
//           position: "absolute",
//           bottom: "20px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           padding: "10px 20px",
//           backgroundColor: "blue",
//           color: "white",
//           border: "none",
//           borderRadius: "8px",
//           cursor: "pointer",
//           fontSize: "16px",
//         }}
//       >
//         Back to Topics
//       </button>
//     </div>
//   );
// };

// export default TopicScreen;

import React, { useEffect, useState } from "react";

const TopicScreen = ({ topic, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [randomNumber, setRandomNumber] = useState(5);
  const [timeLeft, setTimeLeft] = useState(120); // Total countdown timer
  const [shuffledColors, setShuffledColors] = useState([]);

  const colors = [
    "#FF5733", // Red
    "#33FF57", // Green
    "#3357FF", // Blue
    "#FFFF33", // Yellow
    "#FF33FF", // Pink
    "#33FFFF", // Cyan
    "#FFA500", // Orange
    "#800080", // Purple
    "#808080", // Gray
    "#000000", // Black
  ];

  // Replace <img> with background color logic using colors array

  // Shuffle colors when the component mounts
  useEffect(() => {
    const shuffled = [...colors].sort(() => Math.random() - 0.5);
    setShuffledColors(shuffled);
  }, []);

  // Handle step changes every 20 seconds
  useEffect(() => {
    if (currentStep < 6) {
      const stepTimer = setTimeout(() => {
        setRandomNumber(Math.floor(Math.random() * 10) + 1); // Random number 1-10
        setCurrentStep((prev) => prev + 1);
      }, 20000);

      return () => clearTimeout(stepTimer);
    }
  }, [currentStep]);

  // Handle countdown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        backgroundColor:
          currentStep < 6 ? shuffledColors[currentStep] : "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: currentStep < 6 ? "white" : "lightgray",
      }}
    >
      {/* Random Number Display */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          fontSize: "24px",
          zIndex: 1000,
        }}
      >
        {currentStep < 6 ? `Pitch and Intensity: ${randomNumber}` : "Wrap Up"}
      </div>

      {/* Timer Display */}
      <div
        style={{
          position: "absolute",
          top: "60px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          padding: "5px 15px",
          borderRadius: "8px",
          fontSize: "20px",
          zIndex: 1000,
        }}
      >
        Time Remaining: {timeLeft} seconds
      </div>

      {/* Wrap-Up Message */}
      {currentStep >= 6 && (
        <div style={{ fontSize: "36px", textAlign: "center" }}>Wrap Up</div>
      )}

      {/* Back Button */}
      <button
        onClick={onBack}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Back to Topics
      </button>
    </div>
  );
};

export default TopicScreen;
