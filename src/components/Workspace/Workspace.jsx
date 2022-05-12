import React, { useRef, useState, useEffect } from "react";
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
  const [tabIndex, setTabIndex] = useState(1);

  useEffect(() => {
    initialize();
  }, []);

  /*useEffect(() => {
    api.compile().then(result => console.log(result));
  }, [])*/

  const initialize = () => {
    const height = footerRef.current.clientHeight + 10;
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

  /*const getPython = () => {
    console.log("Python");
    footerRef.current.style.width = "75%";
    blockRef.current.style.display = "none";
    CompileRef.current.style.display = "block";
    pythonRef.current.style.background = "rgba(37, 99, 235, var(--tw-bg-opacity))";
    smartRef.current.style.background = "rgba(96, 165, 250, var(--tw-bg-opacity))";
  };*/

  const handleSwitch = (tabIndex) => {
    setTabIndex(tabIndex);
  }

  return (
    <div className="workspace">
      <Menu />
      <Switch tabIndex={tabIndex} handleSwitch={handleSwitch} />

      { tabIndex === 1 ? (
        <>
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
          <div ref={footerRef} className="bg-gray-300 control-panel">
            <ControlPanel workspace={simpleWorkspace.current?.workspace} />
            <ConsoleView />
          </div>
        </>
      ) : (
        <CodeView code={"123123"}/>
      )}
    </div>
  );
};

export default Workspace;
