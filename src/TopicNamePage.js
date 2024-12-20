import React, { useEffect, useState } from "react";

const TopicNamePage = ({ topic, onStartSpeech, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onTimeout();
    }
  }, [timeLeft, onTimeout]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>{topic.name}</h1>
      <h3>Prepare yourself. Time Remaining: {timeLeft} seconds</h3>
      <button
        onClick={onStartSpeech}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "8px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
        }}
      >
        I’m Ready to Start
      </button>
    </div>
  );
};

export default TopicNamePage;
