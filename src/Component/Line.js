import React from "react";
import line from "./line.css";
const Line = () => {
  return (
    <div className="index_wrap">
        <ul className="leftToRight">
          <p>왼쪽에서 오른쪽으로</p>{" "}
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">DESIGN CASE</a>
          </li>
          <li>
            <a href="#">STORY</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <ul className="fromInsideOut">
        
          <p>가운데서 바깥쪽으로</p>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">DESIGN CASE</a>
          </li>
          <li>
            <a href="#">STORY</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <ul className="stretch">
          <p>늘어났다 줄어들었다</p>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">DESIGN CASE</a>
          </li>
          <li>
            <a href="#">STORY</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
    </div>
  );
};

export default Line;
