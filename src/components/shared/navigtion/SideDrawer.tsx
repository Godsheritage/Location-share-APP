import React from "react";

const SideDrawer: React.FC<any> = ({children}) => {
  return <aside className="side-drawer">{children}</aside>;
};

export default SideDrawer;
