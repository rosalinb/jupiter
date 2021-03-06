import * as Styled from "./styled";
import { useLocation } from "react-router-dom";
import RouteConfig from "../../../config/RouteConfig";

function DesktopMenu(props) {
  const location = useLocation();

  return (
    <>
      <header>
        <Styled.NAV isSticky={props.isSticky}>
          <Styled.Container>
            <Styled.Logo to="/">Jupiter</Styled.Logo>

            <Styled.MainMenuBar>
              <Styled.UL>
                <Styled.LI>
                  <Styled.Link
                    to={RouteConfig.home}
                    active={location.pathname === RouteConfig.home}
                  >
                    Home
                  </Styled.Link>
                </Styled.LI>
                <Styled.LI>
                  <Styled.Link
                    to={RouteConfig.courses}
                    active={location.pathname === RouteConfig.courses}
                  >
                    Courses
                  </Styled.Link>
                </Styled.LI>
                <Styled.LI>
                  <Styled.Link
                    to={RouteConfig.signin}
                    active={location.pathname === RouteConfig.signin}
                  >
                    Signin
                  </Styled.Link>
                </Styled.LI>
              </Styled.UL>
            </Styled.MainMenuBar>
          </Styled.Container>
        </Styled.NAV>
      </header>
    </>
  );
}

export default DesktopMenu;
