import React from "react";
import Bar from "../Components/Bar";
import Profile from "../Components/Profile";
import Cards from "../Components/Cards";
import { Container, Row, Column } from "react-bootstrap";
import "../Scss/nav.scss";


const Home = () => {
  return (
    <>
      <Container>
        <Bar />
        <Profile />
        <Cards/>
      </Container>
    </>
  );
};

export default Home;
