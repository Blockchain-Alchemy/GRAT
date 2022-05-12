import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import * as api from "./service";
import Blockly from "blockly/core";
import BlocklyComponent from "./components/Blockly";
import BlockCategory from "./components/BlockCategory/BlockCategory";
import BlocklyPy from "blockly/python";
import "./generator/javsacript";
import "./generator/python";
import {
  CompileField,
  ConsoleField,
  ProjectsField,
} from "./fields/CustomField";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "Build/1.loader.js",
  dataUrl: "Build/1.data",
  frameworkUrl: "Build/1.framework.js",
  codeUrl: "Build/1.wasm",
});

const App = () => {
  const simpleWorkspace = useRef();
  const footerRef = useRef();
  const sideRef = useRef();
  const controlRef = useRef();
  const CompileRef = useRef();
  const BlockRef = useRef();
  const pythonRef = useRef();
  const smartRef = useRef();

  useEffect(() => {
    if (simpleWorkspace.current) {
      const workspace = simpleWorkspace.current.workspace;
      workspace.registerButtonCallback(
        "CREATE_CONTRACT_VARIABLE",
        function (button) {
          Blockly.Variables.createVariableButtonHandler(
            button.getTargetWorkspace(),
            undefined,
            "contract"
          );
        }
      );
    }
    getBlock();
    getHeight();
  }, [simpleWorkspace]);

  /*useEffect(() => {
    api.compile().then(result => console.log(result));
  }, [])*/

  const getHeight = () => {
    const height = footerRef.current.clientHeight;
    console.log(height);
    const workspace = ReactDOM.findDOMNode(
      document.querySelector("rect.blocklyMainBackground")
    );
    workspace.style.height = `calc(100% - ${height}px)`;
    const trash = ReactDOM.findDOMNode(
      document.querySelector("g.blocklyTrash image")
    );
    const trash1 = ReactDOM.findDOMNode(
      document.querySelector("g.blocklyTrash image:last-child")
    );
    trash.style.transform = `translate(20px, -${height}px)`;
    trash1.style.transform = `translate(20px, -${height}px)`;
    controlRef.current.style.bottom = `${height}px`;
    controlRef.current.style.transform = `translate(-130%, -20px)`;
  };

  const generateCode = () => {
    const code = BlocklyPy.workspaceToCode(simpleWorkspace.current.workspace);
    console.log("Result:");
    console.log(code);
  };

  const getBlock = () => {
    console.log("Block");
    footerRef.current.style.width = "63.75%";
    BlockRef.current.style.display = "block";
    CompileRef.current.style.display = "none";
    smartRef.current.style.background =
      "rgba(37, 99, 235, var(--tw-bg-opacity))";
    pythonRef.current.style.background =
      "rgba(96, 165, 250, var(--tw-bg-opacity))";
  };

  const getPython = () => {
    console.log("Python");
    footerRef.current.style.width = "75%";
    BlockRef.current.style.display = "none";
    CompileRef.current.style.display = "block";
    pythonRef.current.style.background =
      "rgba(37, 99, 235, var(--tw-bg-opacity))";
    smartRef.current.style.background =
      "rgba(96, 165, 250, var(--tw-bg-opacity))";
  };

  const compileCode = () => {
    console.log("compile...");
    const code = BlocklyPy.workspaceToCode(simpleWorkspace.current.workspace);
    const base64 = Buffer.from(code).toString("base64");
    api.compile("untitled", base64);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="absolute">
          <img src="grat.png" className="h-20" alt="Grat" />
        </div>
        <div className="absolute float-right bottom-0 right-0 text-white">
          <button
            className="btn bg-blue-600 clicked text-xl font-semibold hover:bg-blue-700 p-2 rounded-l-full pl-5"
            onClick={getBlock}
            ref={smartRef}
          >
            <span className="material-symbols-outlined mr-1">extension</span>
            Blocks
          </button>
          <button
            className="btn bg-blue-400 text-xl font-semibold hover:bg-blue-700 p-2 rounded-r-full pr-5"
            onClick={getPython}
            ref={pythonRef}
          >
            <span className="material-symbols-outlined mr-1">code</span>
            Smartpy
          </button>
        </div>
      </header>
      <div ref={BlockRef}>
        <BlocklyComponent
          ref={simpleWorkspace}
          readOnly={false}
          trashcan={true}
          media={"media/"}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true,
          }}
        >
          <BlockCategory />
        </BlocklyComponent>
        <div
          className="absolute bg-blue-400 p-2 rounded-md font-bold bottom-0 z-50 left-3/4"
          ref={controlRef}
        >
          <div className="text-xl text-center">Contract Control Panel</div>
          <p className="text-base text-center pt-3">
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
          </p>
        </div>
        <div className="absolute bottom-0 right-1/4" ref={footerRef}>
          <ConsoleField></ConsoleField>
        </div>
      </div>
      <div className="hidden" ref={CompileRef}>
        <CompileField></CompileField>
      </div>
      <div
        className="absolute bottom-0 right-0 w-1/4"
        id="Sidebar"
        ref={sideRef}
      >
        <Unity className="w-full h-2/5" unityContext={unityContext} />
        <ProjectsField></ProjectsField>
      </div>
    </div>
  );
};

export default App;
