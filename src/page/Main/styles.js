import styled, { css } from "styled-components";

import { defaultValues as colors } from "../../utils/colors";

export const Container = styled.div`
  max-width: 1200px;
  height: auto;
  margin: auto;

  @media (max-width: 1300px) {
    margin: auto 75px;
  }
`;

export const FlexContent = styled.div`
  ${({ justifyContent, flexDirection, alignItems }) => css`
    display: flex;
    justify-content: ${justifyContent ? justifyContent : "space-between"};
    flex-direction: ${flexDirection ? flexDirection : "initial"};
    align-items: ${alignItems ? alignItems : "initial"};
  `}
`;

export const Content = styled.div`
  max-width: 530px;
  position: relative;
`;

export const LogoContainer = styled.img`
  height: 56px;
  margin-right: 24px;
  cursor: pointer;
  background-color: ${colors.black};
  -webkit-transition: 150ms box-shadow ease;
  transition: 150ms box-shadow ease;
  border-radius: 10px;
`;

export const Circle = styled.div`
  width: 527px;
  height: 527px;
  background: linear-gradient(135deg, #ffc619 0%, #ff7919 100%);
  border-radius: 527px;
`;

export const CircleImage1 = styled.img`
  width: 270px;
  height: 585px;
  top: -29px;
  left: 92px;
  position: absolute;
  box-shadow: 0px 4.56288px 50.1917px rgba(0, 0, 0, 0.08);
  border-radius: 23px;
  background: ${colors.white};
  overflow: hidden;
`;

export const CircleImage2 = styled.img`
  width: 227px;
  height: 493px;
  top: 18px;
  left: 206px;
  position: absolute;
  box-shadow: 0px 4.56288px 34.2216px rgba(0, 0, 0, 0.08);
  border-radius: 19px;
  background: ${colors.white};
  overflow: hidden;
`;

export const ColoredCard = styled.div`
  margin-top: 70px;
  height: 956px;
  width: 100%;
  padding: 48px 0 50px;
  background: ${colors.lighterBlue};
  border-radius: 44px;
`;

export const ImageContainer = styled.img`
  max-width: 928px;
  height: auto;
  border-radius: 20px;
  margin: 0 auto 26px auto;
  box-shadow: 0px 4.70932px 40.5751px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
`;

export const IconsContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 24px 0 0 38px;
`;

export const ThirdContainer = styled.div`
  margin-top: 135px;
`;

export const Header1 = styled.div`
  font-weight: 800;
  font-size: 88px;
  line-height: 91px;
  margin: 16px 0;
  color: ${colors.black};
  margin-top: 64px;
  > span {
    background: -webkit-linear-gradient(-45deg, #24bff2 0%, #2458f2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SubHeader1 = styled.div`
  font-size: 30px;
  line-height: 46px;
  color: ${colors.midLightGray};
  margin: 0 0 44px;
`;

export const Header2 = styled.div`
  font-weight: 800;
  font-size: 54px;
  line-height: 64px;
  margin: 0 0 4px;
  text-align: center;
  color: ${colors.black};
`;

export const SubHeader2 = styled.div`
  font-size: 26px;
  line-height: 46px;
  color: ${colors.midLightGray};
  margin: 0 0 28px;
  text-align: center;
`;

export const Header3 = styled.div`
  font-size: 62px;
  line-height: 64px;
  font-weight: 800;
  margin: 0 0 48px;
`;

export const Header4 = styled.div`
  font-size: 38px;
  line-height: 40px;
  font-weight: 600;
  margin: 0 0 20px;
`;

export const SubHeader4 = styled.div`
  font-size: 24px;
  line-height: 38px;
  margin: 0 0 24px;
  font-weight: 400;
`;
