import React from "react";
import ReactDOM from 'react-dom'

const SideDrawer: React.FC<any> = ({children}) => {
   const content = <aside className="side-drawer">{children}</aside>;
   return ReactDOM.createPortal(content, document.getElementById('drawer-hook')!)
};

export default SideDrawer;


