import React, { useState } from "react";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { withStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import searchIcon from "../../assets/images/searchIcon.png";
import alarmIcon from "../../assets/images/alarmIcon.png";
import activeAlarmIcon from "../../assets/images/activeAlarmIcon.png";
import mailIcon from "../../assets/images/mailIcon.png";
import activeMailIcon from "../../assets/images/activeMailIcon.png";
import accountIcon from "../../assets/images/accountIcon.png";
import activeAccountIcon from "../../assets/images/activeAccountIcon.png";
import ownerAvatar from "../../assets/images/ownerAvatar.png";
import transactionHistory from "../../assets/images/transactionHistory.png";
import transferView from "../../assets/images/transferView.png";
import transactionBack from "../../assets/images/transactionBack.png";
import whiteTransactedImage from "../../assets/images/whiteTransactedImage.png";
import transImage from "../../assets/images/transImage.png";
import listedImage from "../../assets/images/listedImage.png";
import nftImage from "../../assets/images/nftImage.png";

interface SocialAreaProps {
  connect: () => void;
  connected: boolean;
}
interface buttonProps {
  status: boolean;
}
const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 960px) {
    display: none;
  }
`;

const ConnectButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ed2185;
  width: 177px;
  height: 48px;
  border-radius: 5px;
  font-size: 16px;
  font-family: Oswald-Regular;
  justify-content: center;
  color: white;
  & img {
    width: 26px;
    height: 26px;
    margin-right: 10px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
  margin: 0 0.7em;
  background-size: contain;
  &:hover {
    cursor: pointer;
  }
`;

const VerticalLine = styled.div`
  height: 30px;
  width: 1px;
  margin: 0 1em;
  background-color: #252728;
`;

const AcountIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;
const AddressInfoArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 420px;
  & p {
    font-family: "Oswald-Light";
    font-size: 16px;
    color: #9b9999;
    margin: 0;
  }
  & h6 {
    font-family: "Oswald-Medium";
    text-transform: uppercase;
    font-size: 20px;
    color: black;
    margin: 0;
    margin-top: 8px;
  }
  & img:hover {
    cursor: pointer;
  }
`;
const BalanaceArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  margin-top: 30px;
  & p {
    font-family: "Oswald-Regular";
    font-size: 20px;
    color: #868585;
    margin: 0;
  }
  & h1 {
    font-family: "Oswald-Bold";
    font-size: 76px;
    color: black;
    margin: 0;
    margin-top: 8px;
    margin-right: 20px;
  }
  & h3 {
    font-family: "Oswald-ExtraLight";
    font-size: 50px;
    color: black;
    margin: 0;
    margin-top: 8px;
  }
  & h6 {
    font-family: "Oswald-ExtraLight";
    font-size: 30px;
    color: black;
    margin: 0;
    margin-top: 8px;
  }
`;
const RevenueArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  margin-top: 25px;
  padding-top: 25px;
  border-top: 1px solid #d8d5d5;
  & h2 {
    font-family: "Oswald-Medium";
    font-size: 20px;
    color: black;
    margin: 0;
    margin-right: 20px;
  }
  & p {
    font-family: "Oswald-Light";
    font-size: 16px;
    color: #868585;
    margin: 0;
  }
`;
const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 420px;
  justify-content: space-between;
  & h2 {
    font-family: "Oswald-Medium";
    font-size: 20px;
    color: black;
    margin: 0;
    margin-right: 20px;
  }
  & p {
    font-family: "Oswald-Light";
    font-size: 16px;
    color: #868585;
    margin: 0;
  }
`;
const TransactionBtn = styled.div<buttonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.status ? "#ed2185" : "#fff")};
  color: ${(props) => (props.status ? "#fff" : "#ed2185")};
  border: ${(props) => (props.status ? "1px solid #fff" : "1px solid #ed2185")};
  font-size: 20px;
  font-family: "Oswald-Regular";
  width: 198px;
  height: 60px;
  border-radius: 5px;
