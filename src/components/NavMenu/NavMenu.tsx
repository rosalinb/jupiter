import DesktopMenu from "./DesktopMenu/DesktopMenu";
import MobileMenu from "./MobileMenu/MobileMenu";
import useMedia from "use-media";

function NavMenu() {
  const isDesktop = useMedia({ minWidth: "1000px" });

  return (
    <>{isDesktop ? <DesktopMenu></DesktopMenu> : <MobileMenu></MobileMenu>}</>
  );
}

export default NavMenu;
