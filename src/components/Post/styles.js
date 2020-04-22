import styled from 'styled-components';

import { COLORS } from 'visual/constants';

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
