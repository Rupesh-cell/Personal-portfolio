import React from "react";
import Bar from "../Components/Bar";
import Profile from "../Components/Profile";
import Cards from "../Components/Cards";
import "../Scss/nav.scss";

const Home = () => {
  return (
    <>
      <Bar />
      <Profile />
      <Cards />
    </>
  );
};

export default Home;
