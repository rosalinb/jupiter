import React from "react";
import styled from "styled-components";
import JupiterColor from "../../utils/Color";

type ButtonProps = {
  text: string;
  color?: string; // ? makes it optional
  onClick: () => void; // same as function
};

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <div>
      <StyledButton
        onClick={() => {
          props.onClick();
        }}
      >
        {props.text}
      </StyledButton>
    </div>
  );
};

export default Button;

const StyledButton = styled.button`
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

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    background-color: rgb(142 217 191);
  }
`;
