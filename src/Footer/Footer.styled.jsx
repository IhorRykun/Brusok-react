import styled from "@emotion/styled";
import { SlSocialInstagram } from "react-icons/sl";
import { SiFacebook } from "react-icons/si";
import { PiTelegramLogoBold } from "react-icons/pi";
import { NavLink, Link } from "react-router-dom";
import { AiTwotoneMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { TfiLocationPin } from "react-icons/tfi";

export const SectionFooter = styled.section`
  margin-top: 54px;
  margin-bottom: 54px;
`;

export const DivFooter = styled.div`
  border-top: 1px solid rgba(109, 109, 109, 1);
  display: flex;
  padding-top: 34px;
`;

export const FooterList = styled.ul`
  margin-right: 52px;
`;

export const FooterItem = styled.li`
  margin-bottom: 6px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SocialContainer = styled.div`
  margin-left: 52px;
`;

export const LinkPage = styled(NavLink)`
  font-size: 14px;
  font-weight: 300;
  font-family: "Roboto" sans-serif;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: #c38f63;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const SocialList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const SocialItem = styled.li`
  margin-right: 24px;

  &:last-child {
    margin-right: 0;
  }
`;

export const IconInstagram = styled(SlSocialInstagram)`
  width: 18px;
  height: 18px;
`;

export const IconFaceBoock = styled(SiFacebook)`
  width: 18px;
  height: 18px;
`;

export const IconTelegram = styled(PiTelegramLogoBold)`
  width: 18px;
  height: 18px;
`;

export const SocialLink = styled(Link)`
  padding: 4px;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
`;

export const SocialTitle = styled.h3`
  font-weight: 400px;
  font-size: 14px;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
`;

export const ListAddress = styled.ul`
  width: 194px;
  margin-left: 56px;
`;

export const ItemAddress = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const PrivateContainer = styled.div`
  margin-top: 52px;
  margin-left: 130px;
`;

export const PrivateLink = styled(Link)`
  font-weight: 300;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
`;

export const Address = styled.address`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
`;

export const AddressSpan = styled.span`
  padding-left: 12px;
`;

export const PrivateLinkTel1 = styled(Link)`
  font-weight: 300;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
`;

export const IconEmail = styled(AiTwotoneMail)`
  padding-top: 2px;
  margin-right: 8px;
`;

export const IconTell = styled(LuPhone)`
  margin-right: 8px;
`;

export const IconLocation = styled(TfiLocationPin)`
  margin-right: 8px;
`;
