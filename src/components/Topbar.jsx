import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import CurrentUser from "./CurrentUser";
import { Icons } from "../imports/icons";

function Topbar() {
  const { expanded, setExpanded } = useContext(SidebarContext);

  return (
    <div className="w-full h-16 bg-(--bg-components) border-b border-(--border-components) flex justify-between items-center p-1">
      <div className=" h-10 flex items-center justify-center">
        <button
          className="w-8 h-8 border  rounded-full"
          onClick={() => setExpanded(!expanded)}
        >
          <Icons.arrow_mini
            className={`${expanded ? "rotate-270" : "rotate-90"} transition-all duration-500 w-8 h-8`}
          />
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
