import styled from "styled-components";
import { Item, ItemCard } from "../components/Cards/ItemCard";
import { MyWalletCard } from "../components/Cards/MyWalletCard";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ItemList } from "../components/ItemList";

const MainLayoutStyled = styled.section`
  padding-bottom: 140px;
  .main-layout {
    &__my-wallet-card {
      margin-top: -175px;
    }
  }
`;

const petrolItems: Item[] = [
  {
    coinNumber: 15,
    desc: "50% discount for every $100 top-up on your Shell Petrol Card",
    cover: "/petrol-1.png",
  },
  {
    coinNumber: 1000,
    desc: "70% discount top-up on your Shell Petrol Card",
    cover: "/petrol-2.png",
    isInsufficientCoins: true,
  },
];

const rentalItems = [
  {
    coinNumber: 20,
    desc: "Get $20 Rental rebate",
    cover: "/rental-1.png",
  },
  {
    coinNumber: 15,
    desc: "Get $500 Rental rebate",
    cover: "/rental-2.png",
  },
];

const foodItems = [
  {
    coinNumber: 25,
    desc: "NTUC Fairprice $50 Voucher",
    cover: "/food-1.png",
  },
  {
    coinNumber: 5,
    desc: "Free Cold Stone Sundae at any flavour!",
    cover: "/food-2.png",
  },
];

export const MainLayout = () => {
  return (
    <MainLayoutStyled>
      <Header />
      <MyWalletCard className="main-layout__my-wallet-card" />
      <ItemList title="Petrol" items={petrolItems} />
      <ItemList title="Rental Rebate" items={rentalItems} />
      <ItemList title="Food and Beverage" items={foodItems} />
      <Footer />
    </MainLayoutStyled>
  );
};
