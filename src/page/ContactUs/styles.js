import styled from 'styled-components';

import { Cards } from '../../components';

export const Container = styled(Cards.BasicCard)`
  max-width: 50em;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 80px;
  margin: 160px auto;
  color: ${(props) => props.theme.getColor('mainFont')};
`;

export const Email = styled.div`
  color: ${(props) => props.theme.getColor('primary')};
`;
