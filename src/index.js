// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const rootElement = document.getElementById("root");
// if (rootElement) {
//   // Proceed with using rootElement
// } else {
//   console.error("Element with id 'root' not found.");
// }

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot instead of ReactDOM.render
root.render(<App />);