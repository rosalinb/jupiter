import * as Styled from "./styled";
import { useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import RouteConfig from "../../../config/RouteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Transition } from "react-transition-group";
import Color from "../../../utils/Color";

function MobileMenu() {
  // const location = useLocation();
  const duration = 250;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    position: "absolute",
    left: 0,
    top: 70,
    boxShadow: `1px 1px 5px 0px ${Color.primarySectionHoverColor}`,
    backgroundColor: Color.primarySectionColor,
    width: "100%",
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <>
      <header>
        <Styled.MobileNav>
          <Styled.Container>
            <Styled.Logo to="/">Jupiter</Styled.Logo>

            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              onClick={onHamburgerClick}
            ></FontAwesomeIcon>

            {/* {isMenuOpen && ( */}
            {/* <Styled.ULContainer> */}
            <Transition in={isMenuOpen} timeout={500}>
              {(state) => {
                return (
                  <div
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state],
                    }}
                  >
                    {/* <Styled.ULContainer> */}
                    <Styled.UL>
                      <li>
                        <Styled.Link to={RouteConfig.home}>Home</Styled.Link>
                      </li>
                      <li>
                        <Styled.Link to={RouteConfig.courses}>
                          Courses
                        </Styled.Link>
                      </li>
                      <li>
                        <Styled.Link to={RouteConfig.signin}>
                          SignIn
                        </Styled.Link>
                      </li>
                    </Styled.UL>
                    {/* </Styled.ULContainer> */}
                  </div>
                );
              }}
              {/* <Styled.UL>
                    <li>
                      <Styled.Link to={RouteConfig.home}>Home</Styled.Link>
                    </li>
                    <li>
                      <Styled.Link to={RouteConfig.courses}>
                        Courses
                      </Styled.Link>
                    </li>
                    <li>
                      <Styled.Link to={RouteConfig.signin}>SignIn</Styled.Link>
                    </li>
                  </Styled.UL> */}
            </Transition>
            {/* </Styled.ULContainer> */}
            {/* )} */}
          </Styled.Container>
        </Styled.MobileNav>
      </header>
    </>
  );
}

export default MobileMenu;
