import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import homeIcon from "../../assets/images/homeIcon.png";
import nftDetailImage from "../../assets/images/nftDetailImage.png";
import Dialog from "@material-ui/core/Dialog";

import ownerAvatar from "../../assets/images/ownerAvatar.png";
import arrowDown from "../../assets/images/arrow-down1.png";
import arrowUp from "../../assets/images/arrow-up.png";
import nftImage from "../../assets/images/nftImage.png";
import transactedImage from "../../assets/images/transactedImage.png";
import transImage from "../../assets/images/transImage.png";
import blockViewImage from "../../assets/images/blockViewImage.png";
import priceImage from "../../assets/images/priceImage.png";
import listedImage from "../../assets/images/listedImage.png";
import listChecked from "../../assets/images/listChecked.jpg";
import listChecking from "../../assets/images/listChecking.jpg";
import listUnchecked from "../../assets/images/listUnchecked.jpg";
import closeImg from "../../assets/images/closeImg.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  padding: 1em 0em;
  backdrop-filter: blur(4px);
  @media screen and (max-width: 600px) {
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
    [theme.breakpoints.down("sm")]: {
      paddingRight: "8px !important",
    },
  },
  imgCont: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "1.5em !important",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "8px !important",
    },
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
  margin-top: 20px;
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
const CountArea = styled.div`
  display: flex;
  flex-direction: column;
`;
const OwnnerInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 0.5px solid #252728;
  & img {
    width: 60px;
    height: 60px;
  }
  & div {
    margin-left: 20px;
  }
  & p {
    font-family: "Oswald-Light";
    font-size: 16px;
    color: #525151;
    margin: 0;
  }
  & h6 {
    font-family: "Oswald-Regular";
    font-size: 20px;
    color: white;
    margin: 0;
  }
`;
const DetailArea = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #252728;
  padding: 1em;
  border-radius: 5px;
  margin-bottom: 1em;
  & h2 {
    color: white;
    margin: 0;
    font-family: "Oswald-Bold";
    font-size: 20px;
    letter-spacing: 2px;
  }
  & p {
    color: #e4e4e4;
    margin: 0;
    font-family: "Oswald-Light";
    font-size: 16px;
    margin-top: 1em;
    letter-spacing: 1px;
  }
  & img {
    width: 24px;
    height: 24px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const RightTopArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
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
  width: 145px;
  height: 48px;
  border-radius: 5px;
  @media screen and (max-width: 600px) {
    margin-top: 30px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const CategoryListArea = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  margin-bottom: 2em;
  @media screen and (max-width: 600px) {
    margin-top: 1em;
    margin-bottom: 1em;
    justify-content: space-around;
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
  font-family: "Oswald-Medium";
  font-weight: 500;
  font-size: 30px;
  line-height: 44px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0;
  color: #191717;
  @media screen and (max-width: 560px) {
    font-size: 20px;
  }
`;
const NftImage = styled.img`
  width: 100%;
`;
const PriceArea = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #252728;
  padding: 1em;
  & p {
    color: white;
    font-family: "Oswald-Regular";
    font-size: 20px;
    margin: 0;
    text-transform: uppercase;
  }
  & div p {
    color: #929393;
    font-family: "Oswald-Light";
    font-size: 20px;
  }
  & h1 {
    color: white;
    font-family: "Oswald-Bold";
    font-size: 40px;
  }
`;
const BuyBtn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ed2185;
  height: 60px;
  width: 100%;
  border-radius: 5px;
  color: white;
  font-family: "Oswald-Regular";
  font-size: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }
`;

interface Props {}

const AttributArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & div {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    margin-right: 2.8em;
    width: 85px;
    margin-left: 0.5em;
  }
  & p {
    color: white;
    font-family: "Oswald-Light";
    font-size: 16px;
    margin: 5px 0;
  }
  @media screen and (max-width: 700px) {
    & div {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      margin-right: 0.3em;
      width: 60px;
    }
    & p {
      font-size: 12px;
    }
  }
