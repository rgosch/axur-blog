import styled from 'styled-components';

import { COLORS } from 'visual/constants';

export const Container = styled.header`
  background-color: ${COLORS.greyLightness};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  margin-bottom: 55px;
`;

export const Logo = styled.img``;

export const Title = styled.h1`
  position: absolute;
  left: -999pc;
  top: -999pc;
`;
