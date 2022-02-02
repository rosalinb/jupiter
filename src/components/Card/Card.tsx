import React from "react";
import styled from "styled-components";
import JupiterColor from "../../utils/Color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";

type CardProps = {
  primaryHeader: string;
  secondaryHeader: string;
  children?: any;
  icon?: IconDefinition;
  iconSize?: SizeProp;
  width?: string;
  backgroungColor?: string;
};

const Card: React.FunctionComponent<CardProps> = (props: CardProps) => {
  return (
    <StyledCard cardWidth={props.width}>
      <FontAwesomeIcon icon={props.icon} size={props.iconSize || "1x"} />

      <PrimaryHeader>{props.primaryHeader}</PrimaryHeader>
      <SecondaryHeader>{props.secondaryHeader}</SecondaryHeader>
      {props.children}
    </StyledCard>
  );
};

export default Card;

type StyledCardProps = {
  cardWidth: string;
};

const StyledCard = styled.div<StyledCardProps>`
  padding: 20px;
  border-radius: 20px;
  box-shadow: 1px 1px 5px 0px ${JupiterColor.primarySectionHoverColor};
  transition: 300ms;
  background-color: white;
  text-align: center;
  width: ${(props) => props.cardWidth || "100%"};

  :hover {
    transform: scale(1.02);
    cursor: pointer;
    box-shadow: 5px 5px 15px 5px#CEA1A1;
  }

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

const PrimaryHeader = styled.div`
  text-align: center;
  margin: 20px;
  font-size: 30px;
  font-weight: bold;
`;
const SecondaryHeader = styled.div`
  text-align: center;
  margin: 20px;
  font-size: 20px;
  font-weight: bold;
`;