`;

const ActivityItemArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  background-color: #252728;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin-top: 0em;
  }
`;
const ActivityItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 5px 0px;
  }
`;
const TransactionHistoryArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  padding: 0px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 5px 0px;
  }
`;
const NFTItemArea = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  align-items: center;
  @media screen and (max-width: 1115px) {
  }
  @media screen and (max-width: 700px) {
    width: fit-content;
  }
`;
const PriceArea1 = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    width: fit-content;
  }
`;
const NameArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  margin-left: 15px;
  justify-content: center;
  @media screen and (max-width: 700px) {
    margin-left: 5px;
  }
`;
const NameArea1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  margin-left: 5px;
  justify-content: center;
  width: 110px;
  @media screen and (max-width: 700px) {
    width: 60px;
    margin-left: 2px;
  }
`;
const NftName = styled.p`
  color: white;
  font-family: "Oswald-Bold";
  font-size: 20px;
  margin: 0;
  @media screen and (max-width: 1115px) {
    font-size: 15px;
  }
  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`;
const NftPrice = styled.p`
  color: white;
  font-family: "Oswald-Regular";
  font-size: 16px;
  margin-top: 0.3em !important;
  @media screen and (max-width: 700px) {
    font-size: 12px !important;
  }
`;
const BlockTimeText = styled.p`
  color: white;
  font-family: "Oswald-Regular";
  font-size: 12px !important;
  margin: 0;
  @media screen and (max-width: 700px) {
    font-size: 12px !important;
  }
`;
const NftStatus = styled.div`
  color: black;
  margin: 0;
  width: fit-content;
  font-family: "Oswald-Bold";
  font-size: 14px;
  background-color: #b9fa00;
  text-align: center;
  border-radius: 30px;
  width: 85px;
  margin-top: 3px;
  @media screen and (max-width: 700px) {
    font-size: 12px;
    width: 75px;
  }
`;
const NFTImage1 = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin-left: 15px;
  @media screen and (max-width: 700px) {
    width: 50px;
    height: 50px;
    margin-left: 10px;
  }
`;
const TransactionImage = styled.img`
  width: 40px !important;
  height: 40px !important;
  @media screen and (max-width: 700px) {
    width: 24px !important;
    height: 24px !important;
  }
`;
const TransImage = styled.img`
  width: 22px;
  height: 25px;
  margin-right: 5px;
  @media screen and (max-width: 1115px) {
    width: 20px;
    height: 23px;
  }
  @media screen and (max-width: 700px) {
    width: 15px;
    height: 18px;
  }
`;
const BlockViewImage = styled.img`
  width: 24px;
  height: 24px;
  @media screen and (max-width: 700px) {
    width: 20px !important;
    height: 20px !important;
  }
`;
const PriceImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 5px;
  margin-top: 0.1em;
  @media screen and (max-width: 700px) {
    width: 18px !important;
    height: 18px !important;
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
const SocialText = styled.p`
  font-family: "Oswald-SemiBold";
  margin: 0;
  margin-left: 10px;
  font-size: 20px;
  line-height: 30px;
  color: #191717;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
const SocialInfo = styled.p`
  font-family: "Oswald-Regular";
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.05em;
  color: #191717;
  opacity: 0.5;
  margin: 0;
  margin-left: 10px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
const ListingDes = styled.p`
  font-family: "Oswald-Regular";
  font-size: 16px;
  line-height: 24px;
  color: #191717;
  opacity: 0.5;
  margin: 0;
  margin-left: 10px;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
const DiscordImage = styled.img`
  width: 60px;
  height: 60px;
`;
const CloseImg = styled.img`
  width: 32px;
  height: 32px;
  @media screen and (max-width: 600px) {
    width: 28px;
    height: 28px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const PriceInputArea = styled.div`
  width: 100%;
  padding: 1em 0.5em;
  background: #f6f6f6;
  border-radius: 8px;
  margin-top: 25px;
