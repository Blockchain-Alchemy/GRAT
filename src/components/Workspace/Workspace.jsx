import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
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

  const handleSwitch = (tabIndex) => {
    setTabIndex(tabIndex);
  }

  return (
    <div className="workspace">
      <Menu />
      <Switch tabIndex={tabIndex} handleSwitch={handleSwitch} />

      <div className={tabIndex === 1? '': 'hidden'}>
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
      </div>
      
      { tabIndex === 2 && (
        <CodeView />
      )}
    </div>
  );
};

export default Workspace;
