import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../styles";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "react-switch";
import Dialog from "@material-ui/core/Dialog";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
  Data,
} from "@react-google-maps/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { injectStyle } from "react-toastify/dist/inject-style";

import homeIcon from "../../assets/images/homeIcon.png";
import category1 from "../../assets/images/category1.png";
import category2 from "../../assets/images/category2.png";
import category3 from "../../assets/images/category3.png";
import category4 from "../../assets/images/category4.png";
import category5 from "../../assets/images/category5.png";
import category6 from "../../assets/images/category6.png";
import category7 from "../../assets/images/category7.png";
import category8 from "../../assets/images/category8.png";
import category9 from "../../assets/images/category9.png";
import settingIcon from "../../assets/images/settingIcon.png";
import profileImage from "../../assets/images/profileImage.png";
import discordImage from "../../assets/images/discordImage.png";
import twitterImage from "../../assets/images/twitterImage.png";
import logoutImage from "../../assets/images/logoutImage.png";
import catengoryFilterImage from "../../assets/images/catengoryFilterImage.png";
import emptyProfile from "../../assets/images/emptyProfile.png";
import copyImage from "../../assets/images/copyImage.png";
import blackTwitter from "../../assets/images/blackTwitter.png";
import blackDiscord from "../../assets/images/blackDiscord.png";
import grayTwitter from "../../assets/images/grayTwitter.png";
import grayDiscord from "../../assets/images/grayDiscord.png";

const MainContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    margin-top: 0px;
  }
`;
const LocationArea = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    margin-top: 0px;
  }
`;
const BannerContainer = styled.div`
  width: 100%;
  background-image: url(/images/TopBackground.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  padding: 1em 2em;
  backdrop-filter: blur(4px);
  @media screen and (max-width: 600px) {
    padding: 1em 1.5em;
    background-color: #252728;
    background-image: none;
  }
`;
// Material ui style
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  textCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxHeight: "304px",
    margin: "1em 0",
  },
  imgCont: {
    display: "flex",
    flexDirection: "column",
  },
}));

// styled-components
const Title1 = styled.p`
  font-size: 74px;
  color: white;
  font-family: "Oswald-Light";
  margin: 0;
  line-height: 1.1;
  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
`;
const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  @media screen and (max-width: 670px) {
    width: 80px;
    height: 80px;
  }
`;
const OnlineImage = styled.div`
  width: 28px;
  height: 28px;
  background-color: rgb(0, 250, 25);
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  left: 85px;
  border: 2px solid rgb(37, 39, 40);
  @media screen and (max-width: 670px) {
    width: 14px;
    height: 14px;
    left: 33px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const WalletAddress = styled.p`
  color: white;
  font-family: Oswald-Light;
  font-size: 50px;
  text-transform: uppercase;
  margin-left: 25px;
  @media screen and (max-width: 670px) {
    font-size: 23px;
    margin-left: 15px;
  }
`;
const CopyImage = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 20px;
  @media screen and (max-width: 670px) {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const Title2 = styled.p`
  font-size: 124px;
  color: white;
  font-family: "Oswald-Bold";
  margin: 0;
  line-height: 1.1;
  @media screen and (max-width: 600px) {
    font-size: 65px;
  }
`;
const CountValue = styled.p`
  font-size: 76px;
  color: #ed2185;
  font-family: "Oswald-Bold";
  margin: 0;
  margin-bottom: 10px;
  line-height: 1.1;
  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
`;
const UnitText = styled.p`
  font-size: 38px;
  color: white;
  font-family: "Oswald-Regular";
  margin: 0;
  line-height: 1.1;
  letter-spacing: 4px;
  text-transform: uppercase;
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;
const CategoryText = styled.p`
  font-size: 16px;
  color: white;
  font-family: "Oswald-Regular";
  margin: 0;
  margin-left: 10px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
const SocialText = styled.p`
  font-family: "Oswald-Regular";
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  margin: 0;
  margin-left: 10px;
  color: #191717;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
const SocialInfo = styled.p`
  font-family: "Oswald-Light";
  font-size: 16px;
  line-height: 24px;
  color: #191717;
  opacity: 0.6;
  margin: 0;
  margin-left: 10px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
const LocationText = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.3);
  font-family: "Oswald-Regular";
  margin: 0;
  line-height: 1.1;
`;
const Description = styled.p`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
  font-family: "Oswald-Light";
  line-height: 1.5;
  max-width: 550px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    max-width: 100%;
    width: 100%;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;
const HomeImage = styled.img`
  width: 16px;
  height: 16px;
`;
const List = styled.img`
  width: 24px;
  height: 24px;
`;
const DiscordImage = styled.img`
  width: 32px;
  height: 32px;
`;
const CountArea = styled.div`
  display: flex;
  flex-direction: column;
`;
const RightTopArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-left: 25%;
  margin-top: 8%;
  @media screen and (max-width: 600px) {
    padding-left: 0%;
    margin-top: 0px;
  }
`;
const RightBottomArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 90px;
  background-color: #191717;
  width: 116px;
  height: 48px;
  border-radius: 5px;
  margin-left: 30px;
  @media screen and (max-width: 600px) {
    margin-top: 30px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const LeftBottomArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  margin-top: 30px;
  background-color: #191717;
  padding: 0 1.3em;
  height: 48px;
  border-radius: 24px;
  margin-right: 20px;
  @media screen and (max-width: 600px) {
    margin-top: 30px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const SettingArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2em;
  @media screen and (max-width: 600px) {
    padding: 1em;
  }
`;
const ProfileImageArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const ModalButtonArea = styled.div`
  width: 210px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-top: 30px;
`;
const ModalSaveButton = styled.div`
  width: 95px;
  height: 48px;
  background: #ed2185;
  border-radius: 4px;
  font-family: "Oswald-Regular";
  font-weight: 400;
  font-size: 20px;
  line-height: 121%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const ModalCloseButton = styled.div`
  width: 95px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(25, 23, 23, 0.2);
  border-radius: 4px;
  font-family: "Oswald-Regular";
  font-weight: 400;
  font-size: 20px;
  line-height: 121%;
  text-align: center;
  color: #191717;
  &:hover {
    cursor: pointer;
  }
`;
const SideTitle = styled.p`
  font-family: "Oswald-Light";
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #191717;
  opacity: 0.5;
`;
const PurchageTxt = styled.p`
  font-family: "Oswald-Regular";
  font-weight: 400;
  font-size: 16px;
  line-height: 121%;
  text-align: right;
  text-decoration-line: underline;
  color: #ed2185;
  &:hover {
    cursor: pointer;
  }
`;
const CategoryArea = styled.div`
  position: relative;
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  margin: 15px 15px;
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    width: 45%;
    margin: 0;
    margin-bottom: 10px;
    /* margin: -10px 2.5%; */
  }
