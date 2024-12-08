import React from "react";
import myTeam from "../assets/images/myTeam.png";
import task from "../assets/images/task.png";

const Task = () => {
  return (
    <div className="container-fluid" id="task">
      <div className="row d-flex  ">
        <div className="col-6 pe-1 ">
          <div className="my-team">
            <h4>My team</h4>
            <div className="team-size  align-items-end  d-flex">
              <div className="col-7 ">
                <h5>0 Person</h5>
                <h5>Team Size</h5>
              </div>

              <div className="col-5">
                <img src={myTeam} alt="my team" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 ps-2">
          <div className="my-team">
            <h4>Beginner Task</h4>
            <div className="task-center align-items-end d-flex">
              <div className="col-7 ">
                <h5>Conversion Center</h5>
                <h5>Task Center</h5>
              </div>

              <div className="col-5 ps-2">
                <img src={task} alt="my team" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
