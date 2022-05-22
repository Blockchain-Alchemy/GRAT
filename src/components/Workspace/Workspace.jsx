import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Blockly from "blockly/core";
import { useDispatch, useSelector } from "react-redux";
import BlocklyComponent from "../Blockly";
import "./Workspace.css";
import Switch from "../Switch/Switch";
import BlockCategory from "../BlockCategory/BlockCategory";
import ControlPanel from "../ControlPanel/ControlPanel";
import CodeView from "../CodeView/CodeView";
import Loader from "../Loader/Loader";
import {
  updateLessonStateAction,
  setContractNameAction,
} from "../../store/actions";

const Workspace = ({ unityContext, loading, recipe }) => {
  const dispatch = useDispatch();
  const workspaceRef = useRef();
  const footerRef = useRef();
  const controlRef = useRef();
  const [tabIndex, setTabIndex] = useState(1);
  const timeline = useSelector(state => state.LessonState.timeline);

  useEffect(() => {
    console.log('timeline', timeline);
    timeline >= 0 && unityContext.send("GameManager", "XP"); 
  }, [unityContext, timeline])

  useEffect(() => {
    const height = footerRef.current.clientHeight;
    const workspaceHtml = ReactDOM.findDOMNode(
      document.querySelector("rect.blocklyMainBackground")
    );
    workspaceHtml.style.height = `calc(100% - ${height}px)`;
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

    const workspace = workspaceRef.current.workspace;
    workspace.addChangeListener((event) => {
      console.log('recipe', recipe)
      if (event.type === Blockly.Events.BLOCK_CREATE) {
        if (event.json.type === "contract") {
          dispatch(updateLessonStateAction(0));
        } else if (event.json.type === "entrypoint_defnoreturn") {
          dispatch(updateLessonStateAction(2));
        }
      }
      else if (event.type === Blockly.Events.BLOCK_CHANGE) {
        if (event.name === "NAME") {
          const block = workspace.getBlockById(event.blockId);
          if (block) {
            if (block.type === "contract") {
              dispatch(updateLessonStateAction(1));
              dispatch(setContractNameAction(event.newValue));
            } else if (
              block.type === "entrypoint_defnoreturn" &&
              event.newValue.toLowerCase() === "mint"
            ) {
              dispatch(updateLessonStateAction(3));
            }
          }
        }
      }
      else if (event.type === Blockly.Events.BLOCK_MOVE) {
        const parentId = event.newParentId;
        if (parentId) {
          const block = workspace.getBlockById(parentId);
          if (block && block.type === "entrypoint_defnoreturn") {
            dispatch(updateLessonStateAction(4));
          }
        }
      }
    });
  }, [dispatch]);

  const handleSwitch = (tabIndex) => {
    setTabIndex(tabIndex);
  };

  return (
    <div className="workspace">
      <Switch tabIndex={tabIndex} handleSwitch={handleSwitch} />

      <div className={tabIndex === 1 ? "" : "hidden"}>
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
          {/* <ConsoleView /> */}
        </div>
      </div>

      {tabIndex === 2 && <CodeView />}

      {loading && <Loader />}
    </div>
  );
};

export default Workspace;
