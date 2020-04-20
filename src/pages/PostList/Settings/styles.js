import styled, { css } from 'styled-components';
import { tabletDesktop, mobile } from 'visual/medias';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  max-width: 610px;
  margin: 0 auto;

  ${tabletDesktop(css`
    margin-bottom: 55px;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
  `)}

  ${mobile(css`
    margin-bottom: 35px;
    grid-gap: 15px;
    grid-template: "first second" "last last" / 1fr 1fr;
  `)}
`;

export const SelectWrapper = styled.div`
  ${mobile(css`
    &:nth-child(1) {
      grid-area: first;
    }

    &:nth-child(2) {
      grid-area: second;
    }

    &:last-child {
      grid-area: last;
    }
  `)}
`;
