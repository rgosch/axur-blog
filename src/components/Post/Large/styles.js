import styled, { css } from 'styled-components';

import { COLORS } from 'visual/constants';
import { tabletDesktop, mobile } from 'visual/medias';

export const Container = styled.article`
  padding-bottom: 40px;

  &:not(:last-child) {
    &:after {
      content: '';
      width: 200px;
      height: 1px;
      background-color: ${COLORS.greyLightness};
      display: block;
      margin: 0 auto;
      margin-top: 40px;
    }
  }
`;

export const Header = styled.header``;

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  text-align: center;
  color: ${COLORS.greyDarkness};

  ${tabletDesktop(css`
    font-size: 32px;
    line-height: 40px;
  `)}

  ${mobile(css`
    font-size: 28px;
    line-height: 30px;
  `)}
`;

export const Metadata = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Icon = styled.img``;

export const InfoText = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${COLORS.greyLight};
  margin-left: 7px;
`;

export const Body = styled.main`
  max-width: 550px;
  margin: 30px auto 0 auto;
`;

export const BodyContent = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: ${COLORS.black};
`;
