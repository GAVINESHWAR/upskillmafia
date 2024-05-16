import React from "react";

export default function Cirriculum() {
  const styles = {
    color: "black",
    fontSize: "15px",
    fontWeight: "500",
  };
  return (
    <>
      <div className="main">
        <p id="h1">DATA SCIENCE COURSES LEARNING PATH</p>
        <h1 id="h2">
          Data Science <span>Course Curriculum</span>
        </h1>
        <div className="curr">
          <div className="curr1">
            <h1>
              C++{" "}
              <span style={styles}>
                <br />
                Learn c++ for strong programming fundamentals
              </span>
            </h1>
            <p>View Curriculum</p>
          </div>
          <hr />
          <div className="curr2">
            <h1>
              MERN Stack <br />
              <span style={styles}>
                Master the MERN stack for high-demand projects
              </span>
            </h1>
            <p>View Curriculum</p>
          </div>
          <hr />
          <div className="curr3">
            <h1>
              Data Structures & Algorithm
              <br />
              <span style={styles}>
                Excel in Data Structures and Algorithms for interview success
              </span>
            </h1>
            <p>View Curriculum</p>
          </div>
          <hr />
          <div className="curr4">
            <h1>
              Competitive Programming
              <span style={styles}>
                <br />
                Excel in Data Structures and Algorithms for interview success
              </span>
            </h1>
            <p>View Curriculum</p>
          </div>
        </div>
      </div>
    </>
  );
}
