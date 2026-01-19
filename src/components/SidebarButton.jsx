import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

function SidebarButton({ btnName, onClick }) {
  const { expanded } = useContext(SidebarContext);

  return (
    //Need to add inline gradients  from second-color to bg-color
    <div className="bg-amber-400 w-full h-10 flex-1 items-center">
      <div className="bg-(--second-color) w-full h-1/6 rounded-br-lg" />
      <div className="bg-(--bg-color) border-l-2 border-gray-900/50 w-full h-4/6 rounded-l-lg flex items-center justify-center font-medium">
        <button
          onClick={onClick}
          className={`text-sm transition-colors duration-75`}
        >
          {expanded ? btnName : "BT"}
        </button>
      </div>
      <div className="bg-(--second-color) w-full h-1/6 rounded-tr-lg" />
    </div>
  );
}

export default SidebarButton;
