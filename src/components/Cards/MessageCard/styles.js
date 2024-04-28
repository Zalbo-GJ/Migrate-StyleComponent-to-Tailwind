import styled, { css } from "styled-components";
import Pill from "../../Pill/Pill";

import { defaultValues as colors } from "../../../utils/colors";

export const Card = styled.div`
  ${({ color }) => css`
    width: 524px;
    height: 300px;
    border-radius: 32px;
    display: flex;
    padding: 0 40px;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    user-select: none;
    ${color === "cyan" &&
    css`
      background: rgba(185, 224, 229, 0.5);
    `}
    ${color === "purple" &&
    css`
      background: rgba(227, 194, 227, 0.5);
    `}
  `}
`;

export const Header = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 24px;
  text-align: center;
  color: ${colors.lagoonBlue};
  margin: 0 0 37px;
`;

export const MessageContainer = styled.div`
  ${({ position }) => css`
    display: flex;
    margin: 0 0 24px;
    ${position === "right" &&
    css`
      flex-flow: row-reverse;
    `}
  `}
`;

export const Avatar = styled.div`
  width: 46px;
  height: 46px;
  > img {
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
    border-radius: 23px;
    border: 1px solid var(--border);
  }
`;

export const CustomPill = styled(Pill)`
  ${({ color }) => css`
    ${color === "cyan" &&
    css`
      background: ${colors.skyBlue};
      color: white;
    `}
    ${color === "purple" &&
    css`
      background: ${colors.purple};
      color: white;
    `}
  `}
`;
