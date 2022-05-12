import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";
import BlocklyPy from "blockly/python";
import { setCode, consoleLog } from "../../store/actions"
import "../../generator/python";
import * as api from "../../service"

const ControlPanel = forwardRef((props, ref) => {
  const dispatch = useDispatch();

  const generateCode = () => {
    const code = BlocklyPy.workspaceToCode(props.workspace);
    dispatch(consoleLog('generate code.'));
    dispatch(setCode(code));
  };

  const compileCode = () => {
    console.log("compile.");
    const code = BlocklyPy.workspaceToCode(props.workspace);
    const base64 = Buffer.from(code).toString("base64");
    api.compile("untitled", base64)
      .then(result => {
        dispatch(consoleLog(result));
      });
  };

  return (
    <div className="rounded-md font-bold">
      <div className="text-xl text-center">Contract Control Panel</div>
      <div className="text-base text-center pt-3">
        <button
          className="mx-1 px-2 py-1 bg-white shadow-md rounded-md font-semibold"
          onClick={generateCode}
        >
          Convert
        </button>
        <button
          className="mx-1 px-2 py-1 bg-white shadow-md rounded-md font-semibold"
          onClick={generateCode}
        >
          Save
        </button>
        <button
          className="ml-1 px-2 py-1 bg-white shadow-md rounded-md font-semibold"
          onClick={compileCode}
        >
          Compile
        </button>
      </div>
    </div>
  );
});

export default ControlPanel;
