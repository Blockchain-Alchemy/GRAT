import React from "react";

const ConsoleView = () => {
  return(
    <div className="bg-gray-300 p-2 pt-0 rounded-md my-1">
      <div className="text-lg font-semibold text-center p-1">Console</div>
      <div className="overflow-y-auto h-12 bg-white border border-gray-400">
      </div>
    </div>
  );
};

export default ConsoleView;