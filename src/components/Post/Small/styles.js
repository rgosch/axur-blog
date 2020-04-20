import styled, { css } from 'styled-components';

import { COLORS } from 'visual/constants';
import { tabletDesktop, mobile } from 'visual/medias';

export const Container = styled.article`
  padding-bottom: 10px;

  &:not(:last-child) {
    margin-bottom: 10px;
    border-bottom: 1px solid ${COLORS.greyLightness};
  }
`;

export const Header = styled.header`
  ${tabletDesktop(css`
    display: grid;
    grid-template-columns: 1fr 80px;
  `)}
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  color: ${COLORS.greyDarkness};

  ${tabletDesktop(css`
    font-size: 22px;
    line-height: 40px;
  `)}

  ${mobile(css`
    font-size: 18px;
    line-height: 20px;
  `)}
`;

export const Metadata = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoText = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${COLORS.greyLight};
`;
