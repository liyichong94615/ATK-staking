import { useState, useEffect } from "react";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import { useLocation, useHistory } from "react-router-dom";

import blackSearchImage from "../../assets/images/blackSearchImage.png";
import placeholderImage from "../../assets/images/placeholderImage.png";
import arrowDown1 from "../../assets/images/arrow-down1.png";
import filterUp from "../../assets/images/filterUp.png";
import checkImage from "../../assets/images/checkImage.png";
import close from "../../assets/images/close.png";
import checked from "../../assets/images/checked.png";
import unchecked from "../../assets/images/unchecked.png";
import homeIcon from "../../assets/images/homeIcon.png";
import catengoryFilterImage from "../../assets/images/catengoryFilterImage.png";
import dCatengoryFilterImage from "../../assets/images/dCatengoryFilterImage.png";
import emptyNftBI from "../../assets/images/emptyNftBI.png";

interface searchProps {
  status: boolean;
}

const ItemContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  @media (max-width: 600px) {
    margin-top: 0px;
  }
`;
const SearchArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2em;
  padding-bottom: 3em;
  border-bottom: 1px solid #252728;
  @media screen and (max-width: 700px) {
    padding-bottom: 1em;
  }
`;
const FilterArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 3em;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin-top: 1em;
  }
`;
const SelectArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 700px) {
    margin-top: 10px;
  }
`;
const CategoryName = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-family: "Oswald-Light";
  font-size: 16px;
  letter-spacing: 1px;
  @media screen and (max-width: 700px) {
    font-size: 12px;
  }
`;
const DropCategoryName = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-family: "Oswald-Light";
  font-size: 16px;
  letter-spacing: 1px;
  @media screen and (max-width: 700px) {
    font-size: 12px;
  }
`;
const ArrowImage = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 10px;
`;
const FilterImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
const SearchBarArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  max-width: 497px;
  width: 100%;
  height: 48px;
  border-radius: 24px;
  margin-left: 20px;
  @media screen and (max-width: 700px) {
    margin-left: 0px;
    width: 65%;
    height: 40px;
  }
`;
const TopTitle = styled.div`
  color: white;
  font-family: "Oswald-Regular";
  font-size: 38px;
  border-radius: 24px;
  @media screen and (max-width: 750px) {
    font-size: 20px;
  }
`;
const SearchImage = styled.img`
  width: 24px;
  height: 24px;
  @media screen and (max-width: 700px) {
    width: 20px;
    height: 20px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const SearchInput = styled.input<searchProps>`
  outline: none;
  border-width: 0;
  color: #252728;
  font-family: "Oswald-Regular";
  font-size: 16px;
  width: 80%;
  width: ${(props) => (props.status ? "80%" : "85%")};
  margin-left: 10px;
  @media screen and (max-width: 750px) {
    width: ${(props) => (props.status ? "70%" : "75%")};
    font-size: 14px;
  }
`;
const ItemListArea = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: space-between;
  margin-top: 3em;
  @media screen and (max-width: 700px) {
    margin-top: 1em;
  }
`;
const DescriptionArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: black;
  margin-bottom: 40px;
  padding-left: 15px;
  @media screen and (max-width: 700px) {
    margin-bottom: 20px;
  }
`;
const ItemArea = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  position: relative;
  /* margin: 10px 10px; */
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
  @media screen and (max-width: 700px) {
    width: 45%;
    margin: 0;
    /* margin: -10px 2.5%; */
  }
`;
const CategoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #929393;
  background-color: #3b3d3e;
  position: absolute;
  right: 15px;
  top: 15px;
  padding: 3px 10px;
  border-radius: 30px;
  font-family: "Oswald-Light";
  font-size: 14px;
  @media screen and (max-width: 700px) {
    right: 10px;
    top: 10px;
    font-size: 10px;
  }
`;
const NftImage = styled.img`
  width: 280px;
  height: 280px;
  align-self: center;
  border-bottom: 2px solid #ed2185;
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.p`
  font-size: 18px;
  text-align: start;
  font-family: "Oswald-Light";
  color: white;
  @media screen and (max-width: 560px) {
    font-size: 12px;
    display: flex;
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

const DropDownContainer = styled.div`
  width: 100%;
  padding: 0em 1em;
