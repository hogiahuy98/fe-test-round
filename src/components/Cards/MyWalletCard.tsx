import styled from "styled-components"
import { Button } from "../Buttons/Button";
import { ArrowRight } from "../Icons/ArrowRight";
import { ProgressBar } from "../ProgressBar";

const MyWalletCardStyled = styled.section`
  margin: 0 16px;
  padding: 24px;
  box-shadow: 0px 12px 18px rgba(23, 23, 37, 0.04);
  background-image: url('/background-card.png');
  background-color: white;
  background-repeat: no-repeat;
  border-radius: 8px;
  position: relative;
  z-index: 0;
  .available-coin {
    &__title {
      font-size: 14px;
      font-weight: 600;
      line-height: 24px;
      color: #B5B5BE;
    }
    &__value {
      font-size: 48px;
      font-weight: 400;
      line-height: 56px;
      margin-top: 8px;
      display: block;
    }
  }
  .pr-bar {
    margin-top: 33px;
  }
  .tier-goal {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #92929D;
    margin-top: 34px;
  }
  .tier-benefits {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0062FF;
    svg {
      margin-left: 7px;
    }
  }
  .my-coupons {
    margin-top: 24px;
  }
  .update-time {
    display: block;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #B5B5BE;
    margin-top: 16px;
  }
  .mwc-background {
    position: absolute;
    background-image: url('/background-card.png');
    z-index: 1;
  }
`

type Props = {
  className?: string;
}

export const MyWalletCard = ({ className }: Props) => {
  return (
    <MyWalletCardStyled className={className}>
      <div className="available-coin">
        <div className="available-coin__title">
          Available Coin balance
        </div>
        <span className="available-coin__value">
          340 
        </span>
      </div>
      <ProgressBar value={(1200/2000) * 100} className="pr-bar" />
      <p className="tier-goal">
        You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.
      </p>
      <a className="tier-benefits">
        View tier benefits <ArrowRight/>
      </a>
      <Button className="my-coupons">
        My Coupons
      </Button>
      <span className="update-time">
        Updated : 02/11/2021
      </span>
      <div className="mwc-background"/>
    </MyWalletCardStyled>
  )
}