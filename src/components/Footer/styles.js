import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.footer`
  width: 100%;
  height: ${pxToRem(80)};
  background-color: ${COLORS.greyLightness};
  align-items: center;
  display: flex;
  margin-top: 55px;
`;

export const Texts = styled.div``;

export const Brand = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(13)};
  color: ${COLORS.greyDarkness};
  display: block;
`;

export const Developer = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(13)};
  color: ${COLORS.black};

  &:not(:hover) {
    text-decoration: none;
  }
`;