`;
const CategoryListImage = styled.img`
  width: 230px;
  height: 213px;
  align-self: center;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;
const DescriptionArea = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  padding-left: 15px;
  @media screen and (max-width: 600px) {
    /* margin-bottom: 20px; */
  }
`;
const CommingArea = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 87px;
  height: 37px;
  display: flex;
  flex-direction: column;
  background-color: rgba(25, 23, 23, 0.8);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    width: 75px;
    height: 25px;
  }
`;
const Title = styled.p`
  font-size: 24px;
  text-align: start;
  font-family: "Oswald-Regular";
  color: white;
  @media screen and (max-width: 560px) {
    font-size: 12px;
    display: flex;
  }
`;
const ComingDes = styled.p`
  font-size: 14px;
  text-align: start;
  font-family: "Oswald-Regular";
  color: white;
  @media screen and (max-width: 560px) {
    font-size: 10px;
    display: flex;
  }
`;
const ModalTitle = styled.p`
  font-size: 30px;
  text-align: start;
  font-family: "Oswald-Medium";
  text-transform: uppercase;
  color: black;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 10px;
  margin-top: 0;
  @media screen and (max-width: 560px) {
    font-size: 20px;
    display: flex;
    margin-left: 10px;
    margin-bottom: 0px;
  }
`;

const categoryItemList = [
  {
    id: 1,
    image: category1,
    title: "Scrap Guilds",
    seeFlag: false,
    commingSoon: false,
  },
  {
    id: 2,
    image: category2,
    title: "Art And Love",
    seeFlag: false,
    commingSoon: false,
  },
  {
    id: 3,
    image: category3,
    title: "SLand Plots",
    seeFlag: false,
    commingSoon: false,
  },
  {
    id: 4,
    image: category4,
    title: "Attack Wagon Arcade",
    seeFlag: false,
    commingSoon: false,
  },
  {
    id: 5,
    image: category5,
    title: "PFP Avatars",
    seeFlag: false,
    commingSoon: true,
  },
  {
    id: 6,
    image: category6,
    title: "Spell Cartel",
    seeFlag: false,
    commingSoon: false,
  },
  {
    id: 7,
    image: category7,
    title: "Scrap Guilds",
    seeFlag: false,
    commingSoon: false,
  },
  {
    id: 8,
    image: category8,
    title: "Scrap Guilds",
    seeFlag: false,
    commingSoon: false,
  },
  {
    id: 9,
    image: category9,
    title: "Scrap Guilds",
    seeFlag: true,
    commingSoon: false,
  },
];

const mapContainerStyle = {
  width: "100%",
  height: "100px",
};

