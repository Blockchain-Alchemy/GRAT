import React from "react";
import { useSelector } from "react-redux";

const ConsoleView = () => {
  const messages = useSelector((state) => state.BlocklyState.messages);

  return (
    <div className="bg-gray-300 p-2 pt-0 rounded-md my-1">
      <div className="text-lg font-semibold text-center p-1">Console</div>
      <textarea
        className="overflow-y-auto h-16 bg-white border border-gray-400 w-full"
        defaultValue={messages.join("\n")}
      ></textarea>
    </div>
  );
};

export default ConsoleView;
