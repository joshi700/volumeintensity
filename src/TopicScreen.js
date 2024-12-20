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
          top: "50%", // Center vertically
          left: "50%", // Center horizontally
          transform: "translate(-50%, -50%)", // Adjust to perfectly center the text
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
          top: "calc(50% + 40px)", // Moves the timer below the "Pitch and Intensity"
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

export default To
