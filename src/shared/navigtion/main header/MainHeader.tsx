import React from "react";
import "./main-header.scss"

const MainHeader: React.FC<any> = ({ children }) => {
  return <header className="main-header">{children}</header>;
};

export default MainHeader;

