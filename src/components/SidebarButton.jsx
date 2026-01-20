import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { Icons } from "../imports/icons";

function SidebarButton({ btnName, onClick }) {
  const { expanded } = useContext(SidebarContext);

  return (
    //Need to add inline gradients  from second-color to bg-color
    <div className=" w-full h-10 flex-1 items-center">
      <div className=" w-full h-4/6 rounded-l-lg flex items-center justify-center font-medium">
        <button
          onClick={onClick}
          className={`${expanded ? "w-full" : ""} text-(--text-color-op) text-sm transition-colors duration-75 flex items-center  gap-2 p-2 rounded-full border border-white/30 `}
        >
          <Icons.Home className={`w-7 h-auto text-(--primary-color)`} />
          <p className={`${expanded ? "w-full" : "w-0 "}`}>{btnName}</p>
        </button>
      </div>
    </div>
  );
}

export default SidebarButton;
