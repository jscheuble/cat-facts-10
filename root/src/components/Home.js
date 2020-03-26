import React from "react";

import cat from "../img/cat.jpg";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Cat Facts</h1>
      <img src={cat} alt="grey cat licking paw" className="home-img" />
      <h3>Created by Jana</h3>
    </div>
  );
};

export default Home;
