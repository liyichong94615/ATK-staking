import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import homeIcon from '../../assets/images/homeIcon.png'
import categoryImage from '../../assets/images/categoryImage.png'
import Dialog from "@material-ui/core/Dialog";

import category1 from '../../assets/images/category1.png'
import category2 from '../../assets/images/category2.png'
import category3 from '../../assets/images/category3.png'
import category4 from '../../assets/images/category4.png'
import category5 from '../../assets/images/category5.png'
import category6 from '../../assets/images/category6.png'
import category7 from '../../assets/images/category7.png'
import category8 from '../../assets/images/category8.png'
import category9 from '../../assets/images/category9.png'

const MainContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 600px) {
        margin-top: 0px;
    }
`
const LocationArea = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 600px) {
        margin-top: 0px;
    }
`
const BannerContainer = styled.div`
    width: 100%;
    background-image: url(/images/TopBackground.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 10px;
    padding: 1em 2.5em;
    backdrop-filter: blur(4px);
    @media screen and (max-width: 600px) {
        padding: 1em 1.5em;
        background-color: #252728;
        background-image: none;
    }
`
// Material ui style
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    textCont: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderLeft: '4px solid #ED2185',
        maxHeight: '304px',
        margin: '1em 0',
        paddingLeft: '1.5em !important'
    },
    imgCont: {
        display: 'flex',
        flexDirection: 'column'
    },
}));

// styled-components 
const Title1 = styled.p`
    font-size: 74px;
    color: white;
    font-family:'Oswald-Light';
    margin:0;
    line-height: 1.1;
    @media screen and (max-width: 600px) {
        font-size: 40px;
  }
`
const Title2 = styled.p`
    font-size: 124px;
    color: white;
    font-family:'Oswald-Bold';
    margin:0;
    line-height: 1.1;
    @media screen and (max-width: 600px) {
        font-size: 65px;
    }
`
const CountValue = styled.p`
    font-size: 76px;
    color: #ED2185;
    font-family:'Oswald-Bold';
    margin:0;
    margin-bottom: 10px;
    line-height: 1.1;
    @media screen and (max-width: 600px) {
        font-size: 40px;
    }
`
const UnitText = styled.p`
    font-size: 38px;
    color: white;
    font-family:'Oswald-Regular';
    margin:0;
    line-height: 1.1;
    letter-spacing: 4px;
    @media screen and (max-width: 600px) {
        font-size: 24px;
    }
`
const CategoryText = styled.p`
    font-size: 16px;
    color: white;
    font-family:'Oswald-Regular';
    margin:0;
    margin-left: 10px;
    @media screen and (max-width: 600px) {
        font-size: 14px;
    }
`
const LocationText = styled.p`
    font-size: 14px;
    color: rgba(255,255,255,0.3);
    font-family:'Oswald-Regular';
    margin:0;
    line-height: 1.1;
`
const Description = styled.p`
    font-size: 24px;
    color: rgba(255,255,255,0.7);
    font-family:'Oswald-Light';
    line-height: 1.5;
    max-width: 550px;
    @media screen and (max-width: 600px) {
        font-size: 14px;
        max-width: 100%;
        width: 100%;
  }
`
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    @media (max-width: 550px) {
        flex-direction: column;
        align-items: center;
    }
`
const HomeImage = styled.img`
    width: 16px;
    height: 16px;
`
const List = styled.img`
    width: 24px;
    height: 24px;
`
const CountArea = styled.div`
    display: flex;
    flex-direction: column;
