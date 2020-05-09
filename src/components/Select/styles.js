import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { FormLabel } from 'visual/styles/FormLabel';
import { pxToRem } from 'logic/pxToRem';

import arrow from 'assets/img/arrow-down.svg';

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Label = styled(FormLabel)`
  display: block;
`;

export const FakeSelect = styled.div`
  height: ${pxToRem(35)};
  border: 2px solid ${COLORS.greyLight};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 ${pxToRem(9)};
  border-radius: 5px;
  position: relative;
`;

export const FakeSelectText = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(12)};
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
  height: 100%;
  width: 100%;
  top: 0;
  opacity: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  font-family: 'Open Sans', serif;
`;
