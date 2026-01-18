import React from "react";

function Topbar() {
  return (
    <div className="w-full h-16 bg-(--bg-components) border-b border-(--border-components) flex justify-between items-center p-1">
      <div className="w-10 h-10 bg-amber-300"></div>
      <div className="w-10 h-10 bg-amber-500"></div>
      <div className="w-10 h-10 bg-amber-900"></div>
    </div>
  );
}

export default Topbar;
