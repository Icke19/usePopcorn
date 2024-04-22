import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from './App.jsx'
import StarRating from "./components/StarRating.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*<App />*/}
    <StarRating maxRating={5} />
    <StarRating size={24} color="red" />
  </React.StrictMode>,
);
