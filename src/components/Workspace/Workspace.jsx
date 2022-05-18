import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Blockly from "blockly/core";
import BlocklyComponent from "../Blockly";
import "./Workspace.css";
import Switch from "../Switch/Switch";
import BlockCategory from "../BlockCategory/BlockCategory";
import ControlPanel from "../ControlPanel/ControlPanel";
import ConsoleView from '../ConsoleView/ConsoleView';
import CodeView from '../CodeView/CodeView';
import Loader from '../Loader/Loader';

const Workspace = ({ loading }) => {
  const workspaceRef = useRef();
  const footerRef = useRef();
  const controlRef = useRef();
  const [tabIndex, setTabIndex] = useState(1);

  useEffect(() => {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~', workspaceRef.current)
    footerRef.current && initialize();
    workspaceRef.current && initEvents();
  }, [])

  /*useEffect(() => {
    api.compile().then(result => console.log(result));
  }, [])*/

  const initEvents = () => {
    const workspace = workspaceRef.current.workspace;
    workspace.addChangeListener(event => {
      console.log('event', event);
      if (event.type === Blockly.Events.BLOCK_MOVE) {
        console.log('move~~~~~~~')
      }
    })
  }

  const initialize = () => {
    const height = footerRef.current.clientHeight;
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
      <Switch tabIndex={tabIndex} handleSwitch={handleSwitch} />

      <div className={tabIndex === 1? '': 'hidden'}>
        <BlocklyComponent
          ref={workspaceRef}
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
          <ControlPanel workspace={workspaceRef.current?.workspace} />
          <ConsoleView />
        </div>
      </div>
      
      { tabIndex === 2 && <CodeView /> }
    </div>
  );
};

export default Workspace;
