import { useState } from "react";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>

    {isDrawerOpen && <Backdrop  onClick={() => setIsDrawerOpen(false)} />}
      {isDrawerOpen && (
        <SideDrawer>
          <nav className="main-navigation_drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={() => setIsDrawerOpen(true)}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
