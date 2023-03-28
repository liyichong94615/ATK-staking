import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LogoArea from "./LogoArea";
import MenuArea from "./MenuArea";
import SocialLinkArea from "./SocialLinkArea";
import ToggleMenuIcon from "./ToggleMenuIcon";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
interface Props {
  connect: () => void;
  setIsHide: (e: any) => void;
  isHide: boolean;
  connected: boolean;
  address: string;
  chainId: number;
  killSession: () => void;
}

const Header: React.FC<Props> = ({ setIsHide, isHide, connect, connected }) => {
  const [currentWidth, setCurrentWidth] = useState(0);
  useEffect(() => {
    function updateSize() {
      setCurrentWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  useEffect(() => {
    setIsHide(true);
    // eslint-disable-next-line
  }, [currentWidth]);
  return (
    <Wrapper>
      <LogoArea />
      {/* <MenuArea displayMenu={isHide} /> */}
      <SocialLinkArea connect={connect} connected={connected} />
      <ToggleMenuIcon openMenu={() => setIsHide(!isHide)} />
    </Wrapper>
  );
};

export default Header;
