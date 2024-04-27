import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 3rem;
  margin: 16px 0;
  color: ${(props) => props.theme.getColor("header")};
`;
export const H2 = styled.h2`
  margin: 5px 0;
  color: ${(props) => props.theme.getColor("header")};
`;
export const H3 = styled.h3`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.getColor("header")};
`;

export const H4 = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.getColor("header")};
`;
export const H5 = styled.h5`
  font-weight: 600;
  color: ${(props) => props.theme.getColor("header")};
`;

export const H6 = styled.h6`
  font-weight: 600;
  font-size: 12px;
  color: ${(props) => props.theme.getColor("header")};
`;
