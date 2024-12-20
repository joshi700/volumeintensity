// import React, { useState } from "react";
// import TopicSelector from "./TopicSelector";
// import TopicScreen from "./TopicScreen";

// const App = () => {
//   const [selectedTopic, setSelectedTopic] = useState(null);

//   const topics = [
//     "Favorite sports brands",
//     "Favorite times of the year",
//     "Your favorite Makeup",
//     "Being Chiku",
//     "What animal you want to be?",
//     "Where do you want to travel in next one year?",
//     "Your best Christmas day gift?",
//     "If you could fly in a hot-air balloon over any city in the world, what city would you choose",
//     "Imagine that you are the family pet. Describe yourself and/or your family on a typical day",
//     "Visit to a temple",
//   ];

//   return (
//     <div>
//       {!selectedTopic ? (
//         <TopicSelector
//           topics={topics}
//           onSelect={(topic) => setSelectedTopic(topic)}
//         />
//       ) : (
//         <TopicScreen
//           topic={selectedTopic}
//           onBack={() => setSelectedTopic(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import TopicList from "./TopicList";
import TopicNamePage from "./TopicNamePage";
import TopicScreen from "./TopicScreen";

const App = () => {
  const [currentStep, setCurrentStep] = useState("list");
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    "US V/S China",
    "Favorite times of the year",
    "Your favorite Makeup",
    "Being Chiku",
    "What animal you want to be?",
    "Where do you want to travel in next one year?",
    "Your best Christmas day gift?",
    "If you could fly in a hot-air balloon over any city in the world, what city would you choose",
    "Imagine that you are the family pet. Describe yourself and/or your family on a typical day",
    "Visit to a temple",
  ];

  const handleSelectTopic = (index) => {
    setSelectedTopic({ index, name: topics[index] });
    setCurrentStep("name");
  };

  const handleStartSpeech = () => {
    setCurrentStep("screen");
  };

  const handleBackToTopics = () => {
    setCurrentStep("list");
    setSelectedTopic(null);
  };

  return (
    <div>
      {currentStep === "list" && (
        <TopicList topics={topics} onSelect={handleSelectTopic} />
      )}
      {currentStep === "name" && (
        <TopicNamePage
          topic={selectedTopic}
          onStartSpeech={handleStartSpeech}
          onTimeout={handleStartSpeech} // Transition after 30 seconds
        />
      )}
      {currentStep === "screen" && (
        <TopicScreen topic={selectedTopic} onBack={handleBackToTopics} />
      )}
    </div>
  );
};

export default App;