`;
const AvailabilityItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-family: "Oswald-Regular";
  line-height: 2;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const PriceItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-family: "Oswald-Regular";
  line-height: 2;
  justify-content: space-between;
  margin-top: 0.5em;
`;
const DoneButtonArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 2em;
  padding-top: 2em;
  border-top: 1px solid #191717;
  align-items: flex-end;
  margin-bottom: 0.5em;
`;
const DoneButton = styled.button`
  font-size: 16px;
  font-family: "Oswald-Bold";
  color: #ed2185;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;
const PriceInput = styled.input`
  text-align: center;
  outline: none;
  border: 1px solid #191717;
  border-radius: 5px;
  width: 45%;
  height: 48px;
  font-size: 16px;
  font-family: "Oswald-Regular";
`;
const CheckImage = styled.img`
  width: 24px;
  height: 24px;
`;
const ClothesDropArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const SelectItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 5px 0;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const CheckArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const CheckTitle = styled.p`
  font-size: 16px;
  font-family: "Oswald-Bold";
  margin: 0;
  margin-left: 12px;
  color: #191717;
`;
const ListedCount = styled.p`
  font-size: 14px;
  font-family: "Oswald-Light";
  margin: 0;
  margin-left: 12px;
  color: #191717;
`;
const CategoryImage = styled.img`
  width: 40px;
  height: 40px;
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
const HomeImage = styled.img`
  width: 16px;
  height: 16px;
`;
const LocationText = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.3);
  font-family: "Oswald-Regular";
  margin: 0;
  line-height: 1.1;
`;
const EmptyArea = styled.div`
  width: 100%;
  height: 524px;
  background-color: #252728;
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const EmptyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -70px;
`;
const ResetButton = styled.div`
  font-size: 16px;
  font-family: "Oswald-Bold";
  color: #ed2185;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const EmptyImage = styled.img`
  width: 240px;
  height: 240px;
