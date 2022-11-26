import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  padding: 0.5rem;
  background-color: #233545;
  span {
    color: #b9dfdf;
    margin-left: 5px;
  }
`;

const Footer = () => {
  return (
    <Container>
      Website Templates created with <span> Mojgan</span>360@gmail.com
    </Container>
  );
};

export default Footer;
