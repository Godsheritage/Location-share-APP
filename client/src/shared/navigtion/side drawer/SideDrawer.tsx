import React from "react";
import "./side-drawer.scss"
import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from "react-dom";

const SideDrawer: React.FC<any> = ({ children }) => {
  const variants = {
    hidden: { x: "-100vw" },
    visible: { x: 0, transition: { duration: 1 } },
  };

  const content = (
    <motion.aside
      className="side-drawer"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.aside>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("drawer-hook")!
  );
};

export default SideDrawer;