`;
const Items = [
  {
    id: 1,
    price: "2300",
    name: "Common land #2673",
    image: placeholderImage,
    sale: true,
  },
  {
    id: 2,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
  },
  {
    id: 3,
    price: "2300",
    name: "Common #2673",
    image: placeholderImage,
    sale: true,
  },
  {
    id: 4,
    price: "2300",
    name: "Plot land #2673",
    image: placeholderImage,
    sale: true,
  },
  {
    id: 5,
    price: "2300",
    name: "land #2673",
    image: placeholderImage,
    sale: true,
  },
  {
    id: 6,
    price: "2300",
    name: "land #2673",
    image: placeholderImage,
    sale: true,
  },
  {
    id: 7,
    price: "2300",
    name: "Common Plot #2673",
    image: placeholderImage,
    sale: false,
  },
  {
    id: 8,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
  },
  {
    id: 9,
    price: "2300",
    name: "Common #2673",
    image: placeholderImage,
    sale: true,
  },
  {
    id: 10,
    price: "2300",
    name: "Common Plot #2673",
    image: placeholderImage,
    sale: true,
  },
  {
    id: 11,
    price: "2300",
    name: "Commonland #2673",
    image: placeholderImage,
    sale: true,
  },
  {
    id: 12,
    price: "2300",
    name: "Commonand #2673",
    image: placeholderImage,
    sale: true,
  },
];

const eventsList = [
  {
    id: 1,
    imageUrl: catengoryFilterImage,
    listCount: "12",
    name: "Scrap Guilds",
  },
  { id: 2, imageUrl: catengoryFilterImage, listCount: "42", name: "AW Arcade" },
  {
    id: 3,
    imageUrl: dCatengoryFilterImage,
    listCount: "Coming Soon",
    name: "Spell Cartel",
  },
  {
    id: 4,
    imageUrl: catengoryFilterImage,
    listCount: "1200",
    name: "PFP Avatars",
  },
  {
    id: 5,
    imageUrl: catengoryFilterImage,
    listCount: "800",
    name: "Land Plots",
  },
  {
    id: 6,
    imageUrl: catengoryFilterImage,
    listCount: "2300",
    name: "Art & Love",
  },
];
const ListedItemList = ["Recent", "Oldest", "Low to High", "High to Low"];

function ListingsItemList() {
  let history = useHistory();
  const [listValue, setListValue] = useState("Recent");
  const [listIndex, setListIndex] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minPrice, setMinPrice] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [seletectEvent, setSeletectEvent] = useState<string[]>([]);
  const [clothesDrop, setClothesDrop] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [nftItemList, setNftItemList] = useState<any[]>([]);

  useEffect(() => {
    setNftItemList(Items);
  }, []);

  const chooseListItem = (item: string, index: number) => {
    setListValue(item);
    setListIndex(index);
  };

  const searchFun = (item: string) => {
    let tempArr = [];
    for (let i = 0; i < Items.length; i++) {
      const element = Items[i];
      if (element.name.toLowerCase().indexOf(item.toLowerCase()) > -1) {
        tempArr.push(element);
      }
    }
    setNftItemList(tempArr);
  };

  return (
    <ItemContainer>
      <LocationArea>
        <HomeImage src={homeIcon} alt="homeImage" />
        <LocationText>
          <span style={{ color: "white", margin: "0 5px" }}> / </span> All
          Listings
        </LocationText>
      </LocationArea>
      <SearchArea>
        <TopTitle>All Listings</TopTitle>
        <SearchBarArea>
          <SearchImage src={blackSearchImage} alt="blackSearchImage" />
          <SearchInput
            status={searchValue != ""}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              searchFun(e.target.value);
            }}
            placeholder="Search NFT’s"
          />
          {searchValue != "" && (
            <SearchImage
              onClick={() => {
                setSearchValue("");
                setNftItemList(Items);
              }}
              src={close}
              alt="blackSearchImage"
            />
          )}
        </SearchBarArea>
      </SearchArea>
      <FilterArea>
        <SelectArea>
          <Dropdown style={{ margin: "0 5px" }}>
            <Dropdown.Toggle
              style={{ backgroundColor: "#252728", borderWidth: 0 }}
            >
              <DropCategoryName>
                Price:{" "}
                <span style={{ color: "white" }}>
                  ${minPrice} - ${maxPrice}
                </span>
              </DropCategoryName>
              <ArrowImage src={arrowDown1} alt="arrow" />
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ width: 274 }}>
              <DropDownContainer>
                <PriceItem>
                  <p style={{ margin: 0, padding: 0, color: "#191717" }}>
                    Price Range
                  </p>
                  <p
                    style={{
                      margin: 0,
                      padding: 0,
                      color: "black",
                      fontFamily: "Oswald-Bold",
                    }}
                  >
                    ATK
                  </p>
                </PriceItem>
                <PriceItem>
                  <PriceInput
                    value={minPrice}
                    placeholder="Min"
                    type="number"
                    onChange={(e) => {
                      setMinPrice(parseFloat(e.target.value));
                    }}
                  />
                  <PriceInput
                    value={maxPrice}
                    placeholder="Max"
                    type="number"
                    onChange={(e) => {
                      setMaxPrice(parseFloat(e.target.value));
                    }}
                  />
                </PriceItem>
                <DoneButtonArea>
                  <Dropdown.Item
                    style={{ margin: 0, padding: 0, width: 45, height: 20 }}
                  >
                    <DoneButton>Done</DoneButton>
                  </Dropdown.Item>
                </DoneButtonArea>
              </DropDownContainer>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown style={{ margin: "0 5px" }}>
            <Dropdown.Toggle
              style={{ backgroundColor: "#252728", borderWidth: 0 }}
            >
              <DropCategoryName>
                Categories:{" "}
                <span style={{ color: "white" }}>Land Plots +2</span>
              </DropCategoryName>
              <ArrowImage src={arrowDown1} alt="arrow" />
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ width: 274 }}>
              <DropDownContainer>
                <div>
                  <ClothesDropArea>
                    <p
                      style={{
                        padding: 0,
                        color: "#191717",
                        fontSize: 16,
                        fontFamily: "Oswald-Regular",
                        margin: "10px 0",
                      }}
                    >
                      Categories
                    </p>
                    {eventsList.map((item, index) => {
                      return (
                        <SelectItem
                          key={index}
                          onClick={() => {
                            var tempArr: string[] = [...seletectEvent];
                            const index = tempArr.indexOf(item.name);
                            if (index > -1) {
                              // only splice array when item is found
                              tempArr.splice(index, 1); // 2nd parameter means remove one item only
                            } else {
                              tempArr.push(item.name);
                            }
                            setSeletectEvent(tempArr);
                          }}
                        >
                          <CheckArea>
                            <CategoryImage src={item.imageUrl} alt="" />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                              }}
                            >
                              <CheckTitle>{item.name}</CheckTitle>
                              <ListedCount>
                                {item.listCount}{" "}
                                {item.listCount != "Coming Soon" && "Listed"}
                              </ListedCount>
                            </div>
                          </CheckArea>
                          <CheckImage
                            src={
                              seletectEvent.includes(item.name)
                                ? checked
                                : unchecked
                            }
                          />
                        </SelectItem>
                      );
                    })}
                  </ClothesDropArea>
                </div>
                <DoneButtonArea style={{ borderWidth: 0, marginTop: 0 }}>
                  <DoneButton style={{ color: "gray" }}>Clear All</DoneButton>
                  <Dropdown.Item
                    style={{ margin: 0, padding: 0, width: 45, height: 20 }}
                  >
                    <DoneButton>Done</DoneButton>
                  </Dropdown.Item>
                </DoneButtonArea>
              </DropDownContainer>
            </Dropdown.Menu>
          </Dropdown>
        </SelectArea>
        <SelectArea>
          <CategoryName style={{ marginRight: 30 }}>3987 Items</CategoryName>
          <Dropdown style={{ margin: "0 5px" }}>
            <Dropdown.Toggle
              style={{ backgroundColor: "#252728", borderWidth: 0 }}
              id="dropdown-variants-Danger"
            >
              <FilterImage src={filterUp} alt="" />
              <DropCategoryName>
                Listed: <span style={{ color: "white" }}>{listValue}</span>
              </DropCategoryName>
              <ArrowImage src={arrowDown1} alt="arrow" />
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: 274 }}>
              {ListedItemList.map((item, index) => {
                return (
                  <Dropdown.Item key={index}>
                    <AvailabilityItem
                      onClick={() => chooseListItem(item, index)}
                    >
                      {item}
                      {listIndex == index && (
                        <CheckImage src={checkImage} alt="" />
                      )}
                    </AvailabilityItem>
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </SelectArea>
      </FilterArea>
      {nftItemList.length > 0 ? (
        <ItemListArea>
          {nftItemList.map((item, index) => {
            return (
              <ItemArea
                key={index}
                onClick={() => {
                  history.push(`/listings/${item.id}`);
                }}
              >
                <NftImage
                  style={{ borderWidth: item.sale ? "2px" : "0px" }}
                  src={item.image}
                  alt=""
                />
                <CategoryInfo>Art & Love</CategoryInfo>
                <DescriptionArea
                  style={{ backgroundColor: item.sale ? "black" : "#252728" }}
                >
                  <Title style={{ color: item.sale ? "white" : "#666868" }}>
                    {item.name}
                  </Title>
                  <Amount style={{ color: item.sale ? "white" : "#666868" }}>
                    {item.price} ATK
                  </Amount>
                </DescriptionArea>
              </ItemArea>
            );
          })}
        </ItemListArea>
      ) : (
        <EmptyArea>
          <EmptyImage src={emptyNftBI} alt="" />
          <EmptyContent>
            <p
              style={{
                fontSize: "24px",
                fontFamily: "Oswald-Regular",
                color: "white",
                marginBottom: 0,
              }}
            >
              No Listings Found!
            </p>
            <p
              style={{
                fontSize: "16px",
                fontFamily: "Oswald-Light",
                color: "white",
                marginTop: 0,
              }}
            >
              Try Removing some filters.
            </p>
            <ResetButton
              onClick={() => {
                setNftItemList(Items);
              }}
            >
              Reset Filters
            </ResetButton>
          </EmptyContent>
        </EmptyArea>
      )}
    </ItemContainer>
  );
}

export default ListingsItemList;
