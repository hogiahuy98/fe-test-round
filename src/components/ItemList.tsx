import styled from "styled-components";
import { Item, ItemCard } from "./Cards/ItemCard";

type Props = {
  items: Item[];
  title: string;
};

const ItemListStyled = styled.section`
  padding: 24px 0;
  position: relative;
  .item-list {
    &__title {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 26px;
      margin-left: 24px;
    }
    &__list {
      display: flex;
      width: 100%;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    &__item {
      margin-left: 24px;
      &:last-child {
        margin-right: 24px;
      }
    }
  }
`;

export const ItemList = (props: Props) => {
  return (
    <ItemListStyled>
      <div className="item-list__title">{props.title}</div>
      <div className="item-list__list">
        {props.items.map((item, index) => (
          <ItemCard className="item-list__item" key={index} {...item} />
        ))}
      </div>
    </ItemListStyled>
  );
};
