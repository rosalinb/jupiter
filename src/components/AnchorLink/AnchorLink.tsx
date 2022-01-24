import React from "react";
import styled from "styled-components";
import JupiterColor from "../../utils/Color";

type AnchorProps = {
  to: string;
  text: string;
  shouldOpenNewPage?: boolean;
};

const AnchorLink: React.FunctionComponent<AnchorProps> = (
  props: AnchorProps
) => {
  return (
    <div>
      <StyledAnchorLink
        href={props.to}
        // target={props.shouldOpenNewPage ? "_blank" : "_self"}
        target={props.shouldOpenNewPage && "_blank"}
      >
        {props.text}
      </StyledAnchorLink>
    </div>
  );
};

export default AnchorLink;

const StyledAnchorLink = styled.a`
  color: ${JupiterColor.primaryColor};
  text-decoration: none;
  /* font-size: 20px;
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
  transition: 200ms; */

  font-size: 40px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    text-decoration: underline;
  }
`;
