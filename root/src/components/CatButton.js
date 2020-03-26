import React from "react";
import { useDispatch } from "react-redux";

import { getFact } from "../actions/index";

import backgroundColors from "../background";

const CatButton = () => {
  const dispatch = useDispatch();

  const handleFetch = e => {
    e.preventDefault();
    dispatch(getFact());
    document.body.style.backgroundColor =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  };
  return (
    <div>
      <button className="fetch-btn" onClick={handleFetch}>
        Fetch Random Cat Fact
      </button>
    </div>
  );
};

export default CatButton;
