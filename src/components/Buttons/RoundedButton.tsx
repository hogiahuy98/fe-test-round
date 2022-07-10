import { PropsWithChildren } from "react";
import styled from "styled-components";

type Props = PropsWithChildren<{
  className?: string;
}>

const RoundedButtonStyled = styled.button`
  width: 40px;
  height: 40px;
  background-color: white;
  color: #171725;
  border-radius: 40px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RoundedButton = ({ className, children }: Props) => {
  return (
    <RoundedButtonStyled className="">
      {children}
    </RoundedButtonStyled>
  )
}