`
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
`
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
`
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
  position:absolute;
  bottom:0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0, 0.5);
  padding-left: 15px;
  @media screen and (max-width: 600px) {
    /* margin-bottom: 20px; */
  }
`;
const CommingArea = styled.div`
  position:absolute;
  top:0;
  right:0;
  width: 87px;
  height: 37px;
  display: flex;
  flex-direction: column;
  background-color: rgba(25,23,23,0.8);
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
  font-family: 'Oswald-Regular';
  color: white;
  @media screen and (max-width: 560px) {
    font-size: 12px;
    display: flex;
  }
`;
const ComingDes = styled.p`
  font-size: 14px;
  text-align: start;
  font-family: 'Oswald-Regular';
  color: white;
  @media screen and (max-width: 560px) {
    font-size: 10px;
    display: flex;
  }
`;
const ModalTitle = styled.p`
  font-size: 30px;
  text-align: start;
  font-family: 'Oswald-Regular';
  color: black;
  font-weight: 600;
  letter-spacing: 2px;
  margin-top: 1.5em;
  margin-bottom: 10px;
  margin-left: 40px;
  @media screen and (max-width: 560px) {
      font-size: 20px;
      display: flex;
      margin-left: 10px;
      margin-bottom: 0px;
  }
`;

interface Props {
}

const categoryItemList = [
    { id: 1, image: category1, title: 'Scrap Guilds', seeFlag: false, commingSoon: false },
    { id: 2, image: category2, title: 'Art And Love', seeFlag: false, commingSoon: false },
    { id: 3, image: category3, title: 'SLand Plots', seeFlag: false, commingSoon: false },
    { id: 4, image: category4, title: 'Attack Wagon Arcade', seeFlag: false, commingSoon: false },
    { id: 5, image: category5, title: 'PFP Avatars', seeFlag: false, commingSoon: true },
    { id: 6, image: category6, title: 'Spell Cartel', seeFlag: false, commingSoon: false },
    { id: 7, image: category7, title: 'Scrap Guilds', seeFlag: false, commingSoon: false },
    { id: 8, image: category8, title: 'Scrap Guilds', seeFlag: false, commingSoon: false },
    { id: 9, image: category9, title: 'Scrap Guilds', seeFlag: true, commingSoon: false },
]

const TopContainer: React.FC<Props> = () => {
    const [categoryFlag, setCategoryFlag] = useState(false)
    const classes = useStyles();
    const categoryClose = () => {
        setCategoryFlag(false)
    }
    return (
        <MainContainer>
            <LocationArea>
                <HomeImage src={homeIcon} alt="homeImage" />
                <LocationText><span style={{ color: 'white', margin: '0 5px' }}>  / </span> Land Plots</LocationText>
            </LocationArea>
            <BannerContainer>
                <Grid container spacing={2} className={classes.root}>
                    <Grid item xs={12} md={7} className={classes.textCont}>
                        <Title1>LAND</Title1>
                        <Title2>Plots</Title2>
                        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Description>
                    </Grid>
                    <Grid item xs={12} md={5} className={classes.imgCont}>
                        <RightTopArea>
                            <CountArea>
                                <CountValue>3.9<span style={{ fontSize: 40, fontFamily: 'Oswald-Light' }}>K</span></CountValue>
                                <UnitText>ITEMS</UnitText>
                            </CountArea>
                            <CountArea>
                                <CountValue>1.2<span style={{ fontSize: 40, fontFamily: 'Oswald-Light' }}>K</span></CountValue>
                                <UnitText>OWNERS</UnitText>
                            </CountArea>
                        </RightTopArea>
                        <RightBottomArea onClick={() => setCategoryFlag(true)}>
                            <List src={categoryImage} alt="category" />
                            <CategoryText>All Categories</CategoryText>
                        </RightBottomArea>
                    </Grid>
                </Grid>
            </BannerContainer>
            <Dialog
                fullWidth={true}
                maxWidth="md"
                open={categoryFlag}
                onClose={categoryClose}
            >
                <ModalTitle>CATEGORIES</ModalTitle>
                <CategoryListArea>
                    {categoryItemList.map((item, index) => {
                        return (
                            <CategoryArea
                                key={index}
                                onClick={() => {
                                }}
                            >
                                <CategoryListImage
                                    src={item.image}
                                    alt=""
                                />
                                {item.commingSoon && <CommingArea>
                                    <ComingDes>Coming Soon</ComingDes>
                                </CommingArea>}
                                {!item.seeFlag && <DescriptionArea>
                                    <Title>{item.title}</Title>
                                </DescriptionArea>}
                            </CategoryArea>
                        );
                    })}
                </CategoryListArea>
            </Dialog>
        </MainContainer>
    )
}

export default TopContainer
