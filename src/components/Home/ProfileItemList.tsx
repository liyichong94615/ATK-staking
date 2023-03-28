import { useState } from "react";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import { useHistory } from "react-router-dom";

import blackSearchImage from "../../assets/images/blackSearchImage.png";
import placeholderImage from "../../assets/images/placeholderImage.png";
import arrowDown1 from "../../assets/images/arrow-down1.png";
import checkImage from "../../assets/images/checkImage.png";
import close from "../../assets/images/close.png";
import editImage from "../../assets/images/editImage.png";

import { getValue, checkFlagFun } from "../../helpers/utility";

interface ButtonContainerProps {
  status: boolean;
}

const ItemContainer = styled.div`
  width: 100%;
  margin: 3em auto;
  @media (max-width: 960px) {
    margin: 3em auto;
  }
`;
const SearchArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3em;
  border-bottom: 1px solid #252728;
  @media screen and (max-width: 700px) {
    flex-direction: column;
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
const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin-bottom: 20px;
    margin-top: -10px;
  }
`;
const SelectArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SelectArea1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  display: none;
  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
  }
`;
const SelectIteam = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #252728;
  height: 40px;
  border-radius: 5px;
  padding: 0 1em;
  margin: 0 5px;
  @media screen and (max-width: 700px) {
    height: 40px;
    padding: 0 0.5em;
    margin: 0em 0.2em;
  }
  &:hover {
    cursor: pointer;
  }
`;
const PickerArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
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
    height: 40px;
  }
`;
const SearchBarArea1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  max-width: 497px;
  width: 100%;
  height: 48px;
  border-radius: 24px;
  border: 0.5px solid #191717;
  margin-top: 1em;
  @media screen and (max-width: 700px) {
    margin-left: 0px;
    height: 40px;
  }
