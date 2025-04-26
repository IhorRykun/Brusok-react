import styled from "@emotion/styled";
import { SlSocialInstagram } from "react-icons/sl";
import { SiFacebook } from "react-icons/si";
import { PiTelegramLogoBold } from "react-icons/pi";
import { Link } from "react-router-dom";

export const SectionFooter = styled.section`
  margin-top: 54px;
  margin-bottom: 54px;
`;

export const DivFooter = styled.div`
  border-top: 1px solid rgba(109, 109, 109, 1);
  display: flex;
  padding-top: 34px;
`;

export const FooterList = styled.ul``;

export const FooterItem = styled.li`
  margin-bottom: 6px;

  &:last-child {
    margin-bottom: 0;
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
`;

export const SocialTitle = styled.h3`
  font-weight: 400px;
  font-size: 14px;
`;

export const ListAddress = styled.ul`
  width: 194px;
  margin-left: 56px;
`;

export const ItemAddress = styled.li`
  display: flex;
align-items:center;
`;
