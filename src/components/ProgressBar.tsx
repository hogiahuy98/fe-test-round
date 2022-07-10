import styled from "styled-components";

type Props = {
  value: number;
  className?: string;
}

const ProgressBarStyled = styled.div`
    border-radius: 2.5px;
    width: 100%;
    background-color: #E2E2EA;
    display: block;
    .progress-bar__value {
      background-color: #0062FF;
      border-radius: 2.5px;
      height: 5px;
    }
`

export const  ProgressBar = ({value, className}: Props) => {
  return (
    <ProgressBarStyled className={className}>
      <div className="progress-bar__value" style={{width: `${value}%`}}/>
    </ProgressBarStyled>
  )
}