`;
const MultiCheckArea = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 200px;
`;
const SelectButton = styled.button<ButtonContainerProps>`
  background-color: ${(props) => (props.status ? "#ED2185" : "#191717")};
  color: white;
  font-family: "Oswald-Bold";
  font-size: 20px;
  height: 48px;
  border-radius: 24px;
  padding: 0 1.3em;
  margin-right: 1em;
  text-transform: uppercase;
  border: ${(props) => (props.status ? "0px" : "1.3px")} solid #ed2185;
  color: ${(props) => (props.status ? "white" : "#ED2185")};
  @media screen and (max-width: 700px) {
    width: 50%;
    font-size: 16px;
    height: 40px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const UnselectButton = styled.button`
  background-color: #191717;
  color: #ed2185;
  font-family: "Oswald-Bold";
  font-size: 20px;
  height: 48px;
  border-radius: 24px;
  padding: 0 1.5em;
  border: 1.3px solid #ed2185;
  @media screen and (max-width: 700px) {
    width: 50%;
    font-size: 16px;
    height: 40px;
  }
  &:hover {
    cursor: pointer;
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
const SearchInput = styled.input`
  outline: none;
  border-width: 0;
  color: #252728;
  font-family: "Oswald-Regular";
  font-size: 16px;
  width: 80%;
  margin-left: 10px;
  @media screen and (max-width: 750px) {
    width: 80%;
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
const FilterItemTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px solid gray; */
  height: 52px;
  &:hover {
    cursor: pointer;
  }
`;
const IdTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  font-family: "Oswald-Regular";
  color: #191717;
`;
const DropImage = styled.img`
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const ClothesDropArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const SelectItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  // justify-content:space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const CheckTitle = styled.p`
  font-size: 16px;
  font-family: "Oswald-Regular";
  margin-left: 8px;
  color: #191717;
`;
const ActivityItemArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 1.5em;
  background-color: #252728;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
const ActivityItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  padding: 20px 0px;
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
  padding: 20px 0px;
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
  width: 55%;
  align-items: center;
  @media screen and (max-width: 1115px) {
    width: 65%;
  }
  @media screen and (max-width: 700px) {
    width: fit-content;
  }
`;
const PriceArea = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 45%;
  justify-content: center;
  align-items: center;
  padding-right: 2em;
  @media screen and (max-width: 1115px) {
    padding-right: 0.5em;
    width: 35%;
  }
  @media screen and (max-width: 700px) {
    padding-right: 0.5em;
    width: fit-content;
  }
`;
const NameArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  margin-left: 15px;
  justify-content: center;
`;
const NameArea1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  margin-left: 15px;
  justify-content: center;
  width: 110px;
  @media screen and (max-width: 700px) {
    width: 60px;
    margin-left: 5px;
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
  font-size: 18px;
  margin: 0;
  @media screen and (max-width: 1115px) {
    font-size: 14px;
  }
  @media screen and (max-width: 700px) {
    font-size: 12px;
  }
`;
const BlockTimeText = styled.p`
  color: white;
  font-family: "Oswald-Regular";
  font-size: 18px;
  margin: 0;
  width: 145px;
  @media screen and (max-width: 1115px) {
    font-size: 14px;
    width: 100px;
  }
  @media screen and (max-width: 700px) {
    font-size: 12px;
    width: 80px;
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
  padding: 0px 15px;
  margin-top: 3px;
`;
const NFTImage = styled.img`
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
  width: 50px;
  height: 50px;
  @media screen and (max-width: 700px) {
    margin-left: 20px;
    width: 40px;
    height: 40px;
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
  margin-right: 15px;
`;
const PriceImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 5px;
  @media screen and (max-width: 700px) {
    width: 18px;
    height: 18px;
  }
`;

const EditImage = styled.img`
  width: 24px;
  height: 24px;
  margin-top: 20px;
  margin-right: 15px;
  @media screen and (max-width: 560px) {
    margin-top: 10px;
    width: 16px;
    height: 16px;
  }
`;

const Items = [
  {
    id: 1,
    price: "2300",
    name: "Common Plot land #2673",
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
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
  },
  {
    id: 4,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
  },
  {
    id: 5,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
  },
  {
    id: 6,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
  },
  {
    id: 7,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
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
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
  },
  {
    id: 10,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
  },
  {
    id: 11,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
  },
  {
    id: 12,
    price: "2300",
    name: "Common Plot land #2673",
    image: placeholderImage,
    sale: true,
  },
];

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
    id: 2,
    nftName: "Common Plot land #2673",
    status: "Minted",
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
    id: 4,
    nftName: "Common Plot land #2673",
    status: "Transferred",
    nftPrice: "-",
    sentAdd: "0x8637....34AA",
    receivedAdd: "0x7341....1HGA",
    transTime: "Aug 5, 2022 01:33:39 PM UST",
  },
  {
    id: 5,
    nftName: "Common Plot land #2673",
    status: "Sold",
    nftPrice: "12,000",
    sentAdd: "0x8637....34AA",
    receivedAdd: "0x7341....1HGA",
    transTime: "Aug 5, 2022 01:33:39 PM UST",
  },
  {
    id: 6,
    nftName: "Common Plot land #2673",
    status: "Sold",
    nftPrice: "12,000",
    sentAdd: "0x8637....34AA",
    receivedAdd: "0x7341....1HGA",
    transTime: "Aug 5, 2022 01:33:39 PM UST",
  },
  {
    id: 7,
    nftName: "Common Plot land #2673",
    status: "Sold",
    nftPrice: "12,000",
    sentAdd: "0x8637....34AA",
    receivedAdd: "0x7341....1HGA",
    transTime: "Aug 5, 2022 01:33:39 PM UST",
  },
];

const availabilityList = [
  "All Categories",
  "Available",
  "Droppoing Soon",
  "Sold",
];
const acquiredList = [
  "Recently Acquired",
  "Available",
  "Droppoing Soon",
  "Sold",
];

function ItemList() {
  let history = useHistory();

  const [buttonState, setButtonState] = useState(true);
  const [availabilityFlag, setAvailabilityFlag] = useState(false);
  const [acquiredFlag, setAcquiredFlag] = useState(false);
  const [availability, setAvailability] = useState("All Categories");
  const [acquired, setAcquired] = useState("Recently Acquired");
  const [listValue, setListValue] = useState("Recent");
  const [listIndex, setListIndex] = useState(0);
  const [availabilityIndex, setAvailabilityIndex] = useState(0);
  const [acquiredIndex, setAcquiredIndex] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minPrice, setMinPrice] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [attriSearchValue, setAttriSearchValue] = useState("");
  const [seletectEvent, setSeletectEvent] = useState<string[]>([]);

  const [filterArr, setFilterArr] = useState({
    Rarity: [],
    Rarity1: [],
  });
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

  const availabilityClose = () => {
    setAvailabilityFlag(false);
  };
  const acquiredClose = () => {
    setAcquiredFlag(false);
  };

  const chooseAvailability = (item: string, index: number) => {
    setAvailability(item);
    setAvailabilityIndex(index);
    availabilityClose();
  };
  const chooseAcquired = (item: string, index: number) => {
    setAcquired(item);
    setAcquiredIndex(index);
    acquiredClose();
  };
  const chooseListItem = (item: string, index: number) => {
    setListValue(item);
    setListIndex(index);
  };

  const clothesHandler = (index: number) => {
    let temp = [...clothesDrop];
    temp[index] = !temp[index];
    setClothesDrop(temp);
  };

  return (
    <ItemContainer>
      <SearchArea>
        <ButtonArea>
          <SelectButton
            status={buttonState}
            onClick={() => setButtonState(true)}
          >
            Listed
          </SelectButton>
          <SelectButton
            status={!buttonState}
            onClick={() => setButtonState(false)}
          >
            Owned
          </SelectButton>
        </ButtonArea>
        <SearchBarArea>
          <SearchImage src={blackSearchImage} alt="blackSearchImage" />
          <SearchInput
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="Search NFT’s"
            style={{ width: searchValue != "" ? "80%" : "85%" }}
          />
          {searchValue != "" && (
            <SearchImage
              onClick={() => {
                setSearchValue("");
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
              id="dropdown-variants-Danger"
            >
              <DropCategoryName>
                <span style={{ color: "white" }}>{availability}</span>
              </DropCategoryName>
              <ArrowImage src={arrowDown1} alt="arrow" />
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: 274 }}>
              {availabilityList.map((item, index) => {
                return (
                  <Dropdown.Item key={index}>
                    <AvailabilityItem
                      onClick={() => chooseAvailability(item, index)}
                    >
                      {item}
                      {availabilityIndex == index && (
                        <CheckImage src={checkImage} alt="" />
                      )}
                    </AvailabilityItem>
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown style={{ margin: "0 5px" }}>
            <Dropdown.Toggle
              style={{ backgroundColor: "#252728", borderWidth: 0 }}
              id="dropdown-variants-Danger"
            >
              <DropCategoryName>
                <span style={{ color: "white" }}>{acquired}</span>
              </DropCategoryName>
              <ArrowImage src={arrowDown1} alt="arrow" />
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: 274 }}>
              {acquiredList.map((item, index) => {
                return (
                  <Dropdown.Item key={index}>
                    <AvailabilityItem
                      onClick={() => chooseAcquired(item, index)}
                    >
                      {item}
                      {acquiredIndex == index && (
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
      <ItemListArea>
        {Items.map((item, index) => {
          return (
            <ItemArea
              key={index}
              onClick={() => {
                if (buttonState) history.push(`/ownedlistings/${item.id}`);
                else history.push(`/ownlistings/${item.id}`);
              }}
            >
              <NftImage
                style={{ borderWidth: item.sale ? "2px" : "0px" }}
                src={item.image}
                alt=""
              />
              <DescriptionArea
                style={{ backgroundColor: item.sale ? "black" : "#252728" }}
              >
                <Title style={{ color: item.sale ? "white" : "#666868" }}>
                  {item.name}
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Amount style={{ color: item.sale ? "white" : "#666868" }}>
                    {item.price} ATK
                  </Amount>
                  <EditImage src={editImage} alt="" />
                </div>
              </DescriptionArea>
            </ItemArea>
          );
        })}
      </ItemListArea>
    </ItemContainer>
  );
}

export default ItemList;
