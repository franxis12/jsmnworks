import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import CurrentUser from "./CurrentUser";

function Topbar() {
  const { expanded, setExpanded } = useContext(SidebarContext);

  return (
    <div className="w-full h-16 bg-(--bg-components) border-b border-(--border-components) flex justify-between items-center p-1">
      <div className=" h-10 flex items-center justify-center">
        <button
          className="w-auto h-8 bg-green-500 px-2 rounded-xl"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Collapsed" : "Expand"}
        </button>
      </div>
      <div className="w-5/10 h-10 bg-gray-300 rounded-4xl border border-gray-400"></div>
      <div className="w-fit h-10  items-center pr-2">
        <CurrentUser />
      </div>
    </div>
  );
}

export default Topbar;
