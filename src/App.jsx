import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import About from "./pages/about.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/coinRyze/" element={<HomePage />} />
        <Route path="/coinRyze/news" element={<NewsPage />} />
        {/* Always keep the wildcard route last */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
