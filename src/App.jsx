import React from "react";
import Header from "./component/header.jsx";
import Banner from "./component/banner.jsx";
import Entry from "./component/entry.jsx";
import Task from "./component/task.jsx";
import Trade from "./component/top-trade.jsx";
import Data from "./component/market-data.jsx";
import Footer from "./component/footer.jsx";
import "./assets/App.css";

const App = () => {
  return (
    <div className="content">
      <Header />
      <div className="main">
        <Banner />
        <Entry />
        <Task />
        <Trade />
        <Data />
      </div>
      <Footer />
    </div>
  );
};

export default App;
