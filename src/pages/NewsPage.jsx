import React from "react";
import "../assets/css/news.css";
import Banner from "../component/banner.jsx";
import TabSection from "../component/tabs.jsx";
import Footer from "../component/footer.jsx";

const NewsPage = () => {
  return (
    <div className="content newspage">
      <header>
        <h1>News</h1>
      </header>
      <div id="news" className="main">
        <Banner showNewsButton={false} showToggleImage={false} />
        <TabSection />
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;
