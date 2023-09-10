/** @format */

import styled from "styled-components";
import { ReactComponent as normalIcon } from "../../images/normal.svg";
import { ReactComponent as activeIcon } from "../../images/active.svg";

export const StyledSection = styled.section`
  max-width: 1440px;
  margin: 150px auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledForm = styled.form`
  display: flex;
  max-width: 860px;
  height: 74px;
  align-items: flex-end;
  gap: 18px;
  flex-shrink: 0;

  @media screen and (max-width: 860px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledCarBrandDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 224px;
`;

export const StyledLabel = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const StyledCarBrandSelect = styled.select`
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

export const StyledOption = styled.option`
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  padding: 0;
  height: 20px;
`;

export const StyledPriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 125px;
`;

export const StyledPriceSelect = styled.select`
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

export const StyledCarMileageDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 320px;
`;

export const StyledCarMileageInputsDiv = styled.div`
  display: flex;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 160px;
    bottom: 0;
    background-color: #8a8a8933;
    width: 1px;
    height: 48px;
    margin: auto;
  }
`;

export const StyledCarMileageLeftInput = styled.input`
  padding: 14px 18px;
  gap: 32px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  border: none;
  background: #f7f7fb;
  height: 48px;
  width: 160px;
  outline: none;
`;

export const StyledCarMileageRightInput = styled.input`
  padding: 14px 18px;
  gap: 32px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background: #f7f7fb;
  border: none;
  height: 48px;
  width: 160px;
  outline: none;
`;

export const StyledSearchButton = styled.button`
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

export const StyledCardsListDiv = styled.div`
  max-width: 1220px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 28px;
  margin-top: 50px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 860px) {
    margin-top: 300px;
  }
`;

export const StyledFullCardDiv = styled.div`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const StyledCardDiv = styled.div`
  display: flex;
  width: 274px;
  height: 354px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  position: relative;
  border-radius: 12px;
`;

export const StyledImages = styled.div`
  display: flex;
  width: 274px;
  height: 268px;
  flex-shrink: 0;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledNormalIcon = styled(normalIcon)`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const StyledActiveIcon = styled(activeIcon)`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const StyledCardMarkDiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: #121417;
  width: 274px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 14px;
`;

export const StyledCardMarkH2 = styled.h2`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const StyledCardMarkSpan = styled.span`
  color: #3470ff;
`;

export const StyledCardMarkP = styled.p`
  text-align: right;
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const StyledAdressP = styled.p`
  width: 270px;
  margin-top: 8px;
`;

export const StyledTypeP = styled.p`
  width: 270px;
  margin-top: 4px;
`;

export const StyledMachineDescriptionSpan = styled.span`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 18px;
  &:not(:last-child):after {
    color: rgba(18, 20, 23, 0.1);
    content: "|";
    padding: 0 2px;
  }
`;

export const StyledLearnMoreButton = styled.button`
  text-align: center;
  width: 274px;
  padding: 12px 99px;
  border-radius: 12px;
  background: #3470ff;
  margin-top: 28px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

export const StyledLoadMoreButton = styled.button`
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  margin-top: 100px;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
