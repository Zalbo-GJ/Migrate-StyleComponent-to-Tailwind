import styled from 'styled-components';

export const Container = styled.div`
  max-width: 50em;
  display: flex;
  margin: 100px auto;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  color: ${(props) => props.theme.getColor('mainFont')};
`;

export const Centerize = styled.div`
  text-align: center;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.getColor('href')};
`;
