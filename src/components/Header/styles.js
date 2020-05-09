import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.header`
  background-color: ${COLORS.greyLightness};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${pxToRem(90)};
  margin-bottom: 55px;
`;

export const Logo = styled.img`
  width: auto;
  height: ${pxToRem(42)};
`;

export const Title = styled.h1`
  position: absolute;
  left: -999pc;
  top: -999pc;
`;
