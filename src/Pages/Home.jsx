import React from "react";
import Bar from "../Components/Bar";
import Profile from "../Components/Profile";
import { Container, Row, Column } from "react-bootstrap";
import "../Scss/nav.scss";


const Home = () => {
  return (
    <>
      <Container>
        <Bar />
        <Profile />
      </Container>
    </>
  );
};

export default Home;
