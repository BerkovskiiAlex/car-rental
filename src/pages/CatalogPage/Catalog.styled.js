/** @format */

import { styled } from "styled-components";

export const StyledCarsListSpan = styled.span`
  padding: 0 5px;
  &:not(:last-child):after {
    content: "|";
    padding-left: 5px;
  }
`;
