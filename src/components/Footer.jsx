import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  background-color: #233545;
`;

const Footer = () => {
  return (
    <Container>Website Templates created with Mojgan360@gmail.com</Container>
  );
};

export default Footer;
