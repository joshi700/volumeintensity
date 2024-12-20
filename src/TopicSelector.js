import React from "react";

const TopicSelector = ({ topics, onSelect }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Select a Topic</h1>
      <ul>
        {topics.map((topic, index) => (
          <li
            key={index}
            style={{ cursor: "pointer", margin: "10px 0", color: "blue" }}
            onClick={() => onSelect(topic)}
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicSelector;
