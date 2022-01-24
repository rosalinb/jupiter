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
  font-size: 20px;
  padding: 0.8em 1.5em;
  text-align: center;
  cursor: pointer;
  border-radius: 7px;
  background-color: ${JupiterColor.primaryColor};
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  outline: none;
  border: none;
  transition: 200ms;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    background-color: rgb(142 217 191);
  }
`;
