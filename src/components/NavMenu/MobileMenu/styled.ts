import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import Color from "../../../utils/Color";

export const MobileNav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Container = styled.div`
  flex-wrap: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
`;

export const Logo = styled(RouterLink)`
  font-size: 27px;
  text-decoration: none;
  letter-spacing: 0.5px;
  font-family: "Work Sans", Arial, sans-serif;
  color: black;
  font-weight: 600;
`;

export const ULContainer = styled.div`
  /* position: absolute;
  left: 0px;
  top: 70px;
  box-shadow: 1px 1px 5px 0px ${Color.primarySectionHoverColor};
  background-color: ${Color.primarySectionColor};
  width: 100%; */
`;

export const UL = styled.ul`
  flex-direction: column;
  padding: 25px 40px 25px 20px;
  list-style: none;
  display: flex;
  align-items: start;
  gap: 30px;
  margin: 0px;
`;

export const Link = styled(RouterLink)`
  font-size: 15px;
  letter-spacing: 1px;
  color: ${Color.primaryText};
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  font-family: "Work Sans", Arial, sans-serif;
  transition: 150ms;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    color: ${Color.primaryColor};
  }
`;