const center = {
  lat: -5.745,
  lng: 18.523,
};

const position = {
  lat: -5.745,
  lng: 18.523,
};

const option = {
  controlPosition: window.google
    ? window.google.maps.ControlPosition.TOP_LEFT
    : undefined,
  controls: ["Point"],
  drawingMode: "Point", //  "LineString" or "Polygon".
  featureFactory: (geometry) => {
    console.log("geometry: ", geometry);
  },
  // Type:  boolean
  // If true, the marker receives mouse and touch events. Default value is true.
  clickable: true,

  // Type:  string
  // Mouse cursor to show on hover. Only applies to point geometries.
  cursor: "crosshair",

  // Type:  boolean
  // If true, the object can be dragged across the map and the underlying feature will have its geometry updated. Default value is false.
  draggable: true,

  // Type:  boolean
  // If true, the object can be edited by dragging control points and the underlying feature will have its geometry updated. Only applies to LineString and Polygon geometries. Default value is false.
  editable: true,

  // Type:  string
  // The fill color. All CSS3 colors are supported except for extended named colors. Only applies to polygon geometries.
  fillColor: "#FF0055",

  // Type:  number
  // The fill opacity between 0.0 and 1.0. Only applies to polygon geometries.
  fillOpacity: 1,

  // Type:  string|Icon|Symbol
  // Icon for the foreground. If a string is provided, it is treated as though it were an Icon with the string as url. Only applies to point geometries.
  // icon: 'icon',

  // Type:  MarkerShape
  // Defines the image map used for hit detection. Only applies to point geometries.
  // shape: 'shape',

  // Type:  string
  // The stroke color. All CSS3 colors are supported except for extended named colors. Only applies to line and polygon geometries.
  strokeColor: "#00FF55",

  // Type:  number
  // The stroke opacity between 0.0 and 1.0. Only applies to line and polygon geometries.
  strokeOpacity: 1,

  // Type:  number
  // The stroke width in pixels. Only applies to line and polygon geometries.
  strokeWeight: 2,

  // Type:  string
  // Rollover text. Only applies to point geometries.
  title: "Title",

  // Type:  boolean
  // Whether the feature is visible. Defaults to true.
  visible: true,

  // Type:  number
  // All features are displayed on the map in order of their zIndex, with higher values displaying in front of features with lower values. Markers are always displayed in front of line-strings and polygons.
  zIndex: 2,
};

