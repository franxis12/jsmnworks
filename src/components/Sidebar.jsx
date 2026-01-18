import React from "react";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

function Sidebar() {
  const { expanded, setExpanded } = useContext(SidebarContext);

  return (
    <div className="bg-(--second-color) w-50 h-full shadow-2xs transition-all">
      <h1></h1>
    </div>
  );
}

export default Sidebar;
