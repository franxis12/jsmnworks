import React from "react";

function CurrentUser() {
  return (
    <div className="w-fit h-10 flex items-center gap-2">
      <img className="w-10 h-10 rounded-full border" />
      <div className="flex-col">
        <h2>Francis Martinez</h2>
        <h3 className="text-xs text-gray-300/50">Member</h3>
      </div>
    </div>
  );
}

export default CurrentUser;