`;
const RevenueItemArea = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const WithDrawBtn = styled.p`
  font-family: "Oswald-Regular";
  font-size: 16px !important;
  color: #ed2185 !important;
  border-bottom: 1px solid #ed2185;
  width: fit-content;
  padding-bottom: 5px;
`;
const ActivityItemArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  margin-bottom: 2em;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin-top: 0em;
  }
`;
const TransactionStatus = styled.p`
  color: #757474;
  font-family: "Oswald-Regular";
  font-size: 16px !important;
  margin-bottom: 5px !important;
  margin: 0;
  text-align: end;
  text-transform: uppercase;
  @media screen and (max-width: 700px) {
    font-size: 12px !important;
  }
`;
const BlockTimeText = styled.p`
  color: #191717;
  font-family: "Oswald-Regular";
  font-size: 20px;
  margin: 0;
  width: 145px;
  line-height: 1.5;
  text-align: end;
  @media screen and (max-width: 1115px) {
    font-size: 14px;
    width: 100px;
  }
  @media screen and (max-width: 700px) {
    font-size: 12px;
    width: 80px;
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
const NftPrice = styled.p`
  color: #191717;
  font-family: "Oswald-Regular";
  font-size: 20px;
  margin-top: 0.3em !important;
  margin-bottom: 0.2em !important;
  @media screen and (max-width: 700px) {
    font-size: 12px !important;
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
const NFTImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  @media screen and (max-width: 700px) {
    width: 50px;
    height: 50px;
    margin-left: 10px;
  }
`;
const NftName = styled.p`
  color: #191717;
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
const NftStatus = styled.div`
  color: black;
  margin: 0;
  width: fit-content;
  font-family: "Oswald-Bold";
  font-size: 14px;
  background-color: #b9fa00;
  text-align: center;
  border-radius: 30px;
  padding: 5px 15px;
  margin-top: 3px;
`;

const HtmlTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: "#f6f6f6",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 497,
    maxHeight: 685,
    fontSize: theme.typography.pxToRem(12),
    padding: 0,
    margin: 0,
    marginTop: "1em",
    borderRadius: 10,
  },
}))(Tooltip);

const NotificationList = [
  {
    id: 1,
    nftName: "Common Plot land #2673",
    status: "Sold",
    nftPrice: "12,000",
    sentAdd: "0x8637....34AA",
    receivedAdd: "0x7341....1HGA",
    transTime: "Aug 5, 2022 01:33:39 PM UST",
    transactionType: "Withdrawal",
    transactionStatus: "Pending",
  },
  {
    id: 3,
    nftName: "Common Plot land #2673",
    status: "Listed",
    nftPrice: "12,000",
    sentAdd: "0x8637....34AA",
    receivedAdd: "123,456.99",
    transTime: "Aug 5, 2022 01:33:39 PM UST",
    transactionType: "Deposit",
    transactionStatus: "Complete",
  },
  {
    id: 2,
    nftName: "Common Plot land #2673",
    status: "Listed",
    nftPrice: "12,000",
    sentAdd: "0x8637....34AA",
    receivedAdd: "123,456.99",
    transTime: "Aug 5, 2022 01:33:39 PM UST",
    transactionType: "Withdrawal",
    transactionStatus: "Complete",
  },
];

const TransactionList = [
  {
    id: 1,
    nftName: "Common Plot land #2673",
    status: "Sold",
    nftPrice: "12,000",
    sentAdd: "0x8637....34AA",
    receivedAdd: "0x7341....1HGA",
    transTime: "Aug 5, 2022 01:33:39 PM UST",
    transactionType: "Withdrawal",
    transactionStatus: "Pending",
  },
  {
    id: 3,
    nftName: "Common Plot land #2673",
    status: "Listed",
    nftPrice: "12,000",
    sentAdd: "0x8637....34AA",
    receivedAdd: "123,456.99",
    transTime: "Aug 5, 2022 01:33:39 PM UST",
    transactionType: "Deposit",
    transactionStatus: "Complete",
  },
  {
    id: 2,
    nftName: "Common Plot land #2673",
    status: "Minted",
    nftPrice: "12,000",
    sentAdd: "0x8637....34AA",
    receivedAdd: "123,456.99",
    transTime: "Aug 5, 2022 01:33:39 PM UST",
    transactionType: "Withdrawal",
    transactionStatus: "Complete",
  },
  {
    id: 4,
    nftName: "Common Plot land #2673",
    status: "Transferred",
    nftPrice: "-",
    sentAdd: "0x8637....34AA",
    receivedAdd: "0x7341....1HGA",
    transTime: "Aug 5, 2022 01:33:39 PM UST",
    transactionType: "Withdrawal",
    transactionStatus: "Pending",
  },
  {
    id: 5,
    nftName: "Common Plot land #2673",
    status: "Minted",
    nftPrice: "12,000",
    sentAdd: "0x8637....34AA",
    receivedAdd: "123,456.99",
    transTime: "Aug 5, 2022 01:33:39 PM UST",
    transactionType: "Deposit",
    transactionStatus: "Complete",
  },
];

