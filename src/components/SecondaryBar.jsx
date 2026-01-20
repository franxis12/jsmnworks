import React from "react";

function SecondaryBar() {
  return (
    <div className="w-full h-10 bg-(--bg-components) border-b border-(--border-components) flex justify-between items-center p-1">
      <div className="w-30 h-5 bg-amber-300/10 border"></div>
      <div className="w-10 h-5 bg-amber-500/10 border"></div>
      <div className="w-10 h-5 bg-amber-900/10 border"></div>
    </div>
  );
}

export default SecondaryBar;
