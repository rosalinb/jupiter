import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import JupiterColor from "../../utils/Color";

type LinkProps = {
  text: string;
  to: string;
  padding?: string; // 5px
};

const LinkButton: React.FunctionComponent<LinkProps> = (props: LinkProps) => {
  const { text, to, padding } = props;

  return (
    <StyledLink to={to} padding={padding}>
      {text}
    </StyledLink>
  );
};

export default LinkButton;

type StyledLinkProps = {
  padding?: string; // 5px
};

const StyledLink = styled(RouterLink)<StyledLinkProps>`
  font-size: 25px;
  padding: ${(props) => props.padding || "2rem"};
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
  display: inline-block;

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
