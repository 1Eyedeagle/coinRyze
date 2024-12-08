import React from "react";
import calculator from "../assets/images/calculator.png";
import invite from "../assets/images/invite.png";
import copy from "../assets/images/copy.png";
import simulation from "../assets/images/simulation.png";

const Entry = () => {
  return (
    <div className="container-fluid entry">
      <div className="row d-flex justify-content-between">
        <div className="entry-card  text-center ">
          <div className="d-flex justify-content-center align-item-center">
            <div className="entry-image  ">
              <img src={calculator} alt="calculator" />
            </div>
          </div>
          <h5>Calculator</h5>
        </div>
        <div className="entry-card   text-center ">
          <div className="d-flex justify-content-center align-item-center">
            <div className="entry-image">
              <img src={invite} alt="calculator" />
            </div>
          </div>
          <h5>invite</h5>
        </div>
        <div className="entry-card text-center ">
          <div className="d-flex justify-content-center align-item-center">
            <div className="entry-image ">
              <img src={copy} alt="calculator" />
            </div>
          </div>
          <h5>Trading</h5>
        </div>
        <div className="entry-card  text-center ">
          <div className="d-flex justify-content-center align-item-center">
            <div className="entry-image  ">
              <img src={simulation} alt="calculator" />
            </div>
          </div>
          <h5>simulation</h5>
        </div>
      </div>
    </div>
  );
};

export default Entry;
