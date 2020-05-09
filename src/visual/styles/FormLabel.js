import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const FormLabel = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: ${pxToRem(12)};
  line-height: ${pxToRem(20)};
  color: ${COLORS.grey};
`;
