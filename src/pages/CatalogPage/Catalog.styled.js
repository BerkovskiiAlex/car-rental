/** @format */

import { styled } from "styled-components";
import { ReactComponent as normalIcon } from "../../images/normal.svg";
import { ReactComponent as activeIcon } from "../../images/active.svg";

export const StyledCarsListSpan = styled.span`
  padding: 0 5px;
  &:not(:last-child):after {
    content: "|";
    padding-left: 5px;
  }
`;

export const StyledNormalIcon = styled(normalIcon)`
  position: absolute;
  left: 0px;
`;

export const StyledActiveIcon = styled(activeIcon)`
  position: absolute;
  left: 0px;
`;
