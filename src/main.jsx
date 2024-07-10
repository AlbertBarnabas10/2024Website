import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Growup from "./pages/Growup/Growup";
import NotFound from "./pages/Notfound/NotFound";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/projects/growup" element={<Growup />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