const SocialLinkArea = (props: SocialAreaProps) => {
  let history = useHistory();

  const [open, setOpen] = React.useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [menuStatus, setMenuStatus] = useState(0);
  const [buttonStatus, setButtonStatus] = useState(true);
  const [viewFlag, setViewFlag] = useState(true);

  const handleTransTooltipClose = () => {
    setOpen(false);
  };
  const handleTransTooltipOpen = () => {
    setViewFlag(true);
    setMenuStatus(2);
    setOpen(true);
  };
  ////Notification Tooltip function//////
  const handleNotificationTooltipClose = () => {
    setNotificationOpen(false);
  };
  const handleNotificationTooltipOpen = () => {
    setMenuStatus(1);
    setNotificationOpen(true);
  };
  return (
    <SocialContainer>
      {props.connected ? (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SocialIcon src={searchIcon} />
          <VerticalLine />
          <ClickAwayListener onClickAway={handleNotificationTooltipClose}>
            <div>
              <HtmlTooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleNotificationTooltipClose}
                open={notificationOpen}
                placement="bottom-end"
                disableFocusListener
                disableHoverListener
                disableTouchListener
                interactive
                title={
                  <React.Fragment>
                    <div style={{ borderRadius: 10 }}>
                      <div
                        style={{
                          padding: "2.5em 1.5em",
                          backgroundColor: "white",
                          borderTopRightRadius: 10,
                          borderTopLeftRadius: 10,
                        }}
                      >
                        <AddressInfoArea>
                          <h6 style={{ margin: 0 }}>Notifications</h6>
                        </AddressInfoArea>
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "1.5em",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <NFTItemArea>
                                <div style={{ position: "relative" }}>
                                  <NFTImage src={nftImage} alt="image" />
                                  <div
                                    style={{
                                      position: "absolute",
                                      backgroundColor: "red",
                                      border: "1px solid white",
                                      width: 12,
                                      height: 12,
                                      borderRadius: "50%",
                                      top: 0,
                                      right: -6,
                                    }}
                                  ></div>
                                </div>
                                <NameArea>
                                  <NftName>
                                    {NotificationList[0].nftName}
                                  </NftName>
                                  <BlockTimeText
                                    style={{
                                      textAlign: "start",
                                      lineHeight: 1,
                                      marginTop: 10,
                                    }}
                                  >
                                    12,000 ATK
                                  </BlockTimeText>
                                </NameArea>
                              </NFTItemArea>
                              <NftStatus
                                style={{
                                  backgroundColor:
                                    NotificationList[0].status == "Minted"
                                      ? "#FA8700"
                                      : NotificationList[0].status == "Listed"
                                      ? "#0082FA"
                                      : NotificationList[0].status ==
                                        "Transferred"
                                      ? "#B900FA"
                                      : "B9FA00",
                                }}
                              >
                                {NotificationList[0].status}
                              </NftStatus>
                            </div>
                            <BlockTimeText
                              style={{
                                textAlign: "start",
                                lineHeight: 1,
                                marginTop: 10,
                                fontSize: "12px",
                                color: "#9a9999",
                                marginLeft: "16%",
                              }}
                            >
                              Aug 5, 2022 01:33:39 PM UST
                            </BlockTimeText>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          padding: "2.5em 1.5em",
                          paddingBottom: "1em",
                          background: "#eeecec",
                          borderBottomRightRadius: 10,
                          borderBottomLeftRadius: 10,
                        }}
                      >
                        <h6
                          style={{
                            margin: 0,
                            fontSize: 16,
                            fontFamily: "Oswald-Light",
                            marginBottom: 15,
                            textTransform: "uppercase",
                          }}
                        >
                          Older Notifications
                        </h6>
                        {NotificationList.map((item, index) => {
                          return (
                            <ActivityItemArea key={index}>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "space-between",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                  }}
                                >
                                  <NFTItemArea>
                                    <NFTImage src={nftImage} alt="image" />
                                    <NameArea>
                                      <NftName>{item.nftName}</NftName>
                                      <BlockTimeText
                                        style={{
                                          textAlign: "start",
                                          lineHeight: 1,
                                          marginTop: 10,
                                        }}
                                      >
                                        12,000 ATK
                                      </BlockTimeText>
                                    </NameArea>
                                  </NFTItemArea>
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
                                </div>
                                <BlockTimeText
                                  style={{
                                    textAlign: "start",
                                    lineHeight: 1,
                                    marginTop: 10,
                                    fontSize: "12px",
                                    color: "#9a9999",
                                    marginLeft: "16%",
                                  }}
                                >
                                  Aug 5, 2022 01:33:39 PM UST
                                </BlockTimeText>
                              </div>
                            </ActivityItemArea>
                          );
                        })}
                      </div>
                    </div>
                  </React.Fragment>
                }
              >
                <SocialIcon
                  onClick={handleNotificationTooltipOpen}
                  src={menuStatus == 1 ? activeAlarmIcon : alarmIcon}
                />
              </HtmlTooltip>
            </div>
          </ClickAwayListener>
          <ClickAwayListener onClickAway={handleTransTooltipClose}>
            <div>
              <HtmlTooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTransTooltipClose}
                open={open}
                placement="bottom-end"
                disableFocusListener
                disableHoverListener
                disableTouchListener
                interactive
                title={
                  <React.Fragment>
                    {viewFlag ? (
                      <div style={{ padding: "2.5em 1.5em" }}>
                        <AddressInfoArea>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <AcountIcon src={ownerAvatar} alt="" />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <p>MY WALLET</p>
                              <h6>0x8637....34AA</h6>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={transactionHistory}
                              style={{ width: 26, height: 26, marginRight: 30 }}
                              alt=""
                            />
                            <img
                              onClick={() => setViewFlag(false)}
                              src={transferView}
                              style={{ width: 20, height: 20 }}
                              alt=""
                            />
                          </div>
                        </AddressInfoArea>
                        <BalanaceArea
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <p>BALANCE</p>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "baseline",
                              marginBottom: 20,
                            }}
                          >
                            <h1>3.9K</h1>
                            <h3>ATK</h3>
                          </div>
                          <ButtonArea>
                            <TransactionBtn status={!buttonStatus}>
                              Transfer
                            </TransactionBtn>
                            <TransactionBtn status={buttonStatus}>
                              Buy Now
                            </TransactionBtn>
                          </ButtonArea>
                        </BalanaceArea>
                        <RevenueArea>
                          <h2>Land Revenue Split</h2>
                          <RevenueItemArea>
                            <div style={{ marginRight: 20 }}>
                              <p>COMMON LAND</p>
                              <p style={{ color: "#525151", marginTop: 5 }}>
                                0
                              </p>
                            </div>
                            <div style={{ marginRight: 20 }}>
                              <p>GRAND LAND</p>
                              <p style={{ color: "#525151", marginTop: 5 }}>
                                0
                              </p>
                            </div>
                            <div style={{ marginRight: 20 }}>
                              <p>ICONIC LAND</p>
                              <p style={{ color: "#525151", marginTop: 5 }}>
                                0
                              </p>
                            </div>
                          </RevenueItemArea>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "end",
                              marginTop: 20,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "baseline",
                              }}
                            >
                              <p>PENDING LAYOUT</p>
                              <h6
                                style={{
                                  fontFamily: "Oswald-Regular",
                                  margin: "5px 0",
                                }}
                              >
                                123,456,789 ATK
                              </h6>
                            </div>
                            <WithDrawBtn>Withdraw To Balance</WithDrawBtn>
                          </div>
                        </RevenueArea>
                      </div>
                    ) : (
                      <div>
                        <div style={{ padding: "2.5em 1.5em" }}>
                          <AddressInfoArea>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              <img
                                onClick={() => setViewFlag(true)}
                                src={transactionBack}
                                style={{
                                  width: 20,
                                  height: 20,
                                  marginRight: 20,
                                }}
                                alt=""
                              />
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <h6 style={{ margin: 0 }}>Wallet Activity</h6>
                              </div>
                            </div>
                          </AddressInfoArea>
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              flexDirection: "column",
                              marginTop: "1.5em",
                            }}
                          >
                            {TransactionList.map((item, index) => {
                              return (
                                <ActivityItemArea key={index}>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      marginBottom: 5,
                                    }}
                                  >
                                    <TransactionStatus>
                                      {item.transactionType}
                                    </TransactionStatus>
                                    <TransactionStatus
                                      style={{
                                        color:
                                          item.transactionStatus == "Pending"
                                            ? "#FA8700"
                                            : "#757474",
                                      }}
                                    >
                                      {item.transactionStatus}
                                    </TransactionStatus>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                  >
                                    <ActivityItem>
                                      <NFTItemArea
                                        style={{ width: "fit-content" }}
                                      >
                                        <TransactionImage
                                          src={
                                            item.transactionStatus == "Complete"
                                              ? listedImage
                                              : whiteTransactedImage
                                          }
                                          alt="image"
                                          style={{ marginTop: "0.3em" }}
                                        />
                                        <NameArea>
                                          <NftPrice
                                            style={{
                                              marginTop:
                                                item.transactionType ==
                                                "Deposit"
                                                  ? "0.5em !important"
                                                  : "0",
                                              marginRight: "1em",
                                            }}
                                          >
                                            0x8637....34AA
                                          </NftPrice>
                                          {item.transactionStatus ==
                                          "Pending" ? (
                                            <div
                                              style={{
                                                display: "flex",
                                                flexDirection: "row",
                                              }}
                                            >
                                              <TransImage
                                                src={transImage}
                                                alt=""
                                              />
                                              <NftPrice
                                                style={{ marginTop: "0.3em" }}
                                              >
                                                {item.receivedAdd}
                                              </NftPrice>
                                            </div>
                                          ) : (
                                            <div
                                              style={{
                                                display: "flex",
                                                flexDirection: "row",
                                              }}
                                            >
                                              <NftPrice
                                                style={{
                                                  marginTop: "0.3em",
                                                  color:
                                                    item.transactionType ==
                                                    "Deposit"
                                                      ? "#2ED320"
                                                      : "#ED2121",
                                                  fontFamily: "Oswald-SemiBold",
                                                }}
                                              >
                                                {item.receivedAdd} AKT
                                              </NftPrice>
                                            </div>
                                          )}
                                        </NameArea>
                                      </NFTItemArea>
                                      <BlockTimeText>
                                        Aug 5, 2022 01:33:39 PM UST
                                      </BlockTimeText>
                                    </ActivityItem>
                                  </div>
                                </ActivityItemArea>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                }
              >
                <SocialIcon
                  src={menuStatus == 2 ? activeMailIcon : mailIcon}
                  onClick={handleTransTooltipOpen}
                />
              </HtmlTooltip>
            </div>
          </ClickAwayListener>
          <SocialIcon
            onClick={() => {
              // setMenuStatus(3);
              history.push(`/profile`);
            }}
            src={menuStatus == 3 ? activeAccountIcon : accountIcon}
          />
        </div>
      ) : (
        <ConnectButton
          onClick={() => {
            props.connect();
          }}
        >
          <img src={mailIcon} alt="" />
          Connect Wallet
        </ConnectButton>
      )}
    </SocialContainer>
  );
};

export default SocialLinkArea;
