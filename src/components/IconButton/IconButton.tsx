import React from "react";
import styled from "styled-components";
import JupiterColor from "../../utils/Color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";

type IconProps = {
  to: string;
  shouldOpenNewPage?: boolean;
  icon: IconDefinition;
  size?: SizeProp;
};

const IconButton: React.FunctionComponent<IconProps> = (props: IconProps) => {
  return (
    <div>
      <StyledLink href={props.to} target={props.shouldOpenNewPage && "_blank"}>
        <FontAwesomeIcon icon={props.icon} size={props.size || "1x"} />
      </StyledLink>
    </div>
  );
};

export default IconButton;

const textcolor = "red";

const StyledLink = styled.a`
  /* color: ${textcolor}; */
  color: grey;
  text-decoration: none;
  transition: 200ms;

  &:hover {
    color: ${JupiterColor.primaryColor};
  }
`;
