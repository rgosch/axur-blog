import styled, { css } from 'styled-components';

import { COLORS } from 'visual/constants';
import { tabletDesktop, mobile } from 'visual/medias';
import { pxToRem } from 'logic/pxToRem';

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
    font-size: ${pxToRem(22)};
    line-height: ${pxToRem(40)};
  `)}

  ${mobile(css`
    font-size: ${pxToRem(18)};
    line-height: ${pxToRem(20)};
  `)}
`;

export const Metadata = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: flex-end;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoText = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(12)};
  line-height: ${pxToRem(16)};
  color: ${COLORS.greyLight};
`;
