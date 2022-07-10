import styled from "styled-components";
import { Home } from "./Icons/Home";
import { Notification } from "./Icons/Notification";
import { Payment } from "./Icons/Payment";
import { Profile } from "./Icons/Profile";

const FooterStyled = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 20px 25px 36px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #e2e2ea;
  .footer__item {
    position: relative;
    &.noti {
      ::after {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        top: 4px;
        right: 4px;
        background-color: #fc5a5a;
        border-radius: 12px;
      }
    }
  }
`;

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer__item">
        <Home />
      </div>
      <div className="footer__item noti">
        <Notification />
      </div>
      <div className="footer__item">
        <Payment />
      </div>
      <div className="footer__item">
        <Profile />
      </div>
    </FooterStyled>
  );
};
