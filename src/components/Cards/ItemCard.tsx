/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { Special } from "../Icons/Special";

export type Item = {
  cover: string;
  coinNumber: number;
  desc: string;
  isInsufficientCoins?: boolean;
  isSpecial?: boolean;
};

type Props = Item & {
  className?: string;
};

const ItemCardStyled = styled.div<Pick<Item, "isInsufficientCoins">>`
  width: 200px;
  height: 240px;
  min-width: 200px;
  max-height: 240px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 12px 18px 0px #1717250a;
  border: 1px solid #f1f1f5;
  .item-card {
    &__cover {
      width: 100%;
      height: 100px;
      object-fit: cover;
      flex-shrink: 0;
    }
    &__info {
      padding: 16px;
      display: flex;
      flex-direction: column;
    }
    &__value {
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: ${(props) => (props.isInsufficientCoins ? "#696974" : "#0062ff")};
      svg {
        margin-right: 4px;
      }
    }
    &__desc {
      height: ${(props) => (props.isInsufficientCoins ? "48px" : "72px")};
      margin-top: 8px;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      width: 168px;
      color: #92929d;
      flex-shrink: 1;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: ${(props) => (props.isInsufficientCoins ? "2" : 3)};
      -webkit-box-orient: vertical;
    }
    &__insufficient {
      height: 20px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #0062ff;
      margin-top: 8px;
    }
  }
`;

export const ItemCard = (props: Props) => {
  return (
    <ItemCardStyled
      className={props.className}
      isInsufficientCoins={props.isInsufficientCoins}
    >
      <img className="item-card__cover" src={props.cover} alt={"cardimg"} />
      <div className="item-card__info">
        <div className="item-card__value">
          {props.isInsufficientCoins && <Special />}
          {`${props.coinNumber} Coins`}
        </div>
        <div className="item-card__desc">{props.desc}</div>
        {props.isInsufficientCoins && (
          <div className="item-card__insufficient">Insufficient coins</div>
        )}
      </div>
    </ItemCardStyled>
  );
};
