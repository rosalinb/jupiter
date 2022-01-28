import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import JupiterColor from "../../utils/Color";

type LinkProps = {
  text: string;
  to: string;
};

const LinkButton: React.FunctionComponent<LinkProps> = (props: LinkProps) => {
  return (
    <div>
      <StyledLink to={props.to}>{props.text}</StyledLink>
    </div>
  );
};

export default LinkButton;

const StyledLink = styled(RouterLink)`
  font-size: 25px;
  padding: 2em;
  text-align: center;
  cursor: pointer;
  border-radius: 15px 50px 30px;
  background-color: ${JupiterColor.primaryColor};
  color: ${JupiterColor.buttonText};
  font-weight: bold;
  /* letter-spacing: 1px; */
  outline: none;
  border: none;
  transition: 300ms;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    background-color: ${JupiterColor.primaryHoverColor};

    /* border: ${JupiterColor.buttonText};
    background-color: white;
    color: ${JupiterColor.buttonText}; */
  }
`;
