import React from "react";
import styled from "styled-components";
import JupiterColor from "../../utils/Color";

type AnchorProps = {
  to: string;
  shouldOpenNewPage?: boolean;
  children: any;
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
        {props.children}
      </StyledAnchorLink>
    </div>
  );
};

export default AnchorLink;

{
  /* <div style={{ marginTop: "50px" }}>
<AnchorLink to="https://www.youtube.com/" shouldOpenNewPage={true}>
  Youtube Link
</AnchorLink>
<AnchorLink to="https://www.facebook.com/">Facebook Link</AnchorLink>
</div> */
}

const StyledAnchorLink = styled.a`
  color: ${JupiterColor.primaryColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
