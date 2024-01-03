import React from "react";
import OptionName from "./OptionName";
import { sun } from "../assets/sun.svg";

const Sidebar = ({ subjects, quizzes, newId }) => {
  let count = 0;
  function darkClick() {
    count++;
    if (count % 2 != 0) {
      document.documentElement.classList.add("dark--mode");
      document.body.style.backgroundImage =
        "url('../images/top-dark-ellipse.svg'), url('../images/bottom-dark-ellipse.svg')";
    } else {
      document.documentElement.classList.remove("dark--mode");
      document.body.style.backgroundImage =
        "url('../images/top-light-ellipse.svg'), url('../images/bottom-light-ellipse.svg')";
    }
  }
  return (
    <div className="header">
      <OptionName subjects={subjects} newId={newId} />
      <div className="jusEnd">
        <div className="dark--light">
          <img src={sun} alt="sun" />
          <input onClick={darkClick} type="checkbox" id="dark--input" />
          <label htmlFor="dark--input"></label>
          <img src="../images/moon.svg" alt="moon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
