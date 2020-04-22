import styled, { css } from 'styled-components';

import { mobile, tablet, desktop } from 'visual/medias';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  
  ${mobile(css`
    width: 90%;
    max-width: 372px;
  `)}
  
  ${tablet(css`
    width: 88%;
    max-width: 900px;
  `)}
  
  ${desktop(css`
    width: 90%;
    max-width: 800px;
  `)}
`;
