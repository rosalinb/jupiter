import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import Color from "../../utils/Color";

type NavProps = {
  isSticky: boolean;
};

type MenuProps = {
  active: boolean;
};

export const NAV = styled.nav<NavProps>`
  background-color: white;
  height: 70px;
  /* position: ${(props) => (props.isSticky ? "fixed" : "absolute")}; */
  /* top: ${(props) => (props.isSticky ? 0 : "20px")};  */
  /* box-shadow: ${(props) =>
    props.isSticky ? "0 3px 20px -1px rgba(0, 0, 0, 0.1)" : ""}; */
  /* transition: ${(props) => (props.isSticky ? "0.2s all ease-out" : null)}; */
  /* height: ${(props) =>
    props.isSticky ? "70px" : "0px"}; */ /* animation on HEIGHT */

  /* background: transparent !important; */
  /* position: fixed; */
  /* transition: 0.3s all ease-out; */
  /* top: 0px; */
  left: 0;
  right: 0;
  z-index: 3;

  /* position: relative; */

  display: flex;

  flex-wrap: wrap;

  align-items: center;

  justify-content: space-between;
  /* padding: 0.5rem 1rem; */
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
  /* max-width: 960px; */

  width: 80%;
  /* padding-right: 15px;
  padding-left: 15px; */
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
  font-size: 13px;
  padding-top: 0.9rem;
  padding-bottom: 0.9rem;
  /* padding-left: 30px;
  padding-right: 20px; */
  margin-left: 50px;
  letter-spacing: 1px;
  color: #000;
  font-weight: 500;
  text-transform: uppercase;
  opacity: 1 !important;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  font-family: "Work Sans", Arial, sans-serif;

  ${(props) =>
    props.active &&
    `color: ${Color.primaryColor};
    `}
`;

// export const NavBarWrapper = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   height: 50px;
//   background-color: lightgreen;
//   width: 800px;
//   margin: auto;
// `;

export const GetStarted = styled(Link)<MenuProps>`
  background: ${Color.primaryColor};
  color: white;
  font-weight: 700;
  padding: 12px 22px;
  border-radius: 7px;
  border: 1px solid ${Color.primaryColor};
  transition: 0.4s;

  &:hover {
    border: 1px solid ${Color.primaryColor};
    color: ${Color.primaryColor};
    background: white;
  }
`;
