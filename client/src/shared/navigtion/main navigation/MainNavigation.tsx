import './main-navigation.scss'
import { useState } from "react";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import Backdrop from "../UIElements/Backdrop";
import { AnimatePresence, motion } from "framer-motion";

const MainNavigation: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <>
      {isDrawerOpen && <Backdrop onClick={() => setIsDrawerOpen(false)} />}
      <AnimatePresence>
        {isDrawerOpen && (
          <SideDrawer className = 'slide-in-left'>
            <motion.nav className="main-navigation_drawer-nav" exit={{ x:'-100vw' , transition:{duration:0.5}}}>
              <NavLinks onClick = {() => setIsDrawerOpen(false) }  />
            </motion.nav>
          </SideDrawer>
        )}
      </AnimatePresence>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={() => setIsDrawerOpen(true)}
        >
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
