import { PropsWithChildren } from "react"
import styled from "styled-components"

type Props = PropsWithChildren<{className?: string}>

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  padding: 18px 0;
  width: 100%;
  color: white;
  background-color: #171725;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  border: 0;
  border-radius: 4px;
`

export const Button = ({ className, children}: Props) => {
  return (
    <ButtonStyled className={className}>
      {children}
    </ButtonStyled>
  )
}