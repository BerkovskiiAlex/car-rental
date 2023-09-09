/** @format */

import { styled } from "styled-components";
import { ReactComponent as normalIcon } from "../../images/normal.svg";
import { ReactComponent as activeIcon } from "../../images/active.svg";

export const StyledCatalogSection = styled.section`
  max-width: 1184px;
  margin: 92px 128px 150px;
  background: #fff;
`;

export const StyledCatalogForm = styled.form`
  display: flex;
  width: 859px;
  height: 74px;
  align-items: flex-end;
  gap: 18px;
  flex-shrink: 0;
`;

export const StyledCatalogCarBrandDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 224px;
`;

export const StyledCatalogLabel = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const StyledCatalogCarBrandSelect = styled.select`
  display: flex;
  padding: 14px 89px 14px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 14px;
  background: #f7f7fb;
  border: none;
  height: 48px;
`;

export const StyledCatalogOption = styled.option`
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  padding: 0;
  height: 20px;
`;

export const StyledCatalogPriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 125px;
`;

export const StyledCatalogPriceSelect = styled.select`
  display: flex;
  padding: 14px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 14px;
  background: #f7f7fb;
  border: none;
  height: 48px;
`;

export const StyledCatalogCarMileageDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 320px;
`;

export const StyledCatalogCarMileageInputsDiv = styled.div`
  display: flex;
`;

export const StyledCatalogCarMileageInputs = styled.input`
  padding: 14px 18px;
  gap: 32px;
  border-radius: 14px;
  background: #f7f7fb;
  border: none;
  height: 48px;
  width: 160px;
`;

export const StyledCatalogSearchButton = styled.button`
  display: flex;
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

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
