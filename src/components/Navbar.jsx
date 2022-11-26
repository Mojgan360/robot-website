import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
// import search from "../assets/images/search_icon.svg";
import BarsIcone from "./BarsIcone";

const Container = styled.div`
  width: 100vw;
  max-width: 1100px;
  margin: 0 auto;
  /* background-color: #233545; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`;
const Input = styled.input`
  width: 30%;
  height: 30px;
  transition: all 0.2s;
  /* background-image: url(${(props) => props.bg});
  background-position: 10px center;
  background-repeat: no-repeat; */
  border: 1px solid #ccc;

  &::placeholder {
    color: #ccc;
    opacity: 0.7;
  }
`;
const Navbar = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>

      <Input type="input" placeholder="Search" />
      <BarsIcone />
    </Container>
  );
};

export default Navbar;
