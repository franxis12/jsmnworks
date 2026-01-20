import React from "react";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import SidebarButton from "./SidebarButton";
import { logo } from "../imports/images";

function Sidebar() {
  const { expanded } = useContext(SidebarContext);

  return (
    <div
      className={`bg-(--second-color) py-2 h-full transition-all duration-300 flex flex-col items-center justify-between ${expanded ? "w-50" : "w-20"}`}
    >
      <div className="w-full h-12 flex items-center justify-center ">
        <img
          src={expanded ? logo.dark : logo.dark_square}
          className="h-12 transition-all "
        />
      </div>
      <div className="w-5/6 h-12 flex items-center justify-center ">
        <SidebarButton btnName={"Dashboard"} />
      </div>
      <div className="w-full h-12 flex items-center justify-center ">
        {/**/}
      </div>
    </div>
  );
}

export default Sidebar;
