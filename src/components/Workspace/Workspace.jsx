import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Blockly from "blockly/core";
import { UnityContext } from "react-unity-webgl";
import { useDispatch, useSelector } from "react-redux";
import BlocklyComponent from "../Blockly";
import "./Workspace.css";
import Switch from "../Switch/Switch";
import BlockCategory from "../BlockCategory/BlockCategory";
import ControlPanel from "../ControlPanel/ControlPanel";
import CodeView from "../CodeView/CodeView";
import {
  updateLessonStateAction,
  setContractNameAction,
} from "../../store/actions";
import Recipe from '../../recipes/donate.json';

const unityContext = new UnityContext({
  loaderUrl: 'Build/1.loader.js',
  dataUrl: 'Build/1.data',
  frameworkUrl: 'Build/1.framework.js',
  codeUrl: 'Build/1.wasm',
});

const Workspace = () => {

  useEffect(function () {
    unityContext.on('progress', (progression) => {
      console.log('progression', progression);
    });

    unityContext.on('Converted', () => {
      console.log('converted');
    });
  }, []);

  const recipes = Recipe;
  const dispatch = useDispatch();
  const workspaceRef = useRef();
  const footerRef = useRef();
  const [tabIndex, setTabIndex] = useState(1);
  const timeline = useSelector(state => state.LessonState.timeline);

  useEffect(() => {
    timeline >= 0 && unityContext.send("GameManager", "XP"); 
  }, [unityContext, timeline])

  useEffect(() => {
    const workspace = workspaceRef.current.workspace;
    workspace.addChangeListener((event) => {
      if (timeline + 1 >= recipes.length) {
        return;
      }
      const recipe = recipes[timeline + 1];
      if (recipe) {
        const exp = timeline + 1;
        if (recipe.event.type === 'BLOCK_CREATE' && event.type === Blockly.Events.BLOCK_CREATE) {
          if (event.json.type === recipe.block.type) {
            dispatch(updateLessonStateAction(exp));
          }
        } else if (recipe.event.type === 'BLOCK_CHANGE' && event.type === Blockly.Events.BLOCK_CHANGE) {
          if (event.name === recipe.event.name) {
            const block = workspace.getBlockById(event.blockId);
            if (block && block.type === recipe.block.type) {
              if (recipe.block.name) {
                if (recipe.block.name.toLowerCase() === event.newValue.toLowerCase()) {
                  dispatch(updateLessonStateAction(exp));
                }
              } else if (recipe.block.variable) {
                const variable = Blockly.Variables.getVariable(workspace, event.newValue);
                if (recipe.block.variable.toLowerCase() === variable.name.toLowerCase()) {
                  dispatch(updateLessonStateAction(exp));
                }
              } else {
                dispatch(updateLessonStateAction(exp));
              }
              if (recipe.block.type === 'contract') {
                dispatch(setContractNameAction(event.newValue));
              }
            }
          }
        } else if (recipe.event.type === 'BLOCK_MOVE' && event.type === Blockly.Events.BLOCK_MOVE) {
          if (recipe.block.parent) {
            const parentId = event.newParentId;
            if (parentId) {
              const block = workspace.getBlockById(parentId);
              if (block && block.type === recipe.block.parent.type) {
                dispatch(updateLessonStateAction(exp));
              }
            }
          }
        } else if (recipe.event.type === 'VAR_RENAME' && event.type === 'var_rename') {
          if (recipe.block.name === event.newName) {
            dispatch(updateLessonStateAction(exp));
          }
        }
      }
    });
  }, [dispatch, recipes, timeline]);

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
          <ControlPanel workspace={workspaceRef.current?.workspace} unityContext={unityContext}/>
          {/* <ConsoleView /> */}
        </div>
      </div>

      {tabIndex === 2 && <CodeView />}
    </div>
  );
};

export default Workspace;
