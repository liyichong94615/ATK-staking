import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import homeIcon from "../../assets/images/homeIcon.png";
import categoryImage from "../../assets/images/categoryImage.png";
import Dialog from "@material-ui/core/Dialog";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import category1 from "../../assets/images/category1.png";
import category2 from "../../assets/images/category2.png";
import category3 from "../../assets/images/category3.png";
import category4 from "../../assets/images/category4.png";
import category5 from "../../assets/images/category5.png";
import category6 from "../../assets/images/category6.png";
import category7 from "../../assets/images/category7.png";
import category8 from "../../assets/images/category8.png";
import category9 from "../../assets/images/category9.png";
import deepImage from "../../assets/images/deepImage.png";
import deepImage1 from "../../assets/images/deepImage1.png";
import landingBgI from "../../assets/images/landingBgI.png";
import messageImage from "../../assets/images/messageImage.png";
import warningIcon from "../../assets/images/warningIcon.png";
import placeholderImage from "../../assets/images/placeholderImage.png";
import { Container } from "@material-ui/core";

const Items = [
  {
    id: 1,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
    new: true,
  },
  {
    id: 2,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
    new: false,
  },
  {
    id: 3,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
    new: false,
  },
  {
    id: 7,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: false,
    new: false,
  },
  {
    id: 4,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
    new: false,
  },
  {
    id: 5,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
    new: false,
  },
  {
    id: 6,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
    new: false,
  },
  {
    id: 8,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
    new: false,
  },
  {
    id: 9,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
    new: false,
  },
  {
    id: 10,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
    new: false,
  },
  {
    id: 11,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
    new: false,
  },
  {
    id: 12,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
    new: false,
  },
];

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
  background-image: url(/images/landingbagroundImage.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  padding: 1em 2.5em;
  backdrop-filter: blur(4px);
  @media screen and (max-width: 600px) {
    padding: 1em 1.5em;
    background-color: #252728;
    background-image: none;
  }
`;
const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const SendMessageContainer = styled.div`
  width: 730px;
  height: 200px;
  background-image: url(/images/sendAreaBgi.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  padding: 2em;
  z-index: 999;
  & p {
    font-family: "Oswald-Regular";
    color: white;
    font-size: 24px;
    margin: 0;
  }
  & div {
    display: flex;
    flex-direction: row;
    width: 356px;
    height: 48px;
    background-color: white;
    border-radius: 50px;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
  }
  & div input {
    width: 100%;
    outline: none;
    border-width: 0px;
    margin-left: 10px;
    font-size: 16px;
    font-family: Oswald-Regular;
  }
  & div img {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 735px) {
    margin-top: 10px;
    width: 100%;
    & p {
      font-size: 18px;
    }
    & div {
      width: 100%;
      height: 40px;
    }
    & div img {
      width: 30px;
      height: 30px;
    }
  }
`;
const CategoryContentArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 50px;
  border-bottom: 1px solid #252728;
`;
const SliderArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const SliderAreaTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;
const SliderTitle = styled.p`
  font-family: Oswald-Medium;
  font-size: 20px;
  color: white;
  z-index: 999;
  text-transform: uppercase;
  margin-left: 25px;
  @media screen and (max-width: 600px) {
    margin-left: 0px;
  }
`;
const ExplorerBtn = styled.p`
  font-family: Oswald-Regular;
  font-size: 16px;
  color: #ed2185;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;
const MarkertArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border-bottom: 1px solid #252728;
  margin-top: 100px;
`;
const DeepImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 509px;
  height: 263px;
  @media screen and (max-width: 600px) {
    width: 250px;
    height: 132px;
  }
`;
const DeepImage1 = styled.img`
  position: absolute;
  bottom: -100px;
  left: 0;
  width: 104px;
  height: 406px;
  @media screen and (max-width: 600px) {
    width: 52px;
    height: 203px;
  }
`;
const CategoryContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 1em 2.5em;
`;
const TopBannerArea = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0em 2.5em;
  padding-top: 0;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  backdrop-filter: blur(4px);
`;
const ViewBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ed2185;
  color: white;
  max-width: 480px;
  width: 80%;
  height: 60px;
  font-family: "Oswald-Regular";
  font-size: 20px;
  border-radius: 5px;
  margin-bottom: 10%;
  z-index: 999;
  @media screen and (max-width: 600px) {
    font-size: 16px;
    height: 45px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const TopBannerTitle = styled.p`
  font-size: 84px;
  color: white;
  font-family: "Oswald-Light";
  text-transform: uppercase;
  margin: 50px 0;
  z-index: 999;
  @media screen and (max-width: 790px) {
    font-size: 40px;
  }
`;
// Material ui style
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  textCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderLeft: "4px solid #ED2185",
    maxHeight: "304px",
    margin: "1em 0",
    paddingLeft: "1.5em !important",
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
const Title2 = styled.p`
  font-size: 124px;
  color: white;
  font-family: "Oswald-Bold";
  margin: 0;
  line-height: 1.1;
  @media screen and (max-width: 1038px) {
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
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;
const CategoryText = styled.h1`
  font-size: 30px;
  color: white;
  font-family: "Oswald-SemiBold";
  margin: 0;
  /* @media screen and (max-width: 600px) {
    font-size: 14px;
  } */
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
const RightTopArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-left: 25%;
  @media screen and (max-width: 600px) {
    padding-left: 0%;
    margin-top: 0px;
  }
`;
const RightBottomArea = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  width: 100%;
  margin-top: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #191717;
  width: 292px;
  height: 98px;
  border-radius: 5px;
  padding-left: 25px;
  text-transform: uppercase;
  @media screen and (max-width: 600px) {
  }
  & p {
    color: #a3a2a2;
    font-family: Oswald-Regular;
    font-size: 20px;
    margin: 0;
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
  justify-content: space-around;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    margin-top: 1em;
    justify-content: space-around;
  }
`;
const CategoryArea = styled.div`
  position: relative;
  width: 225px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  margin: 10px 10px;
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
  width: 225px;
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
const DescriptionArea1 = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  background-color: black;
  margin-bottom: 40px;
  padding-left: 15px;
  position: relative;
  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
    width: 200px;
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
  font-size: 38px;
  text-align: start;
  font-family: "Oswald-Regular";
  color: white;
  font-weight: 600;
  letter-spacing: 2px;
  margin-top: 1em;
  margin-bottom: 10px;
  padding-top: 50px;
  border-top: 1px solid #252728;
  @media screen and (max-width: 560px) {
    font-size: 20px;
    display: flex;
    margin-bottom: 0px;
    padding-top: 20px;
  }
`;
const BuyBtn = styled.div`
  width: 208px;
  height: 60px;
  background-color: transparent;
  border: 1px solid #ed2185;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #ed2185;
  font-size: 20px;
  margin-right: 20px;
  font-family: "Oswald-Regular";
  @media screen and (max-width: 560px) {
    font-size: 16px;
  }
`;
const ItemArea = styled.div`
  width: 280px !important;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  margin-left: 7em;
  position: relative;
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
  @media screen and (max-width: 700px) {
    width: 200px !important;
    margin-left: 50px;
  }
`;
const NftImage = styled.img`
  width: 280px;
  height: 280px;
  align-self: center;
  border-bottom: 2px solid #ed2185;
  @media screen and (max-width: 600px) {
    width: 200px;
    height: 200px;
  }
`;
const Amount = styled.p`
  font-size: 30px;
  text-align: start;
  font-family: "Oswald-Bold";
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 560px) {
    font-size: 12px;
    display: flex;
  }
`;
const SoldNotice = styled.div`
  color: black;
  background-color: #b9fa00;
  padding: 3px 12px;
  border-radius: 30px;
  font-family: "Oswald-SemiBold";
  font-size: 14px;
  margin-left: 10px;
  position: absolute;
  bottom: 15px;
  right: 20px;
  @media screen and (max-width: 700px) {
    font-size: 10px;
    bottom: 10px;
  }
`;
const CategoryInfo = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 20px;
  top: 15px;
  @media screen and (max-width: 700px) {
    right: 10px;
    top: 10px;
  }
`;
const CategoryInfoItem = styled.div`
  color: #929393;
  background-color: #3b3d3e;
  padding: 3px 12px;
  border-radius: 30px;
  font-family: "Oswald-Light";
  font-size: 14px;
  margin-left: 10px;
  @media screen and (max-width: 700px) {
    font-size: 10px;
  }
`;

interface Props {}

const categoryItemList = [
  {
    id: 1,
    image: category1,
    title: "Scrap Guilds",
    seeFlag: false,
    commingSoon: false,
    new: true,
  },
  {
    id: 2,
    image: category2,
    title: "Art And Love",
    seeFlag: false,
    commingSoon: false,
    new: false,
  },
  {
    id: 3,
    image: category3,
    title: "SLand Plots",
    seeFlag: false,
    commingSoon: false,
    new: false,
  },
  {
    id: 4,
    image: category4,
    title: "Attack Wagon Arcade",
    seeFlag: false,
    commingSoon: false,
    new: false,
  },
  {
    id: 5,
    image: category5,
    title: "PFP Avatars",
    seeFlag: false,
    commingSoon: false,
    new: false,
  },
  {
    id: 6,
    image: category6,
    title: "Spell Cartel",
    seeFlag: false,
    commingSoon: false,
    new: false,
  },
  {
    id: 7,
    image: category7,
    title: "Scrap Guilds",
    seeFlag: false,
    commingSoon: false,
    new: false,
  },
  {
    id: 8,
    image: category8,
    title: "Scrap Guilds",
    seeFlag: false,
    commingSoon: false,
    new: false,
  },
  {
    id: 9,
    image: category1,
    title: "Scrap Guilds",
    seeFlag: false,
    commingSoon: false,
    new: false,
  },
  {
    id: 10,
    image: category2,
    title: "Scrap Guilds",
    seeFlag: false,
    commingSoon: false,
    new: false,
  },
];

const LandingTopContainer: React.FC<Props> = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [categoryFlag, setCategoryFlag] = useState(false);
  const classes = useStyles();
  const categoryClose = () => {
    setCategoryFlag(false);
  };
  return (
    <MainContainer>
      <TopBannerArea>
        <img
          src={landingBgI}
          alt=""
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
        <TopBannerTitle>
          Buy & Sell
          <br />{" "}
          <span style={{ fontFamily: "Oswald-Medium" }}>Attack Wagon</span>{" "}
          NFT’s
        </TopBannerTitle>
        <ViewBtn>View All Listings</ViewBtn>
      </TopBannerArea>
      <Container maxWidth="lg">
        <BannerContainer>
          <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} md={7} className={classes.textCont}>
              <Title1>ATK PRICE</Title1>
              <Title2>$0.003284</Title2>
              <div
                style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
              >
                <BuyBtn>Buy on Gate.io</BuyBtn>
                <BuyBtn>Buy on Quickswap</BuyBtn>
              </div>
            </Grid>
            <Grid item xs={12} md={5} className={classes.imgCont}>
              <RightTopArea>
                <RightBottomArea onClick={() => setCategoryFlag(true)}>
                  <p>Total NFT’s</p>
                  <CategoryText>14,000</CategoryText>
                </RightBottomArea>
                <RightBottomArea onClick={() => setCategoryFlag(true)}>
                  <p>Market Volume</p>
                  <CategoryText>
                    123,456,789{" "}
                    <span style={{ fontFamily: "Oswald-ExtraLight" }}>ATK</span>
                  </CategoryText>
                </RightBottomArea>
                <RightBottomArea onClick={() => setCategoryFlag(true)}>
                  <p>Land owner Revenue</p>
                  <CategoryText>
                    123,456,789{" "}
                    <span style={{ fontFamily: "Oswald-ExtraLight" }}>ATK</span>
                  </CategoryText>
                  <img
                    src={warningIcon}
                    alt=""
                    style={{
                      width: 16,
                      height: 16,
                      position: "absolute",
                      right: 20,
                      top: 20,
                    }}
                  />
                </RightBottomArea>
              </RightTopArea>
            </Grid>
          </Grid>
        </BannerContainer>
        <CategoryContentArea>
          <DeepImage src={deepImage} alt="" />
          <DeepImage1 src={deepImage1} alt="" />
          <ModalTitle>Categories</ModalTitle>
          <CategoryListArea>
            {categoryItemList.map((item, index) => {
              return (
                <CategoryArea key={index} onClick={() => {}}>
                  <CategoryListImage src={item.image} alt="" />
                  {item.commingSoon && (
                    <CommingArea>
                      <ComingDes>Coming Soon</ComingDes>
                    </CommingArea>
                  )}
                  {!item.seeFlag && (
                    <DescriptionArea>
                      <Title>{item.title}</Title>
                    </DescriptionArea>
                  )}
                </CategoryArea>
              );
            })}
          </CategoryListArea>
          <MainContent>
            <SendMessageContainer>
              <p>
                Join our Mailing list for the latest on upcoming
                <br />
                drops & releases.
              </p>
              <div>
                <input placeholder="Enter Email Address" />
                <img src={messageImage} alt="" />
              </div>
            </SendMessageContainer>
          </MainContent>
        </CategoryContentArea>
      </Container>
      <SliderArea>
        <Container>
          <SliderAreaTop>
            <SliderTitle>MarketPlace Activity</SliderTitle>
            <ExplorerBtn>Explore All</ExplorerBtn>
          </SliderAreaTop>
        </Container>
        <Slider {...settings}>
          {Items.map((item, index) => {
            return (
              <ItemArea
                key={index}
                onClick={() => {
                  console.log("dsdfsdf");
                }}
              >
                <NftImage
                  style={{ borderWidth: item.sale ? "2px" : "0px" }}
                  src={item.image}
                  alt=""
                />
                <CategoryInfo>
                  <CategoryInfoItem>Art & Love</CategoryInfoItem>
                  {item.new && (
                    <CategoryInfoItem
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      New
                    </CategoryInfoItem>
                  )}
                </CategoryInfo>
                <DescriptionArea1
                  style={{ backgroundColor: item.sale ? "black" : "#252728" }}
                >
                  <Title style={{ color: item.sale ? "white" : "#666868" }}>
                    {item.name}
                  </Title>
                  <Amount style={{ color: item.sale ? "white" : "#666868" }}>
                    {item.price} ATK
                  </Amount>
                  {!item.sale && <SoldNotice>Sold</SoldNotice>}
                </DescriptionArea1>
              </ItemArea>
            );
          })}
        </Slider>
      </SliderArea>
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={categoryFlag}
        onClose={categoryClose}
      ></Dialog>
    </MainContainer>
  );
};

export default LandingTopContainer;
