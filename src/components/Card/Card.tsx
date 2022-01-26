import React from "react";
import styled from "styled-components";
import JupiterColor from "../../utils/Color";

type CardProps = {
  header: string;
  children: any;
};

const Card: React.FunctionComponent<CardProps> = (props: CardProps) => {
  return (
    <StyledCard>
      <BoxHeader>{props.header}</BoxHeader>
      {props.children}
    </StyledCard>
  );
};

export default Card;

const BoxHeader = styled.h4`
  margin-top: 0;
`;

const StyledCard = styled.div`
  padding: 20px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px ${JupiterColor.primaryColor};
  transition: 300ms;
  background-color: white;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
    box-shadow: 5px 5px 15px 5px ${JupiterColor.primaryColor};
  }
`;