const ProfileTopContainer = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBItg1_VHoPhZl5EA95ZKyrEVcOAeWmvUk",
  });

  //   const mapRef = React.useRef<google.maps.Map<Element> | null>(null);
  const [map, setMap] = React.useState(null);
  const [discordCheck, setDiscordCheck] = useState(false);
  const [twitterCheck, setTwitterCheck] = useState(false);
  const [onlineCheck, setOnlineCheck] = useState(true);

  useEffect(() => {
    console.log("map", map);
  }, [map]);

  const onLoad = (data) => {
    console.log("data: ", data);
  };

  const onClick = (e) => {
    console.log("e: ", e);
  };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const [settingModalOpen, setSettingModalOpen] = useState(false);
  const classes = useStyles();
  const settingClose = () => {
    setSettingModalOpen(false);
  };
  const onMapClick = (e) => {
    console.log(e.latLng.lat(), e.latLng.lng());
  };
  const iconStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    fontSize: 15,
    color: "#878787",
    paddingRight: 2,
  };
  return (
    <MainContainer>
      <LocationArea>
        <HomeImage src={homeIcon} alt="homeImage" />
        <LocationText>
          <span style={{ color: "white", margin: "0 5px" }}> / </span> Profile
        </LocationText>
      </LocationArea>
      <BannerContainer>
        <Grid container spacing={2} className={classes.root}>
          <Grid item xs={12} md={7} className={classes.textCont}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  position: "relative",
                }}
              >
                <ProfileImage src={profileImage} alt="" />
                <OnlineImage
                  style={{
                    backgroundColor: onlineCheck ? "#00FA19" : "#666666",
                  }}
                  onClick={() => setOnlineCheck(!onlineCheck)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  position: "relative",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <WalletAddress>0xddxx....E336</WalletAddress>
                <CopyToClipboard
                  text={"0xddxx....E336"}
                  onCopy={() => {
                    toast("Address has been copied.");
                  }}
                >
                  <CopyImage src={copyImage} alt="" />
                </CopyToClipboard>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <LeftBottomArea>
                <DiscordImage
                  src={discordCheck ? discordImage : grayDiscord}
                  alt="category"
                />
                {discordCheck && <CategoryText>russ#9607</CategoryText>}
              </LeftBottomArea>
              <LeftBottomArea>
                <DiscordImage
                  src={twitterCheck ? twitterImage : grayTwitter}
                  alt="category"
                />
                {twitterCheck && <CategoryText>russ#9607</CategoryText>}
              </LeftBottomArea>
            </div>
          </Grid>
          <Grid item xs={12} md={5} className={classes.imgCont}>
            <RightTopArea>
              <CountArea>
                <CountValue>123</CountValue>
                <UnitText>Owned</UnitText>
              </CountArea>
              <CountArea>
                <CountValue>14</CountValue>
                <UnitText>Listed</UnitText>
              </CountArea>
            </RightTopArea>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <RightBottomArea onClick={() => setSettingModalOpen(true)}>
                <List src={settingIcon} alt="category" />
                <CategoryText>Settings</CategoryText>
              </RightBottomArea>
              <RightBottomArea
                style={{
                  backgroundColor: "#252728",
                  border: "1px solid #191717",
                }}
              >
                <List src={logoutImage} alt="category" />
                <CategoryText style={{ color: "#727274" }}>Logout</CategoryText>
              </RightBottomArea>
            </div>
          </Grid>
        </Grid>
      </BannerContainer>
      <Dialog
        fullWidth={true}
        maxWidth="sm"
        open={settingModalOpen}
        onClose={settingClose}
      >
        <SettingArea>
          <ModalTitle>Profile Settings</ModalTitle>
          <ProfileImageArea>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <SideTitle>Profile Photos</SideTitle>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  src={catengoryFilterImage}
                  style={{ width: 40, height: 40, marginRight: 10 }}
                  alt=""
                />
                <img
                  src={emptyProfile}
                  style={{ width: 40, height: 40, marginRight: 10 }}
                  alt=""
                />
                <img
                  src={emptyProfile}
                  style={{ width: 40, height: 40, marginRight: 10 }}
                  alt=""
                />
              </div>
            </div>
            <PurchageTxt>Purchase PFP Avatar</PurchageTxt>
          </ProfileImageArea>
          <SideTitle>Social Accounts</SideTitle>
          <ProfileImageArea>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <DiscordImage src={blackDiscord} alt="category" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <SocialText style={{ color: "black" }}>Discord</SocialText>
                {discordCheck && <SocialInfo>Russ#9607</SocialInfo>}
              </div>
            </div>
            <Switch
              onChange={() => setDiscordCheck(!discordCheck)}
              checked={discordCheck}
              width={70}
              height={35}
              uncheckedIcon={<div style={iconStyle}></div>}
              checkedIcon={<div style={iconStyle}></div>}
              offColor="#E9E9EA"
              onColor="#ED2185"
              offHandleColor="#fff"
              onHandleColor="#fff"
              handleDiameter={31}
              activeBoxShadow="0 0 2px 3px #3bf"
            />
          </ProfileImageArea>
          <ProfileImageArea>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <DiscordImage src={blackTwitter} alt="category" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <SocialText style={{ color: "black" }}>Twitter</SocialText>
                {twitterCheck && <SocialInfo>Russ#9607</SocialInfo>}
              </div>
            </div>
            <Switch
              onChange={() => setTwitterCheck(!twitterCheck)}
              checked={twitterCheck}
              width={70}
              height={35}
              uncheckedIcon={<div style={iconStyle}></div>}
              checkedIcon={<div style={iconStyle}></div>}
              offColor="#E9E9EA"
              onColor="#ED2185"
              offHandleColor="#fff"
              onHandleColor="#fff"
              handleDiameter={31}
              activeBoxShadow="0 0 2px 3px #3bf"
            />
          </ProfileImageArea>
          <SideTitle>Banner Location Snapshot</SideTitle>
          <ProfileImageArea>
            <SideTitle
              style={{ opacity: 1, maxWidth: 230, textTransform: "initial" }}
            >
              Use a prefered location on the map as your banner image.
            </SideTitle>
            <PurchageTxt style={{ width: 65 }}>Open Map</PurchageTxt>
          </ProfileImageArea>
          {isLoaded ? (
            <GoogleMap
              id="data-example"
              mapContainerStyle={mapContainerStyle}
              zoom={10}
              center={center}
              onClick={onMapClick}
              cursor="crosshair"
            >
              <Marker onLoad={onLoad} position={position} />
            </GoogleMap>
          ) : (
            <></>
          )}
          <ModalButtonArea>
            <ModalCloseButton onClick={() => setSettingModalOpen(false)}>
              Close
            </ModalCloseButton>
            <ModalSaveButton onClick={() => setSettingModalOpen(false)}>
              Save
            </ModalSaveButton>
          </ModalButtonArea>
        </SettingArea>
      </Dialog>
      <ToastContainer />
    </MainContainer>
  );
};

export default ProfileTopContainer;
