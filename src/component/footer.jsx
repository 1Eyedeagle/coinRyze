import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center ">
            <span>
              <a href="/coinRyze/" className="text-decoration-none text-center">
                <div className="d-flex justify-content-center align-item-cemter">
                  <i className="bi bi-house"></i>
                </div>
                <p>Home</p>
              </a>
            </span>
            <span>
              <a href="#" className="text-decoration-none text-center">
                <div className="d-flex justify-content-center align-item-cemter">
                  <i className="bi bi-arrow-left-right"></i>
                </div>
                <p>Convert</p>
              </a>
            </span>
            <span>
              <a
                href="/coinRyze/news"
                className="  text-decoration-none text-center"
              >
                <div className="d-flex justify-content-center align-item-cemter">
                  <i className="bi bi-chat-right-text"></i>
                </div>
                <p>News</p>
              </a>
            </span>
            <span>
              <a href="#" className="text-decoration-none text-center">
                <div className="d-flex justify-content-center align-item-cemter"></div>
                <i className="bi bi-person"></i>
                <p>Assets</p>
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
