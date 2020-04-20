import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { FormLabel } from 'visual/styles/form-label';

import arrow from 'assets/img/arrow-down.svg';

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Label = styled(FormLabel)`
  display: block;
`;

export const FakeSelect = styled.div`
  height: 35px;
  border: 2px solid ${COLORS.greyLight};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 9px;
  border-radius: 5px;
  position: relative;
`;

export const FakeSelectText = styled.span`
  font-family: 'Gotham', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  padding-top: 7px;
  color: ${COLORS.greyLight};
`;

export const Arrow = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 4px;
  background-image: url('${arrow}');
`;

export const SelectNative = styled.select`
  position: absolute;
  height: 55px;
  width: 100%;
  top: 0;
  opacity: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  font-family: 'Open Sans', serif;
`;
