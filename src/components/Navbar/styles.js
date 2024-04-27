import styled, { css } from "styled-components";

import font from "../../utils/font";
import { defaultValues as colors } from "../../utils/colors";

export const Container = styled.div`
  ${(props) => css`
    z-index: 100;
    height: 76px;
    padding: 12px 1.875em;
    box-sizing: border-box;
    position: relative;
    top: 0;
    background-color: ${props.theme.getColor("navBackground")};
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: none;

    max-width: 1235px;
    margin: 0 auto;
  `}
`;

export const Links = styled.div`
  display: flex;
`;

export const Action = styled.div`
  ${(props) => {
    return css`
      position: relative;
      margin: ${props.noMargin ? "0" : "auto 23px auto 0"};
      display: flex;
      font-size: 14px;
      font-weight: 800;
      letter-spacing: 0.5px;
      font-family: ${font.fontFamily};
      color: ${props.theme.getColor("link")};
      cursor: pointer;
      animation: none;

      > a,
      div,
      img,
      i {
        margin-top: auto;
        margin-bottom: auto;
      }
      .noMargin {
        margin: 0;
      }
    `;
  }}
`;

export const LogoContainer = styled.img`
  width: 30px;
`;

export const HomeLink = styled.div`
  font-size: 24px;
  line-height: 46px;
  color: ${colors.midLightGray};
  margin: 0 0 44px;
  font-weight: 400;
  display: flex;

  > img {
    margin-right: 10px;
  }
`;