`;
const ConfirmBtn = styled.div`
  width: 100%;
  height: 48px;
  background: #ed2185;
  border-radius: 4px;
  font-family: "Oswald-Regular";
  font-size: 20px;
  line-height: 121%;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const DisabledConfirmBtn = styled.div`
  width: "100%";
  height: 48px;
  background-color: white;
  border: 1.5px solid #ed2185;
  font-family: "Oswald-Regular";
  font-size: 20px;
  line-height: 121%;
  text-align: center;
  border-radius: 4px;
  display: flex;
  color: #ed2185;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  &:hover {
    cursor: not-allowed;
  }
`;
const PriceDetailTxt = styled.p`
  margin: 0;
  font-family: "Oswald-Light";
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #191717;
  opacity: 0.5;
`;
const PriceAmoutInput = styled.input`
  font-family: "Oswald-Medium";
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #191717;
  outline: none;
  border: 0;
  width: 100%;
  background-color: #f6f6f6;
`;

const ActivityItemList = [
  {
    id: 1,
    nftName: "Common Plot land #2673",
    status: "Sold",
    nftPrice: "12,000",
    sentAdd: "0x8637....34AA",
    receivedAdd: "0x7341....1HGA",
    transTime: "Aug 5, 2022 01:33:39 PM UST",
  },
  {
    id: 4,
    nftName: "Common Plot land #2673",
    status: "Transferred",
    nftPrice: "-",
    sentAdd: "0x8637....34AA",
    receivedAdd: "0x7341....1HGA",
    transTime: "Aug 5, 2022 01:33:39 PM UST",
  },
  {
    id: 3,
    nftName: "Common Plot land #2673",
    status: "Listed",
    nftPrice: "12,000",
    sentAdd: "0x8637....34AA",
    receivedAdd: "0x7341....1HGA",
    transTime: "Aug 5, 2022 01:33:39 PM UST",
  },
  {
    id: 2,
    nftName: "Common Plot land #2673",
    status: "Minted",
    nftPrice: "12,000",
    sentAdd: "0x8637....34AA",
    receivedAdd: "0x7341....1HGA",
    transTime: "Aug 5, 2022 01:33:39 PM UST",
  },
];

