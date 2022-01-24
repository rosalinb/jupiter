import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import Color from "../../../utils/Color";

type NavProps = {
  isSticky: boolean;
};

type MenuProps = {
  active: boolean;
};

export const NAV = styled.nav<NavProps>`
  height: 70px;

  left: 0;
  right: 0;

  display: flex;

  flex-wrap: wrap;

  align-items: center;

  justify-content: space-between;
`;

export const Logo = styled(RouterLink)`
  font-size: 27px;
  text-decoration: none;
  letter-spacing: 0.5px;
  font-family: "Work Sans", Arial, sans-serif;
  color: black;
  font-weight: 600;
`;

export const Container = styled.div`
  flex-wrap: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80%;

  margin-right: auto;
  margin-left: auto;
`;
export const MainMenuBar = styled.div`
  display: flex !important;
  flex-basis: auto;
  flex-grow: 1;
`;

export const UL = styled.ul`
  flex-direction: row;
  margin-left: auto;
  display: flex;
  padding-left: 0px;
  margin-bottom: 0px;
  list-style: none;
  margin-top: 0px;
`;
export const LI = styled.li`
  list-style: none;
`;

export const Link = styled(RouterLink)<MenuProps>`
  font-size: 15px;
  padding-top: 0.9rem;
  padding-bottom: 0.9rem;
  margin-left: 50px;
  letter-spacing: 1px;
  color: #000;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  font-family: "Work Sans", Arial, sans-serif;
  transition: 150ms;

  ${(props) => props.active && `color: ${Color.primaryColor};`}

  &:hover {
    color: ${Color.primaryColor};
  }
`;
