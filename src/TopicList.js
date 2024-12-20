// import React from "react";

// const TopicList = ({ topics, onSelect }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//       }}
//     >
//       <h1>Select a Topic</h1>
//       {topics.map((_, index) => (
//         <button
//           key={index}
//           onClick={() => onSelect(index)}
//           style={{
//             margin: "10px",
//             padding: "15px 30px",
//             fontSize: "18px",
//             cursor: "pointer",
//             borderRadius: "8px",
//             border: "1px solid #ccc",
//           }}
//         >
//           Topic {index + 1}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default TopicList;

import React from "react";

const TopicList = ({ topics, onSelect }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <h1 style={{ fontFamily: "'Poppins', sans-serif", color: "#333" }}>
        Select a Topic
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          maxWidth: "800px",
          width: "100%",
          marginTop: "20px",
        }}
      >
        {topics.map((_, index) => (
          <div
            key={index}
            onClick={() => onSelect(index)}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              textAlign: "center",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontFamily: "'Roboto', sans-serif",
                color: "#555",
              }}
            >
              Topic {index + 1}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicList;