const OwnNftDetailContainer: React.FC<Props> = () => {
  const [detailFlag, setDetailFlag] = useState(true);
  const [attributeFlag, setAttributeFlag] = useState(false);
  const [activity, setActivity] = useState(false);
  const [nftStatus, setNftStatus] = useState("List for Sale");
  const classes = useStyles();
  const [settingModalOpen, setSettingModalOpen] = useState(false);
  const [processFlag, setProcessFlag] = useState(false);
  const [nftPrice, setNftPrice] = useState(0);
  const [approveFlag, setApproveFlag] = useState(false);
  const [signFlag, setSignFlag] = useState(false);
  const settingClose = () => {
    setSettingModalOpen(false);
    setNftPrice(0);
    setProcessFlag(false);
    setSignFlag(false);
    setApproveFlag(false);
  };

  const buyFun = () => {
    setSettingModalOpen(true);
  };

  const confirmFun = () => {
    if (isNaN(nftPrice) || nftPrice == 0) {
      toast("Please enter price.");
    } else {
      setProcessFlag(true);
      setTimeout(() => {
        setApproveFlag(true);
      }, 2000);
      setTimeout(() => {
        setSignFlag(true);
      }, 4000);
    }
  };

  return (
    <MainContainer>
      <LocationArea>
        <HomeImage src={homeIcon} alt="homeImage" />
        <LocationText>
          <span style={{ color: "white", margin: "0 5px" }}>
            {" "}
            / Land Plots /
          </span>
          Attack Wagon...
        </LocationText>
      </LocationArea>
      <BannerContainer>
        <Grid container spacing={2} className={classes.root}>
          <Grid item xs={12} md={6} className={classes.textCont}>
            <NftImage src={nftDetailImage} alt="" />
            <PriceArea>
              <p>Last Sold</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h1>2300 ATK</h1>
                <p>$43.00</p>
              </div>
              <BuyBtn
                style={{
                  backgroundColor:
                    nftStatus == "Cancel Listing" ? "#252728" : "#ed2185",
                  color: nftStatus == "Cancel Listing" ? "#ed2185" : "white",
                  border:
                    nftStatus == "Cancel Listing" ? "1px solid#ed2185" : "0px",
                }}
                onClick={() => {
                  buyFun();
                }}
              >
                {nftStatus}
              </BuyBtn>
            </PriceArea>
          </Grid>
          <Grid item xs={12} md={6} className={classes.imgCont}>
            <CountArea>
              <div
                style={{
                  color: "#ED2185",
                  fontFamily: "Oswald-Regular",
                  fontSize: 14,
                  border: "1px solid #ED2185",
                  width: 86,
                  height: 24,
                  borderRadius: 12,
                  textAlign: "center",
                }}
              >
                Land Plots
              </div>
              <UnitText>
                Attack Wagon Common Land Plot #1176 - Shaded Helion Hillside
              </UnitText>
              <OwnnerInfo>
                <img src={ownerAvatar} alt="ownerAvatar" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <p>Owner</p>
                  <h6>0x8637....34AA</h6>
                </div>
              </OwnnerInfo>
              <DetailArea>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    setDetailFlag(!detailFlag);
                  }}
                >
                  <h2>DETAILS</h2>
                  <img src={detailFlag ? arrowUp : arrowDown} alt="" />
                </div>
                {detailFlag && (
                  <p>
                    This is a deed of ownership for the property known as Shaded
                    Helion Hillside located in the Valean Realm on Aethervale
                    Station. Possession of this deed constitutes a binding
                    agreement between the deed-holder, The Valean Cabinet, and
                    Aethervale Station any disputes will be settled via
                    roshambo. In accordance with Valean Cabinet legislation, we
                    are required to make the following declarations, This is a
                    deed of ownership for the property known as Shaded Helion
                    Hillside located in the Valean Realm on Aethervale Station.
                    Possession of this deed constitutes a binding agreement
                    between the deed-holder, The Valean Cabinet, and Aethervale
                    Station any disputes will be settled via roshambo. In
                    accordance with Valean Cabinet legislation, we are required
                    to make the following declarations, This is a deed of
                    ownership for the property known as Shaded Helion Hillside
                    located in the Valean Realm on Aethervale Station.
                  </p>
                )}
              </DetailArea>
              <DetailArea>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    setAttributeFlag(!attributeFlag);
                  }}
                >
                  <h2>ATTRIBUTES</h2>
                  <img src={attributeFlag ? arrowUp : arrowDown} alt="" />
                </div>
                {attributeFlag && (
                  <AttributArea>
                    <div>
                      <p style={{ color: "#929393" }}>Type</p>
                      <p>Common</p>
                    </div>
                    <div>
                      <p style={{ color: "#929393" }}>Category</p>
                      <p>Decay</p>
                    </div>
                    <div>
                      <p style={{ color: "#929393" }}>Environment</p>
                      <p>Ruins</p>
                    </div>
                    <div>
                      <p style={{ color: "#929393" }}>Plot</p>
                      <p>1176</p>
                    </div>
                    <div>
                      <p style={{ color: "#929393" }}>Environment</p>
                      <p>Ruins</p>
                    </div>
                    <div>
                      <p style={{ color: "#929393" }}>Type</p>
                      <p>Common</p>
                    </div>
                    <div>
                      <p style={{ color: "#929393" }}>Category</p>
                      <p>Decay</p>
                    </div>
                  </AttributArea>
                )}
              </DetailArea>
              <DetailArea>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    setActivity(!activity);
                  }}
                >
                  <h2>ACTIVITY</h2>
                  <img src={activity ? arrowUp : arrowDown} alt="" />
                </div>
                {activity && (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "1.5em",
                    }}
                  >
                    {ActivityItemList.map((item, index) => {
                      return (
                        <ActivityItemArea key={index}>
                          <BlockTimeText>
                            Aug 5, 2022 01:33:39 PM UST
                          </BlockTimeText>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <ActivityItem>
                              <NftStatus
                                style={{
                                  backgroundColor:
                                    item.status == "Minted"
                                      ? "#FA8700"
                                      : item.status == "Listed"
                                      ? "#0082FA"
                                      : item.status == "Transferred"
                                      ? "#B900FA"
                                      : "B9FA00",
                                }}
                              >
                                {item.status}
                              </NftStatus>
                              <PriceArea1>
                                <PriceImage src={priceImage} alt="image" />
                                <NameArea1>
                                  <NftPrice>
                                    {item.nftPrice}{" "}
                                    {(item.status == "Sold" ||
                                      item.status == "Listed" ||
                                      item.status == "Minted") &&
                                      "ATK"}
                                  </NftPrice>
                                </NameArea1>
                              </PriceArea1>
                              <NFTItemArea style={{ width: "fit-content" }}>
                                <TransactionImage
                                  src={
                                    item.status == "Listed" ||
                                    item.status == "Minted"
                                      ? listedImage
                                      : transactedImage
                                  }
                                  alt="image"
                                  style={{ marginTop: "0.3em" }}
                                />
                                <NameArea>
                                  <NftPrice
                                    style={{
                                      marginTop:
                                        item.status == "Listed" ||
                                        item.status == "Minted"
                                          ? "0.5em !important"
                                          : "0",
                                      marginRight: "1em",
                                    }}
                                  >
                                    0x8637....34AA
                                  </NftPrice>
                                  {(item.status == "Sold" ||
                                    item.status == "Transferred") && (
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                      }}
                                    >
                                      <TransImage src={transImage} alt="" />
                                      <NftPrice style={{ marginTop: "0.3em" }}>
                                        0x7341....1HGA
                                      </NftPrice>
                                    </div>
                                  )}
                                </NameArea>
                              </NFTItemArea>
                              <BlockViewImage
                                src={blockViewImage}
                                alt="image"
                              />
                            </ActivityItem>
                          </div>
                        </ActivityItemArea>
                      );
                    })}
                  </div>
                )}
              </DetailArea>
            </CountArea>
          </Grid>
        </Grid>
      </BannerContainer>
      <Dialog
        fullWidth={true}
        maxWidth="sm"
        open={settingModalOpen}
        onClose={settingClose}
        disableBackdropClick={true}
      >
        <SettingArea>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ModalTitle>List for Sale</ModalTitle>
            <CloseImg onClick={settingClose} src={closeImg} alt="nftImage" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <DiscordImage src={nftImage} alt="nftImage" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <SocialText style={{ color: "black" }}>
                Common Plot land #2673
              </SocialText>
              <SocialInfo>Last Sold for 12,000 ATK</SocialInfo>
            </div>
          </div>
          {!processFlag ? (
            <PriceInputArea>
              <PriceDetailTxt>Enter Price</PriceDetailTxt>
              <div
                style={{
                  width: "100%",
                  height: 48,
                  border: "1px solid rgba(25, 23, 23, 0.2)",
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 0.7em",
                  marginTop: 10,
                }}
              >
                <PriceAmoutInput
                  value={nftPrice || ""}
                  type="number"
                  onChange={(e) => {
                    setNftPrice(parseFloat(e.target.value));
                  }}
                ></PriceAmoutInput>
                <PriceDetailTxt>ATK</PriceDetailTxt>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <PriceDetailTxt>List Price</PriceDetailTxt>
                <PriceDetailTxt
                  style={{ fontFamily: "Oswald-Regular", opacity: "1" }}
                >
                  {isNaN(nftPrice) ? 0 : nftPrice} ATK
                </PriceDetailTxt>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <PriceDetailTxt>Marketplace Fee 5%</PriceDetailTxt>
                <PriceDetailTxt
                  style={{ fontFamily: "Oswald-Regular", opacity: "1" }}
                >
                  {isNaN(nftPrice) ? 0 : (nftPrice * 0.05).toFixed(4)} ATK
                </PriceDetailTxt>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 10,
                  borderBottom: "1px solid rgba(25, 23, 23, 0.2)",
                  paddingBottom: 20,
                }}
              >
                <PriceDetailTxt>Landowners Fee 5%</PriceDetailTxt>
                <PriceDetailTxt
                  style={{ fontFamily: "Oswald-Regular", opacity: "1" }}
                >
                  {isNaN(nftPrice) ? 0 : (nftPrice * 0.05).toFixed(4)} ATK
                </PriceDetailTxt>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <PriceDetailTxt style={{ fontFamily: "Oswald-Medium" }}>
                  Sale Earnings
                </PriceDetailTxt>
                <PriceDetailTxt
                  style={{ fontFamily: "Oswald-Regular", opacity: "1" }}
                >
                  {isNaN(nftPrice) ? 0 : nftPrice * 0.9} ATK
                </PriceDetailTxt>
              </div>
            </PriceInputArea>
          ) : (
            <PriceInputArea>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={listChecked} style={{ width: 24 }} alt="" />
                  <div
                    style={{
                      width: 3,
                      height: 59,
                      backgroundColor: "#ED2185",
                      borderRadius: 1.5,
                    }}
                  ></div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 5,
                  }}
                >
                  <SocialText
                    style={{ color: "#ED2185", textTransform: "uppercase" }}
                  >
                    Listing PRice
                  </SocialText>
                  <ListingDes>12,000 ATK</ListingDes>
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", marginTop: 5 }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={approveFlag ? listChecked : listChecking}
                    style={{ width: 24 }}
                    alt=""
                  />
                  <div
                    style={{
                      width: 3,
                      height: 80,
                      backgroundColor: approveFlag ? "#ED2185" : "#CAC9C9",
                      borderRadius: 1.5,
                    }}
                  ></div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 5,
                  }}
                >
                  <SocialText
                    style={{
                      color: approveFlag ? "#ED2185" : "#191717",
                      textTransform: "uppercase",
                    }}
                  >
                    Approve Transfer
                  </SocialText>
                  <ListingDes>
                    Since this is your first time listing an NFT in this
                    category, you must approve the asset for transfer
                  </ListingDes>
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", marginTop: 5 }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={
                      signFlag
                        ? listChecked
                        : approveFlag
                        ? listChecking
                        : listUnchecked
                    }
                    style={{ width: 24 }}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 5,
                  }}
                >
                  <SocialText
                    style={{
                      color: signFlag ? "#ED2185" : "#191717",
                      opacity: approveFlag ? "1" : "0.5",
                      textTransform: "uppercase",
                    }}
                  >
                    Sign with Wallet
                  </SocialText>
                  <ListingDes>
                    Follow the prompts in your wallet app to complete this
                    listing.
                  </ListingDes>
                </div>
              </div>
            </PriceInputArea>
          )}
          {isNaN(nftPrice) || nftPrice == 0 ? (
            <DisabledConfirmBtn>Confirm Price</DisabledConfirmBtn>
          ) : (
            <ConfirmBtn
              onClick={() => {
                if (signFlag) {
                  settingClose();
                } else confirmFun();
              }}
            >
              {processFlag ? "Open Wallet" : "Confirm Price"}
            </ConfirmBtn>
          )}
        </SettingArea>
      </Dialog>
      <ToastContainer />
    </MainContainer>
  );
};

export default OwnNftDetailContainer;
