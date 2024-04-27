import styled, { css } from 'styled-components';

export const BasicCard = styled.div`
  ${(props) => {
    const { borderRadius, theme } = props;
    return css`
      background: ${theme.getColor('background')};
      border-radius: ${borderRadius};
      border: 1px solid ${theme.getColor('cardBorder')};
      box-shadow: ${`0 4px 8px 0 ${theme.getColor('dropdownShadow')}`};
    `;
  }}
`;
