import React from "react";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import SidebarButton from "./SidebarButton";

function Sidebar() {
  const { expanded } = useContext(SidebarContext);

  return (
    <div
      className={`bg-(--second-color) pl-2 py-2 h-full transition-all duration-300 flex items-center ${expanded ? "w-50" : "w-15"}`}
    >
      <SidebarButton btnName={"Dashboard"} />
    </div>
  );
}

export default Sidebar;
