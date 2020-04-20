import styled from 'styled-components';
import { COLORS } from 'visual/constants';

export const Container = styled.footer`
  width: 100%;
  height: 80px;
  background-color: ${COLORS.greyLightness};
  align-items: center;
  display: flex;
  margin-top: 55px;
`;

export const Texts = styled.div``;

export const Brand = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 13px;
  color: ${COLORS.greyDarkness};
  display: block;
`;

export const Developer = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 13px;
  color: ${COLORS.black};

  &:not(:hover) {
    text-decoration: none;
  }
`;
