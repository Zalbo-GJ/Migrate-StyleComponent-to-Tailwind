import styled, { css } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Link = styled(LinkRouter)`
  ${(props) => {
    return css`
      text-decoration: none;
      color: ${props.theme.getColor('link')};
      :active,
      :visited {
        color: ${props.active === 'true'
          ? props.theme.getColor('primary')
          : props.theme.getColor('link')};
      }

      :hover {
        color: ${props.theme.getColor('primary')};
      }
    `;
  }}
`;
