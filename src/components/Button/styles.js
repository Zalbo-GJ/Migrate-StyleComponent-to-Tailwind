import styled, { css } from "styled-components";

import { defaultValues as colors } from "../../utils/colors";
import font from "../../utils/font";

export const Button = styled.button`
  ${(props) => {
    const { buttonShape, buttonType, buttonSize } = props;

    return css`
      border-radius: ${buttonShape === "square" ? "8px" : "1.66667em"};
      padding: ${buttonSize === "small" ? "0.425rem 1em" : "12px 24px"};
      font-size: 18px;
      font-family: ${font.fontFamily};
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.5px;
      cursor: pointer;
      outline: none;
      height: min-content;

      i {
        margin-right: ${props.hasText ? "6px" : 0};
      }

      :hover {
        opacity: 0.7;
        transform: scale(1.05);
        transition: all 125ms ease-in-out 0s;
      }

      ${buttonType === "ghost" &&
      css`
        background: ${colors.transparent};
        border: none;
        color: ${colors.darkGray};
      `}

      ${buttonType === "basic" &&
      css`
        background: ${colors.lightBlue};
        border: 1px ${colors.lightBlue};
        color: ${colors.orange};
      `}
    `;
  }}
`;
