import styled from "styled-components"
import { ArrowLeft } from "./Icons/ArrowLeft"
import { RoundedButton } from "./Buttons/RoundedButton"

const HeaderStyled = styled.section`
  background-color: #171725;
  padding: 24px 24px 200px;
  .title {
    color: white;
  }
  .sub-title {
    color: #B5B5BE;
  }
`

export const Header = () => {
  return (
    <HeaderStyled>
      <RoundedButton>
        <ArrowLeft/>
      </RoundedButton>
      <h1 className="title">Silver Tier</h1>
      <p className="sub-title">In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.</p>
    </HeaderStyled>
  )
}