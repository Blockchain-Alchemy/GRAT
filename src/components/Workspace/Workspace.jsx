import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import BlocklyComponent from "../Blockly";
import "./Workspace.css";
import Menu from "../Menu/Menu";
import Switch from "../Switch/Switch";
import BlockCategory from "../BlockCategory/BlockCategory";
import ControlPanel from "../ControlPanel/ControlPanel";
import ConsoleView from '../ConsoleView/ConsoleView';
import CodeView from '../CodeView/CodeView';
import "../../generator/python";

const Workspace = () => {
  const dispatch = useDispatch();
  const simpleWorkspace = useRef();
  const footerRef = useRef();
  const controlRef = useRef();
  const CompileRef = useRef();
  const blockRef = useRef();
  const pythonRef = useRef();
  const smartRef = useRef();

  useEffect(() => {
    console.log('simpleWorkspace', simpleWorkspace.current)
    //getBlock();
    //getHeight();
  }, [dispatch, simpleWorkspace, controlRef]);

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
    
    if (controlRef.current) {
      controlRef.current.style.bottom = `${height}px`;
      controlRef.current.style.transform = `translate(-130%, -20px)`;
    }
  };

  const getBlock = () => {
    console.log("Block");
    footerRef.current.style.width = "63.75%";
    blockRef.current.style.display = "block";
    CompileRef.current.style.display = "none";
    smartRef.current.style.background = "rgba(37, 99, 235, var(--tw-bg-opacity))";
    pythonRef.current.style.background = "rgba(96, 165, 250, var(--tw-bg-opacity))";
  };

  const getPython = () => {
    console.log("Python");
    footerRef.current.style.width = "75%";
    blockRef.current.style.display = "none";
    CompileRef.current.style.display = "block";
    pythonRef.current.style.background = "rgba(37, 99, 235, var(--tw-bg-opacity))";
    smartRef.current.style.background = "rgba(96, 165, 250, var(--tw-bg-opacity))";
  };

  return (
    <div className="App">
      <Menu />
      <Switch />
      <div ref={blockRef}>
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
        <div className="control-panel">
          <ControlPanel 
            workspace={simpleWorkspace.current?.workspace}
          />
          <ConsoleView />
        </div>
      </div>

      <div className="hidden" ref={CompileRef}>
        <CodeView />
      </div>
    </div>
  );
};

export default Workspace;
