import styled, { css } from "styled-components";

import { defaultValues as colors } from "../../utils/colors";
import font from "../../utils/font";

export const Container = styled.div`
  box-sizing: border-box;
  height: 55px;
  padding: 8px 30px;
  bottom: 0px;
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.getColor("background")};
  border-top: 1px solid ${(props) => props.theme.getColor("footerBorder")};
  display: flex;
  justify-content: space-between;
  z-index: 100;
`;

export const Links = styled.div`
  display: flex;
  margin: auto 0;
`;

export const Action = styled.div`
  ${(props) => {
    return css`
      margin: ${props.noMargin ? "0" : "auto 30px auto 0"};
      display: flex;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.5px;
      font-family: ${font.fontFamily};
    `;
  }}
`;

export const Copyright = styled.div`
  color: ${colors.gray};
`;

export const LogoContainer = styled.img`
  height: 39px;
  margin-left: 10px;
  cursor: pointer;
`;
