import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { colors } from "../../styles";
import { useHistory } from "react-router-dom";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const LogoTitle = styled.h3`
  font-weight: 700;
  color: rgb(${colors.fontColor});
  font-size: 22px;
  margin: 0 1em;
`;

const imgStyle = {
  width: 116,
  height: 32,
};

function LogoArea() {
  let history = useHistory();
  return (
    <LogoContainer
      onClick={() => {
        // setMenuStatus(3);
        history.push(`/`);
      }}
    >
      <img src={logo} style={imgStyle} alt="logo" />
    </LogoContainer>
  );
}

export default LogoArea;
